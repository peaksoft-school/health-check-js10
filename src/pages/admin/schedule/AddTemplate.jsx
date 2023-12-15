import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import Modal from '../../../components/UI/Modal'
import { CloseIcon, GreenPlus } from '../../../assets'
import TimePicker from '../../../components/UI/TimePicker'
import Button from '../../../components/UI/Button'
import { addTimesheets } from '../../../store/schedule/scheduleThunk'
import { notify } from '../../../utils/constants/snackbar'

const AddTemplate = ({ open, setOpen, doctorInfo, scheduleUpdate }) => {
   const [intervalCount, setIntervalCount] = useState(1)
   const [intervalValues, setIntervalValues] = useState([
      {
         id: 1,
         newStartTimeHour: '',
         newStartTimeMinute: '',
         newEndTimeHour: '',
         newEndTimeMinute: '',
      },
   ])

   const dispatch = useDispatch()

   const handleClose = () => {
      setOpen(false)
   }

   const handleAddInterval = () => {
      setIntervalCount((prevCount) => prevCount + 1)
      setIntervalValues((prevValues) => [
         ...prevValues,
         {
            id: intervalCount,
            newStartTimeHour: '',
            newStartTimeMinute: '',
            newEndTimeHour: '',
            newEndTimeMinute: '',
         },
      ])
   }

   const handleTimeChange = (index, field, value) => {
      setIntervalValues((prevValues) => {
         const newValues = [...prevValues]
         newValues[index][field] = value
         return newValues
      })
   }

   const convertToSwaggerFormat = (intervals) => {
      return intervals.map((interval) => {
         const formatTime = (value) => value.toString().padStart(2, '0')
         const newStartTime = `${formatTime(
            interval.newStartTimeHour
         )}:${formatTime(interval.newStartTimeMinute)}`
         const newEndTime = `${formatTime(
            interval.newEndTimeHour
         )}:${formatTime(interval.newEndTimeMinute)}`
         return { newStartTime, newEndTime }
      })
   }

   const checkOverlap = (intervals) => {
      for (let i = 0; i < intervals.length - 1; i += 1) {
         const intervalA = intervals[i]

         if (
            intervalA.newStartTimeHour !== undefined &&
            intervalA.newStartTimeMinute !== undefined &&
            intervalA.newEndTimeHour !== undefined &&
            intervalA.newEndTimeMinute !== undefined
         ) {
            const endTimeA = new Date(
               `2000-01-01T${intervalA.newEndTimeHour}:${intervalA.newEndTimeMinute}`
            )

            for (let j = i + 1; j < intervals.length; j += 1) {
               const intervalB = intervals[j]

               if (
                  intervalB.newStartTimeHour !== undefined &&
                  intervalB.newStartTimeMinute !== undefined &&
                  intervalB.newEndTimeHour !== undefined &&
                  intervalB.newEndTimeMinute !== undefined
               ) {
                  const startTimeB = new Date(
                     `2000-01-01T${intervalB.newStartTimeHour}:${intervalB.newStartTimeMinute}`
                  )

                  if (startTimeB < endTimeA) {
                     return true
                  }
               }
            }
         }
      }

      return false
   }
   console.log(doctorInfo, 'info')

   const handleSave = () => {
      const formattedIntervals = convertToSwaggerFormat(intervalValues)

      const isEmptyTime = intervalValues.some(
         (interval) =>
            interval.newStartTimeHour === '' ||
            interval.newStartTimeMinute === '' ||
            interval.newEndTimeHour === '' ||
            interval.newEndTimeMinute === ''
      )

      if (isEmptyTime) {
         notify('Введите значения для всех интервалов', 'error')
         return
      }

      const isValid = intervalValues.every((interval) => {
         const startHour = parseInt(interval.newStartTimeHour, 10)
         const endHour = parseInt(interval.newEndTimeHour, 10)
         return startHour < 22 && endHour < 22 && startHour >= 6 && endHour >= 6
      })

      if (!isValid) {
         notify('Время не должно быть в диапазоне от 22:00 до 06:00', 'error')
         return
      }

      const isMoreValid = intervalValues.every((interval) => {
         const startHour = parseInt(interval.newStartTimeHour, 10)
         const startMinute = parseInt(interval.newStartTimeMinute, 10)
         const endHour = parseInt(interval.newEndTimeHour, 10)
         const endMinute = parseInt(interval.newEndTimeMinute, 10)

         if (
            startHour > endHour ||
            (startHour === endHour && startMinute >= endMinute)
         ) {
            notify(
               'Начальное время должно быть больше конечного времени',
               'error'
            )
            return false
         }

         const startTimeInMinutes = startHour * 60 + startMinute
         const endTimeInMinutes = endHour * 60 + endMinute

         if (endTimeInMinutes - startTimeInMinutes < 30) {
            notify('Минимальная разница должна быть 30 минут', 'error')
            return false
         }

         return startHour < 22 && endHour < 22 && startHour >= 6 && endHour >= 6
      })

      if (!isMoreValid) {
         return
      }

      const isOverlap = checkOverlap(intervalValues)

      if (isOverlap) {
         notify('Интервалы не могут перекрываться', 'error')
         return
      }

      dispatch(addTimesheets({ formattedIntervals, doctorInfo }))
         .then(() => {
            scheduleUpdate()
            handleClose()
            notify('Успешно сохранено')
         })
         .catch(() => {
            notify('Ошибка при сохранении')
         })
   }

   return (
      <Modal open={open} onClose={handleClose} padding="35px 45px">
         <StyledForm>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <h2>Установить шаблон</h2>
            <div className="container">
               <h6>График:</h6>
               <div className="charts">
                  {intervalValues.map((interval, index) => (
                     <div className="chart" key={interval.id}>
                        <TimePicker
                           variant="hours"
                           value={interval.newStartTimeHour}
                           onChange={(value) =>
                              handleTimeChange(
                                 index,
                                 'newStartTimeHour',
                                 value.target.value
                              )
                           }
                        />
                        <TimePicker
                           value={interval.newStartTimeMinute}
                           onChange={(value) =>
                              handleTimeChange(
                                 index,
                                 'newStartTimeMinute',
                                 value.target.value
                              )
                           }
                        />
                        <span>-</span>
                        <TimePicker
                           variant="hours"
                           value={interval.newEndTimeHour}
                           onChange={(value) =>
                              handleTimeChange(
                                 index,
                                 'newEndTimeHour',
                                 value.target.value
                              )
                           }
                        />
                        <TimePicker
                           value={interval.newEndTimeMinute}
                           onChange={(value) =>
                              handleTimeChange(
                                 index,
                                 'newEndTimeMinute',
                                 value.target.value
                              )
                           }
                        />
                     </div>
                  ))}
               </div>
            </div>
            <div
               className="add-interval"
               onClick={handleAddInterval}
               onKeyDown={handleAddInterval}
               role="presentation"
            >
               <GreenPlus />
               <h4>Добавить интервал</h4>
            </div>
            <div className="buttons">
               <Button variant="normal" onClick={handleClose}>
                  ОТМЕНИТЬ
               </Button>
               <Button onClick={handleSave}>СОХРАНИТЬ</Button>
            </div>
         </StyledForm>
      </Modal>
   )
}

export default AddTemplate

const StyledForm = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.2rem',
   h2: {
      textAlign: 'center',
      fontSize: '26px',
      fontWeight: '500',
   },
   '.container': {
      display: 'flex',
      gap: '14px',
      marginTop: '5%',
      h6: {
         color: '#464444',
         fontFamily: 'Manrope',
         fontSize: '1rem',
         fontWeight: '500',
         marginRight: '1rem',
         marginTop: '8px',
      },
   },
   '.charts': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      '.chart': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         gap: '14px',
      },
   },
   '.add-interval': {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginLeft: '18%',
      width: '40%',
      cursor: 'pointer',
      h4: {
         color: 'var(--primary-green, #048741)',
         fontSize: '1rem',
         fontWeight: '500',
         width: '100%',
      },
   },
   '.buttons': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '3%',
      button: {
         width: '48%',
         height: '2.7rem',
      },
   },
   '.closeIcon': {
      cursor: 'pointer',
      position: 'absolute',
      top: '1rem',
      right: '1.5rem',
   },
}))
