import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, IconButton, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { CloseIcon, GoogleIcon, Show, ShowOff } from '../../assets'
import Modal from '../../components/UI/Modal'
// import Input from '../../components/UI/input/Input'
// import Button from '../../components/UI/Button'

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordCopy, setShowPasswordCopy] = useState(false)
   const [open, setOpen] = useState(true)
   const [value, setValue] = useState('')
   const navigate = useNavigate()

   const handleClose = () => setOpen(false)

   const {
      register,
      formState: { errors },
      watch,
   } = useForm({
      mode: 'all',
      defaultValues: {
         firstName: '',
         lastName: '',
         phoneNumber: '+996',
         email: '',
         password: '',
         copyPassword: '',
      },
   })

   const watchPassword = watch('password', '')

   const showPasswordHandle = () => {
      setShowPassword(!showPassword)
   }
   const clickHandle = (e) => {
      e.preventDefault()
   }
   const showPasswordHandler = () => {
      setShowPasswordCopy(!showPasswordCopy)
   }
   const clickHandler = (e) => {
      e.preventDefault()
   }

   const navigateToSignIn = (e) => {
      e.preventDefault()
      navigate('/login')
   }

   useEffect(() => {
      setValue(localStorage.getItem('email'))
   })
   return (
      <Modal open={open} onClose={handleClose} borderRadius="5px">
         <FormControlStyled>
            <FormLabel className="topic">РЕГИСТРАЦИЯ</FormLabel>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <div className="inputContainer">
               <div className="inputWrapper">
                  <input
                     placeholder="Имя"
                     className="inputStyle"
                     error={errors.name}
                     {...register('firstName', {
                        setValueAs: (v) => v.trim(),
                        required: 'Поле не заполнено',
                     })}
                  />
                  {errors.firstName && (
                     <p className="message">{errors.firstName?.message}</p>
                  )}
               </div>
               <div className="inputWrapper">
                  <input
                     placeholder="Фамилия"
                     className="inputStyle"
                     error={errors.surname}
                     {...register('lastName', {
                        setValueAs: (v) => v.trim(),
                        required: 'Поле не заполнено',
                     })}
                  />
                  {errors.lastName && (
                     <p className="message">{errors.lastName?.message}</p>
                  )}
               </div>
               <div className="inputWrapper">
                  <input
                     placeholder="+996 (_ _ _) _ _  _ _  _ _ "
                     className="inputStyle"
                     error={errors.number}
                     type="number"
                     {...register('phoneNumber', {
                        setValueAs: (v) => v.trim(),
                        required: 'Поле не заполнено',
                        minLength: {
                           value: 12,
                           message: 'Номер телефона слишком короткий',
                        },
                        maxLength: {
                           value: 12,
                           message: 'Номер телефона должен слишком длинный',
                        },
                     })}
                  />
                  {errors.phoneNumber && (
                     <p className="message">{errors.phoneNumber?.message}</p>
                  )}
               </div>
               <div className="inputWrapper">
                  <input
                     placeholder="Email"
                     className="inputStyle"
                     error={errors.email}
                     {...register('email', {
                        required: 'Поле не заполнено',
                        setValueAs: (v) => v.trim(),
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
               <div className="inputWrapper">
                  <input
                     placeholder="Введите пароль"
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
                           message:
                              'Пароль должен содержать не менее 8 символов',
                        },
                     })}
                     type={showPassword ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={showPasswordHandle}
                                 onMouseDown={clickHandle}
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
               <div className="inputWrapper">
                  <input
                     placeholder="Повторите пароль"
                     className="inputStyle"
                     error={errors.password}
                     {...register('copyPassword', {
                        setValueAs: (v) => v.trim(),
                        required: 'Поле не заполнено',
                        validate: (value) =>
                           value === watchPassword || 'Пароли не совпадают',
                     })}
                     type={showPasswordCopy ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={showPasswordHandler}
                                 onMouseDown={clickHandler}
                              >
                                 <h1>Hello</h1>
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
                  {errors.copyPassword && (
                     <p className="message">{errors.copyPassword?.message}</p>
                  )}
               </div>
            </div>
            <button className="buttonStyle" type="submit">
               СОЗДАТЬ АККАУНТ
            </button>
            <Line className="Line">
               <hr className="lineFirst" />
               <span>или</span>
               <hr className="lineSecond" />
            </Line>
            <Button className="buttonGoogle" startIcon={<GoogleIcon />}>
               <NavLink to="/" className="google">
                  Зарегистрироваться с Google
               </NavLink>
            </Button>
            <div className="register">
               <span>У вас уже есть аккаунт?</span>
               <Link to="/" onClick={navigateToSignIn}>
                  Войти
               </Link>
            </div>
         </FormControlStyled>
      </Modal>
   )
}

export default SignUp

const FormControlStyled = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '1.5rem',
   background: '#FFFFFF',
   padding: '0.5rem 1.5rem',
   '& .inputContainer': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      '& input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button':
         {
            '-webkit-appearance': 'none',
         },
   },
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '1.563rem',
      color: '#222222',
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
      fontSize: '0.9rem',
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
      borderRadius: '0.5rem',
      lineHeight: '1rem',
      color: '#222222',
      background: '#F5F5F5',
      textTransform: 'none',
      '&:hover': {
         background: '#efeded',
      },
   },
   '& .register': {
      color: '#3772FF',
      fontFamily: 'Manrope',
      fontSize: '0.875rem',
      fontWeight: 400,
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
   '& .inputWrapper': {
      position: 'relative',
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   '& .lineFirst': {
      width: '10.313rem',
      height: '0rem',
      margin: '0.5rem 0',
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
