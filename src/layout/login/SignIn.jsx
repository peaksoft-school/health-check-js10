import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, IconButton, InputAdornment, Button } from '@mui/material'
import styled from '@emotion/styled'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/constants/firebase'
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg'
import { ReactComponent as Show } from '../../assets/icons/Vector (3).svg'
import { ReactComponent as ShowOff } from '../../assets/icons/Password.svg'
import { ReactComponent as GoogleIcon } from '../../assets/icons/image 90.svg'
import Modal from '../../components/UI/Modal'
// import { signIn } from '../../redux/reducers/auth/authThunk'
import Spiner from '../../components/UI/Spiner'
// import Button from '../../components/Ui/Button'
// import Input from '../../components/UI/input/Input'

const SignIn = ({ openSignUpHandler, openForgotPassword }) => {
   //    const dispatch = useDispatch()
   const { isAuthorized, isLoading } = useSelector((state) => state.auth)
   const [showPassword, setShowPassword] = useState(false)
   const [open, setOpen] = useState(true)
   const [value, setValue] = useState('')
   console.log(open)

   const handleClose = () => setOpen(false)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         email: '',
         password: '',
      },
   })

   useEffect(() => {
      if (isAuthorized) {
         handleClose()
      }
   }, [isAuthorized])

   const handleClick = () => {
      signInWithPopup(auth, provider).then((data) => {
         setValue(data.user.email)
         localStorage.setItem('email', data.user.email)
         console.log(value)
      })
   }

   useEffect(() => {
      setValue(localStorage.getItem('email'))
   })

   function onSubmit(values) {
      //   dispatch(signIn({ values }))
      console.log(values)
   }

   const showPasswordHandle = () => {
      setShowPassword(!showPassword)
   }

   const clickHanlder = (e) => {
      e.preventDefault()
   }

   const navigateToSignUp = (e) => {
      e.preventDefault()
      openSignUpHandler()
   }

   const navigateToForgotPassword = (e) => {
      e.preventDefault()
      openForgotPassword()
   }

   return (
      <Modal open={open} onClose={handleClose}>
         <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
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
                     required: 'Поле не заполнено',
                     maxLength: {
                        value: 15,
                        message: 'Слишком длинный пароль',
                     },
                     minLength: {
                        value: 5,
                        message: 'Пароль должен содержать не менее 5 букв',
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

            {isLoading ? (
               <Spiner />
            ) : (
               <button className="buttonStyle" type="submit">
                  ВОЙТИ
               </button>
            )}

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
            <Button
               className="buttonGoogle"
               startIcon={<GoogleIcon />}
               onClick={handleClick}
            >
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
   gap: '1.5rem',
   padding: '2rem 1.5rem',
   background: '#FFFFFF',
   '& .topic': {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '25px',
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
      width: '390px',
      height: '42px',
      borderRadius: ' 10px',
      border: '1px solid #D9D9D9',
      padding: '0rem 1rem',
      fontSize: '1rem',
   },
   '& .buttonStyle': {
      height: '45px',
      width: '390px',
      borderRadius: ' 10px',
      fontSize: '14px',
      fontFamily: 'Manrope',
      cursor: 'pointer',
   },
   '& .buttonGoogle': {
      height: '39px',
      width: '390px',
      fontFamily: 'Manrope',
      fontSize: '0.9rem',
      fontWeight: 600,
      borderRadius: ' 8px',
      lineHeight: '16px',
      color: '#222222',
      background: '#F5F5F5',
      '&:hover': {
         background: '#efeded',
      },
   },
   '& .password': {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Manrope',
      lineHeight: '16px',
      color: '#346EFB',
      textDecoration: 'none',
   },
   '& .register': {
      textDecoration: 'none',
      color: '#3772FF',
      fontWeight: 400,
      fontSize: '14px',
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
      fontSize: '0.9rem',
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   '& .lineFirst': {
      width: '165px',
      height: '0px',
      margin: '8px 0',
      color: '#F3F1F1',
   },
   '& span': {
      //   fontFamily: 'Manrope',
      fontWeight: '500',
      textTransform: 'uppercase',
      fontSize: '12px',
      color: '#222222',
   },
   '& .lineSecond': {
      width: '165px',
      color: '#F3F1F1',
      margin: '8px 0',
      height: '0px',
   },
}))
