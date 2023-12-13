import React, { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { MinusIcon } from '../../../assets'
import Button from '../../../components/UI/Button'
import TableSchedule from '../../../components/UI/TableSchedule'
import DatePicker from '../../../components/UI/DatePicker'
import { getAllSchedules } from '../../../store/schedule/scheduleThunk'
import AddTemplate from './AddTemplate'
import ChangeTemplate from './ChangeTemplate'

const SchedulePage = () => {
   const [startDate, setStartDate] = useState('')
   const [endDate, setEndDate] = useState('')
   const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false)
   const [isChangeModalOpen, setIsChangeModalOpen] = useState(false)
   const [selectedCell, setSelectedCell] = useState({
      date: '',
      doctor: null,
      rowIndex: -1,
      times: [],
   })

   const { isLoading, schedules } = useSelector((state) => state.schedule)

   const dispatch = useDispatch()

   const startDayOfMonth = startDate.$D < 10 ? `0${startDate.$D}` : startDate.$D
   const newStartDate = `${startDate.$y}-${startDate.$M + 1}-${startDayOfMonth}`

   const endDayOfMonth = endDate.$D < 10 ? `0${endDate.$D}` : endDate.$D
   const newEndDate = `${endDate.$y}-${endDate.$M + 1}-${endDayOfMonth}`

   const getSchedules = () => {
      dispatch(
         getAllSchedules({
            dateFrom: startDate ? newStartDate : undefined,
            dateUntil: endDate ? newEndDate : undefined,
         })
      )
   }

   useEffect(() => {
      dispatch(
         getAllSchedules({
            dateFrom: startDate ? newStartDate : undefined,
            dateUntil: endDate ? newEndDate : undefined,
         })
      )
   }, [])

   useEffect(() => {
      if (startDate && endDate) {
         dispatch(
            getAllSchedules({
               dateFrom: newStartDate,
               dateUntil: newEndDate,
            })
         )
      }
   }, [dispatch, startDate, endDate])

   const currentDate = new Date()

   const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

   const startDateHandler = (date) => {
      setStartDate(date)
   }
   const endDateHandler = (date) => {
      setEndDate(date)
   }

   const handleTemplateModalOpen = () => {
      setIsTemplateModalOpen(true)
   }

   const handleChangeModalOpen = () => {
      setIsChangeModalOpen(true)
   }

   const handleCellClick = async (doctor, rowIndex, date) => {
      const times =
         doctor.dateDayTimeInfos
            .find((day) => day.dateDay === date)
            ?.timeIntervals.map((interval) => ({
               startTime: interval.startTime,
               endTime: interval.endTime,
            })) || []

      await setSelectedCell({
         rowIndex,
         doctor,
         date,
         times,
      })
   }

   const generateNext10Days = () => {
      const next10Days = Array.from({ length: 30 }, (_, index) => {
         const date = new Date()
         date.setDate(currentDate.getDate() + index)
         return date.toISOString().split('T')[0]
      })
      return next10Days
   }

   const next10Days = generateNext10Days()

   const columns = useMemo(() => {
      const result = [
         {
            header: 'Специалисты',
            key: 'name',
            render: (doctor) => (
               <DoctorInfoBox>
                  <StyledDoctorImage
                     src={doctor.doctorImage}
                     alt="doctorImage"
                  />
                  <DoctorNameTitle>{doctor.doctorFullName}</DoctorNameTitle>
                  <DoctorDescriptionTitle>
                     {doctor.doctorPosition}
                  </DoctorDescriptionTitle>
               </DoctorInfoBox>
            ),
         },
      ]

      next10Days.forEach((date) => {
         const currentDate = new Date(date)
         const correctedDayOfWeek =
            currentDate.getDay() === 0 ? 7 : currentDate.getDay()
         const header = `${
            daysOfWeek[correctedDayOfWeek - 1]
         } ${currentDate.getDate()} ${new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()
         ).toLocaleString('ru-RU', { month: 'long' })}`

         result.push({
            header,
            key: date,
            render: (doctor) => {
               const daySchedule = doctor.dateDayTimeInfos.find(
                  (day) => day.dateDay === date
               )

               return (
                  <TimeBox
                     key={date}
                     hasTime={
                        daySchedule && daySchedule.timeIntervals.length > 0
                     }
                  >
                     {daySchedule &&
                        daySchedule.timeIntervals.map((interval) => (
                           <p
                              key={`${date}-${interval.startTime}-${interval.endTime}`}
                           >
                              {interval.startTime.slice(0, -3)} -{' '}
                              {interval.endTime.slice(0, -3)}
                           </p>
                        ))}
                  </TimeBox>
               )
            },
         })
      })

      return result
   }, [currentDate, next10Days])

   return (
      <div>
         <Box>
            <div>
               <ButtonsStyled
                  disabled={
                     !selectedCell.date || selectedCell.times.length === 0
                  }
                  onClick={handleChangeModalOpen}
               >
                  Изменить день
               </ButtonsStyled>
               <ButtonsStyled
                  disabled={
                     !selectedCell.date || selectedCell.times.length !== 0
                  }
                  onClick={handleTemplateModalOpen}
               >
                  Установить по шаблону
               </ButtonsStyled>
            </div>
            <div>
               <DatePicker value={startDate} onChange={startDateHandler} />

               <MinusIcon />

               <DatePicker value={endDate} onChange={endDateHandler} />
            </div>
         </Box>
         {isLoading ? (
            <h1>Loading...</h1>
         ) : (
            <>
               <GlobalContainer>
                  <TableBox>
                     <TableSchedule
                        columns={columns}
                        rows={schedules}
                        onCellClick={handleCellClick}
                        selectedCell={selectedCell}
                     />
                  </TableBox>
               </GlobalContainer>
               <AddTemplate
                  open={isTemplateModalOpen}
                  setOpen={setIsTemplateModalOpen}
                  doctorInfo={selectedCell}
                  schedueUpdate={getSchedules}
               />
               <ChangeTemplate
                  open={isChangeModalOpen}
                  setOpen={setIsChangeModalOpen}
                  doctorInfo={selectedCell}
                  schedueUpdate={getSchedules}
               />
            </>
         )}
      </div>
   )
}

