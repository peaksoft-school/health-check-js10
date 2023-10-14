import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, FormLabel, IconButton, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link, NavLink } from 'react-router-dom'
// import { Link, NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/constants/firebase'
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg'
import { ReactComponent as Show } from '../../assets/icons/Vector (3).svg'
import { ReactComponent as ShowOff } from '../../assets/icons/Password.svg'
import { ReactComponent as GoogleIcon } from '../../assets/icons/image 90.svg'
// import Input from '../../components/UI/input/Input'
// import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
// import { signUp } from '../../redux/reducers/auth/authThunk'
// import { notify } from '../../utils/constants/snackbar'

const SignUp = ({ openSignInHandler }) => {
   //    const dispatch = useDispatch()
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordCopy, setShowPasswordCopy] = useState(false)
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
         firstName: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: '',
         copyPassword: '',
      },
   })
   const onSubmit = (values) => {
      //   dispatch(signUp({ values, notify(), onClose }))
      // eslint-disable-next-line no-console
      console.log(values)
   }
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
      openSignInHandler()
   }

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

   return (
      <Modal open={open} onClose={handleClose}>
         <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
            <FormLabel className="topic">РЕГИСТРАЦИЯ</FormLabel>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <div className="inputContainer">
               <div>
                  <input
                     placeholder="Имя"
                     className="inputStyle"
                     error={errors.name}
                     {...register('firstName', {
                        required: 'Поле не заполнено',
                     })}
                  />
                  {errors.firstName && (
                     <p className="message">{errors.firstName?.message}</p>
                  )}
               </div>
               <div>
                  <input
                     placeholder="Фамилия"
                     className="inputStyle"
                     error={errors.surname}
                     {...register('lastName', {
                        required: 'Поле не заполнено',
                     })}
                  />
                  {errors.lastName && (
                     <p className="message">{errors.lastName?.message}</p>
                  )}
               </div>
               <div>
                  <input
                     placeholder="+996 (_ _ _) _ _  _ _  _ _ "
                     className="inputStyle"
                     error={errors.number}
                     {...register('phoneNumber', {
                        required: 'Поле не заполнено',
                     })}
                  />
                  {errors.phoneNumber && (
                     <p className="message">{errors.phoneNumber?.message}</p>
                  )}
               </div>
               <div>
                  <input
                     placeholder="Email"
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
                     placeholder="Введите пароль"
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
               <div>
                  <input
                     placeholder="Повторите пароль"
                     className="inputStyle"
                     error={errors.password}
                     {...register('copyPassword', {
                        required: 'Поле не заполнено',
                     })}
                     type={showPasswordCopy ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={showPasswordHandler}
                                 onMouseDown={clickHandler}
                              >
                                 {showPasswordCopy ? <ShowOff /> : <Show />}
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
      gap: '1rem',
   },
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '25px',
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
      width: '390px',
      height: '42px',
      borderRadius: ' 10px',
      border: '1px solid #D9D9D9',
      padding: '0rem 1rem',
      fontSize: '0.9rem',
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
   '& .register': {
      color: '#3772FF',
      fontFamily: 'Manrope',
      fontSize: '14px',
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
