import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, IconButton, InputAdornment } from '@mui/material'
import styled from '@emotion/styled'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg'
import { ReactComponent as Show } from '../../assets/icons/Vector (3).svg'
import { ReactComponent as ShowOff } from '../../assets/icons/Password.svg'
// import { ReactComponent as GoogleIcon } from '../../assets/icons/image 90.svg'
import Modal from '../../components/UI/Modal'
// import { signIn } from '../../redux/reducers/auth/authThunk'
import Spiner from '../../components/UI/Spiner'
// import Button from '../../components/Ui/Button'
// import Input from '../../components/UI/input/Input'

const SignIn = ({ openSignUpHandler, openForgotPassword }) => {
   //    const dispatch = useDispatch()
   const { isAuthorized, isLoading } = useSelector((state) => state.auth)
   const [showPassword, setShowPassword] = useState(false)
   const [open, setOpen] = useState(false)
   console.log(open)

   const handleOpen = () => setOpen(true)
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
      <Modal open={handleOpen} onClose={handleClose}>
         <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <FormLabel className="topic">ВОЙТИ</FormLabel>
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
            </div>

            {errors.email && <p className="message">{errors.email?.message}</p>}
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
            </div>

            {errors.password && (
               <p className="message">{errors.password?.message}</p>
            )}
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
            {/*   <Button className="buttonGoogle" startIcon={<GoogleIcon />} />
            <NavLink to="/" className="google">
                  Продолжить с Google
               </NavLink>
            </Button> */}
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
   width: ' 494px',
   borderRadius: '2px',
   background: '#FFFFFF',
   '& .topic': {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '25px',
      color: '#222222',
   },
   '& .closeIcon': {
      cursor: 'pointer',
   },
   '& .inputStyle': {
      width: '390px',
      height: '42px',
      borderRadius: ' 10px',
      border: '1px solid #D9D9D9',
   },
   '& .buttonStyle': {
      height: '45px',
      width: '390px',
      borderRadius: ' 10px',
      fontSize: '14px',
   },
   '& .buttonGoogle': {
      height: '39px',
      width: '390px',
      background: '#F5F5F5',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      color: '#222222',
      '&:hover': {
         background: '#F5F5F5',
      },
   },
   '& .password': {
      fontSize: '16px',
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
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   '& .lineFirst': {
      width: '215px',
      height: '0px',
      color: '#F3F1F1',
   },
   '& span': {
      fontSize: '14px',
      fontWeight: 400,
      color: '#222222',
   },
   '& .lineSecond': {
      width: '215px',
      height: '0px',
      color: '#F3F1F1',
   },
}))