export default SchedulePage

const StyledDoctorImage = styled('img')(() => ({
   width: '46px',
   height: '46px',
   borderRadius: '50%',
}))
const ButtonsStyled = styled(Button)(({ disabled }) => ({
   '&': {
      padding: '8px 20px 9px 20px',
      color: '#FFFF',
      background: '#048741',
      borderRadius: '4px',
      marginLeft: '20px',
   },
   '&:hover': {
      color: disabled ? '#4D4E51' : '#FFFF',
      background: disabled ? '#E0E2E7' : '#048741',
   },
   '&:disabled': {
      background: '#E0E2E7',
      color: '#4D4E51',
   },
}))
const Box = styled('div')`
   display: flex;
   justify-content: space-between;
   background-color: #fff;
   padding: 20px 20px 20px 0;
`
const GlobalContainer = styled('div')`
   background-color: #fff;
   padding: 10px 0;
   height: 100vh;
`

const TableBox = styled('div')`
   table {
      font-family: Manrope;
      width: 100%;
   }
   table,
   th,
   td {
      border: 1px solid #d9d9d9;
      border-collapse: collapse;
   }
   td:first-child {
      padding: 25px 25px 55px 25px;
      img {
         margin-bottom: 0.7rem;
      }
      div {
         width: 140px;
      }
   }
   td:not(:first-child) {
      padding: 7px !important;
      width: 150px;
      vertical-align: top;
   }
   th:first-child {
      h3 {
         color: var(--primary-black-gray, #4d4e51);
         text-transform: uppercase;
      }
   }
   .MuiTableContainer-root {
      height: 100vh;
   }
`
const DoctorInfoBox = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: Manrope;
   font-weight: 500;
`
const DoctorNameTitle = styled('p')`
   font-size: 15px;
   color: #222222;
`
const DoctorDescriptionTitle = styled('p')`
   font-size: 13px;
   line-height: 16.39px;
   color: #959595;
`
const TimeBox = styled('div')`
   ${(props) =>
      props.hasTime &&
      `
      background: #dbebff;
      border-left: 3px solid #1f6ed4;
   `}
   color: #1f6ed4;
   width: 110px;
   font-style: italic;
   font-weight: 500;
   padding: 5px;
`