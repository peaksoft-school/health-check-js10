import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel } from '@mui/material'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/Frame.svg'
// import Input from '../../components/UI/input/Input'
// import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
// import { forgotPassword } from '../../redux/reducers/auth/authThunk'

const ForgotPassword = () => {
   const [open, setOpen] = useState(true)
   console.log(open)

   const handleClose = () => setOpen(false)
   //    const dispatch = useDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         email: '',
      },
   })

   function onSubmit(values) {
      //   dispatch(forgotPassword(values))
      console.log(values)
   }

   return (
      <Modal open={open} onClose={handleClose}>
         <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
            <FormLabel className="topic">забыли пароль?</FormLabel>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <div>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <input
                  placeholder="Введите ваш Email"
                  className="inputStyle"
                  error={errors.email}
                  {...register('email', {
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

            <button className="buttonStyle" type="submit">
               ОТПРАВИТЬ
            </button>
            <NavLink className="password" to="/">
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
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '25px',
      color: '#222222',
      textTransform: 'uppercase',
   },
   '& p': {
      color: '#959595',
      fontSize: '16px',
      marginBottom: '1rem',
      marginLeft: '2px',
   },
   '& .closeIcon': {
      cursor: 'pointer',
      position: 'absolute',
      top: '1rem',
      right: '1.5rem',
   },
   '& .inputStyle': {
      fontFamily: 'Manrope',
      width: '390px',
      height: '42px',
      borderRadius: ' 10px',
      border: '1px solid #D9D9D9',
      padding: '0rem 1rem',
      fontSize: '1rem',
   },
   '& .buttonStyle': {
      height: '47px',
      width: '390px',
      borderRadius: ' 10px',
      fontSize: '14px',
   },
   '& .password': {
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#959595',
      textDecoration: 'none',
   },
   '& .message': {
      color: 'red',
      fontSize: '0.9rem',
   },
}))
