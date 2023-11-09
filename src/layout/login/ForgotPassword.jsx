import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel } from '@mui/material'
import styled from '@emotion/styled'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CloseIcon } from '../../assets'
import Modal from '../../components/UI/Modal'
import { Input } from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'
import { forgotPassword } from '../../store/auth/authThunk'
import { notify } from '../../utils/constants/snackbar'

const ForgotPassword = () => {
   const [open, setOpen] = useState(true)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleClose = () => setOpen(false)

   const {
      register,
      formState: { errors },
      getValues,
   } = useForm({
      mode: 'all',
      defaultValues: {
         email: '',
      },
   })

   const ipAddress = window.location.hostname

   const handleEmailSubmit = (e) => {
      e.preventDefault()
      const values = getValues().email
      localStorage.setItem('EMAIL_KEY_FROM_FORGOT_PASSWORD', values)
      const link = `http://${ipAddress}:3000/change-password`
      const email = values
      if (email) {
         dispatch(
            forgotPassword({
               email,
               link,
               navigate,
            })
         )
      } else {
         notify('Заполните поле', 'error')
      }
   }

   return (
      <Modal open={open} onClose={handleClose} borderRadius="5px">
         <FormControlStyled onSubmit={handleEmailSubmit}>
            <FormLabel className="topic">забыли пароль?</FormLabel>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <div>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <Input
                  placeholder="Введите ваш Email"
                  error={errors.email}
                  {...register('email', {
                     setValueAs: (v) => v.trim(),
                     required: 'Поле не заполнено',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Неверный формат электронной почты',
                     },
                  })}
               />
               {errors.email && (
                  <p className="message">{errors.email?.message}</p>
               )}
            </div>

            <Button className="buttonStyle" type="submit">
               ОТПРАВИТЬ
            </Button>
            <NavLink className="password" to="/signin">
               ОТМЕНИТЬ
            </NavLink>
         </FormControlStyled>
      </Modal>
   )
}

export default ForgotPassword

const FormControlStyled = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '1.5rem',
   padding: '2rem 1.5rem',
   borderRadius: '2px',
   background: '#FFFFFF',
   '& input:-internal-autofill-selected': {
      height: '1rem',
   },
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '1.563rem',
      color: '#222222',
      textTransform: 'uppercase',
   },
   '& p': {
      color: '#959595',
      fontSize: '1rem',
      marginBottom: '1rem',
      marginLeft: '2px',
   },
   '& .closeIcon': {
      cursor: 'pointer',
      position: 'absolute',
      top: '1rem',
      right: '1.5rem',
   },
   '& .buttonStyle': {
      height: '3rem',
      width: '26rem',
      borderRadius: '0.625rem',
      fontSize: '0.875rem',
   },
   '& .password': {
      height: '2rem',
      fontFamily: 'Manrope',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1rem',
      color: '#959595',
      textDecoration: 'none',
   },
   '& .message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
   },
}))
