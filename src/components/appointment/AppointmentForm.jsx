import React from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import InputForm from './InputForm'
import Button from '../UI/Button'
import { departments, months } from '../../utils/constants/commons'
import { notify } from '../../utils/constants/snackbar'
import {
   createAppointments,
   getCode,
} from '../../store/appointment/appointmentThunk'

const AppointmentForm = ({
   date,
   service,
   selectedDoctorId,
   openRegistered,
}) => {
   const dispatch = useDispatch()

   const { codeEmail } = useSelector((state) => state.appointment)

   const {
      register,
      formState: { errors },
      getValues,
      setValue,
   } = useForm({
      mode: 'all',
      defaultValues: {
         name: '',
         phone: '',
         email: '',
         code: '',
      },
   })

   const getMonthNumber = (monthString) => {
      const monthIndex = months.findIndex(
         (m) => m && m.toLowerCase() === monthString.toLowerCase()
      )
      if (monthIndex !== -1) {
         const monthNumber = monthIndex + 1
         return monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`
      }
      notify('Месяц не найден', 'error')
      return null
   }

   const getDay = (day) => {
      if (day < 10) {
         return `0${day}`
      }
      return `${day}`
   }

   const handleKeyPress = (e) => {
      const keys = e.key
      if (!/^\d$/.test(keys) && keys !== '+') {
         e.preventDefault()
      }
   }

   const submitEmail = async (data, e) => {
      e.preventDefault()
      if (getValues('name') !== /^[a-zA-Z]+s[a-zA-Z]+$/) {
         dispatch(getCode({ email: data.email }))
      } else {
         notify('Напишите полное имя', 'error')
      }
   }

   const submitAppointment = async (data, e) => {
      e.preventDefault()
      const department = departments[service]
      const formatDate = `2023-${getMonthNumber(date.month)}-${getDay(
         date.day
      )}`
      const formatTime = date.time

      const obj = {
         department,
         doctorId: selectedDoctorId,
         date: formatDate,
         time: formatTime,
         code: data.code,
         ...data,
         codeEmail,
      }

      if (obj.code === codeEmail) {
         dispatch(createAppointments({ obj }))
            .unwrap()
            .then(() => openRegistered())
            .catch((error) =>
               console.log(error, 'error в AppointmentForm строка 85')
            )
      } else {
         notify('Не правильный код', 'error')
      }
   }

   return (
      <Form
         onSubmit={(e) =>
            codeEmail
               ? submitAppointment(getValues(), e)
               : submitEmail(getValues(), e)
         }
      >
         <div>
            <InputForm
               label="Ваше имя и фамилия"
               type="text"
               {...register('name', {
                  required: 'Поле не заполнено',
               })}
               onChange={(e) => setValue('name', e.target.value)}
               error={errors.name}
            />
            <InputForm
               label="Номер телефона"
               type="text"
               onKeyPress={handleKeyPress}
               {...register('phoneNumber', {
                  setValueAs: (v) => v.trim(),
                  required: 'Поле не заполнено',
                  minLength: {
                     value: 13,
                     message: 'Номер телефона слишком короткий',
                  },
                  maxLength: {
                     value: 13,
                     message: 'Номер телефона слишком длинный',
                  },
               })}
               onChange={(e) => setValue('phone', e.target.value)}
               error={errors.phone}
            />
            <InputForm
               label="Ваш e-mail"
               type="email"
               {...register('email', {
                  required: 'Поле не заполнено',
                  setValueAs: (v) => v.trim(),
                  pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: 'Неверный формат электронной почты',
                  },
               })}
               onChange={(e) => setValue('email', e.target.value)}
               error={errors.email}
            />
            {codeEmail && (
               <InputForm
                  label="Введите код из почты"
                  className="codeInput"
                  type="text"
                  onKeyPress={handleKeyPress}
                  {...register('code', {
                     required: 'Поле не заполнено',
                  })}
                  onChange={(e) => setValue('code', e.target.value)}
                  error={errors.code}
               />
            )}
         </div>

         <StyledButton type="submit">Продолжить</StyledButton>
      </Form>
   )
}

export default AppointmentForm

const Form = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.8rem',
   margin: '6px',
   padding: '30px 16px',
   backgroundColor: '#fff',
   borderRadius: '16px',
   '& .message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
   },
   '.codeInput': {
      width: '40%',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '100%',
}))
