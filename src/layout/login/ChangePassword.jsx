import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, IconButton, InputAdornment } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg'
// import Input from '../../components/UI/input/Input'
// import Button from '../../components/UI/Button'
import { ReactComponent as Show } from '../../assets/icons/Vector (3).svg'
import { ReactComponent as ShowOff } from '../../assets/icons/Password.svg'
import Modal from '../../components/UI/Modal'

const ChangePassword = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordCopy, setShowPasswordCopy] = useState(false)
   const [open, setOpen] = useState(true)
   console.log(open)

   const handleClose = () => setOpen(false)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         password: '',
         copyPassword: '',
      },
   })
   function onSubmit(values) {
      console.log('values', values)
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
   return (
      <Modal open={open} onClose={handleClose}>
         <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
            <FormLabel className="topic">смена пароля</FormLabel>
            <CloseIcon className="closeIcon" />
            <div>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <input
                  placeholder="Введите новый пароль"
                  className="inputStyle"
                  error={errors.password}
                  {...register('password', {
                     required: 'Поле не заполнено',
                     maxLength: { value: 15, message: 'Слишком много деталей' },
                     minLength: { value: 5, message: 'Слишком мало деталей' },
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
                  error={errors.copyPassword}
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

            <button className="buttonStyle" type="submit">
               подтвердить
            </button>
         </FormControlStyled>
      </Modal>
   )
}

export default ChangePassword

const FormControlStyled = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '1.3rem',
   padding: '1.5rem 1.5rem',
   borderRadius: '2px',
   background: '#FFFFFF',
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '25px',
      color: '#222222',
      textTransform: ' uppercase',
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
   '& .message': {
      color: 'red',
   },
}))
