import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
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
   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')
   const [email, setEmail] = useState('')
   const [code, setCode] = useState('')

   const dispatch = useDispatch()

   const { codeEmail } = useSelector((state) => state.appointment)

   const validation = !name || !phone || !email

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

   const submitEmail = async () => {
      dispatch(getCode({ email }))
   }
   const submitAppointment = async () => {
      let department = ''
      let formatDate = ''
      let formatTime = ''
      department = departments[service]
      formatDate = `2023-${getMonthNumber(date.month)}-${getDay(date.day)}`
      formatTime = date.time
      const obj = {
         department,
         doctorId: selectedDoctorId,
         date: formatDate,
         time: formatTime,
         name,
         phone,
         email,
         codeEmail,
      }
      if (code === codeEmail) {
         dispatch(createAppointments({ obj }))
            .unwrap()
            .then(() => openRegistered())
            .catch((error) =>
               notify(
                  error.response?.data.message || 'Ошибка при записи',
                  'error'
               )
            )
      } else {
         notify('Не правильный код', 'error')
      }
   }

   const changeNameHandler = (e) => {
      setName(e.target.value)
   }
   const changePhoneHandler = (e) => {
      setPhone(e.target.value)
   }
   const changeEmailHandler = (e) => {
      setEmail(e.target.value)
   }
   const changeCodeHandler = (e) => {
      setCode(e.target.value)
   }
   return (
      <Form>
         <div>
            <InputForm
               label="Ваше имя и фамилия"
               type="text"
               value={name}
               onChange={changeNameHandler}
            />
            <InputForm
               label="Номер телефона"
               type="number"
               value={phone}
               onChange={changePhoneHandler}
            />
            <InputForm
               label="Ваш e-mail"
               type="email"
               value={email}
               onChange={changeEmailHandler}
            />
            {codeEmail ? (
               <InputForm
                  label="Введите код из почты"
                  className="codeInput"
                  type="number"
                  value={code}
                  onChange={changeCodeHandler}
               />
            ) : null}
         </div>

         <StyledButton
            disabled={validation}
            onClick={codeEmail ? submitAppointment : submitEmail}
         >
            Продолжить
         </StyledButton>
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
   '.codeInput': {
      width: '40%',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '100%',
}))
