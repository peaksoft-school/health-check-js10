import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, IconButton, InputAdornment, Button } from '@mui/material'
import styled from '@emotion/styled'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CloseIcon, GoogleIcon, Show, ShowOff } from '../../assets'
import Modal from '../../components/UI/Modal'
// import Button from '../../components/Ui/Button'
// import Input from '../../components/UI/input/Input'

const SignIn = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [open, setOpen] = useState(true)
   const [value, setValue] = useState('')
   const navigate = useNavigate()

   const handleClose = () => setOpen(false)

   const {
      register,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         email: '',
         password: '',
      },
   })

   useEffect(() => {
      setValue(localStorage.getItem('email'))
   })

   const showPasswordHandle = () => {
      setShowPassword(!showPassword)
   }

   const clickHanlder = (e) => {
      e.preventDefault()
   }

   const navigateToSignUp = (e) => {
      e.preventDefault()
      navigate('/register')
   }

   const navigateToForgotPassword = (e) => {
      e.preventDefault()
      navigate('/forgotPassword')
   }

   return (
      <Modal open={open} onClose={handleClose} borderRadius="5px">
         <FormControlStyled>
            <div>
               <FormLabel className="topic">ВОЙТИ</FormLabel>
               <CloseIcon className="closeIcon" onClick={handleClose} />
            </div>
            <div>
               <input
                  placeholder="Логин"
                  className="inputStyle"
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
            <div>
               <input
                  placeholder="Пароль"
                  className="inputStyle"
                  error={errors.password}
                  {...register('password', {
                     setValueAs: (v) => v.trim(),
                     required: 'Поле не заполнено',
                     maxLength: {
                        value: 12,
                        message: 'Слишком длинный пароль',
                     },
                     minLength: {
                        value: 8,
                        message: 'Пароль должен содержать не менее 8 символов',
                     },
                  })}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton
                              onClick={showPasswordHandle}
                              onMouseDown={clickHanlder}
                           >
                              {showPassword ? <ShowOff /> : <Show />}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />

               {errors.password && (
                  <p className="message">{errors.password?.message}</p>
               )}
            </div>

            <NavLink
               className="password"
               to="/"
               onClick={navigateToForgotPassword}
            >
               Забыли пароль ?
            </NavLink>
            <Line>
               <hr className="lineFirst" />
               <span>или</span>
               <hr className="lineSecond" />
            </Line>
            <Button className="buttonGoogle" startIcon={<GoogleIcon />}>
               <NavLink to="/" className="google">
                  Продолжить с Google
               </NavLink>
            </Button>
            <div className="register">
               <span>Нет аккаунта? </span>
               <Link to="/" onClick={navigateToSignUp}>
                  Зарегистрироваться
               </Link>
            </div>
         </FormControlStyled>
      </Modal>
   )
}

export default SignIn

const FormControlStyled = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '1.6rem',
   padding: '2rem 1.5rem',
   background: '#FFFFFF',
   '& .topic': {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '1.563rem',
      color: '#222222',
      fontFamily: 'Manrope',
   },
   '& .closeIcon': {
      cursor: 'pointer',
      position: 'absolute',
      top: '1rem',
      right: '1.5rem',
   },
   '& .inputStyle': {
      fontFamily: 'Manrope',
      width: '24.375rem',
      height: '2.625rem',
      borderRadius: '0.625rem',
      border: '1px solid #D9D9D9',
      padding: '0rem 1rem',
      fontSize: '1rem',
   },
   '& .buttonStyle': {
      height: '2.813rem',
      width: '24.375rem',
      borderRadius: '0.625rem',
      fontSize: '0.875rem',
      fontFamily: 'Manrope',
      cursor: 'pointer',
   },
   '& .buttonGoogle': {
      height: '2.438rem',
      width: '24.375rem',
      fontFamily: 'Manrope',
      fontSize: '1rem',
      fontWeight: 600,
      borderRadius: ' 0.5rem',
      lineHeight: '1rem',
      color: '#222222',
      background: '#F5F5F5',
      textTransform: 'none',
      '&:hover': {
         background: '#efeded',
      },
   },
   '& .password': {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Manrope',
      lineHeight: '1rem',
      color: '#346EFB',
      textDecoration: 'none',
   },
   '& .register': {
      textDecoration: 'none',
      color: '#3772FF',
      fontWeight: 400,
      fontSize: '0.875rem',
      '& span': {
         color: '#222222',
      },
      '& a': {
         textDecoration: 'none',
         color: '#346EFB',
      },
   },
   '& .google': {
      textDecoration: 'none',
      color: '#222222',
   },
   '& .message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   '& .lineFirst': {
      width: '10.313rem',
      margin: '0.5rem 0',
      height: '0rem',
      color: '#F3F1F1',
   },
   '& span': {
      fontFamily: 'Manrope',
      fontWeight: '500',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      color: '#222222',
   },
   '& .lineSecond': {
      width: '10.313rem',
      color: '#F3F1F1',
      margin: '0.5rem 0',
      height: '0rem',
   },
}))
