import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, IconButton, InputAdornment } from '@mui/material'
import styled from '@emotion/styled'
import { CloseIcon, Show, ShowOff } from '../../assets'
import Modal from '../../components/UI/Modal'
// import Input from '../../components/UI/input/Input'
// import Button from '../../components/UI/Button'

const ChangePassword = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordCopy, setShowPasswordCopy] = useState(false)
   const [open, setOpen] = useState(true)

   const handleClose = () => setOpen(false)

   const {
      register,
      formState: { errors },
      watch,
   } = useForm({
      mode: 'all',
      defaultValues: {
         password: '',
         copyPassword: '',
      },
   })

   const watchPassword = watch('password', '')

   const showPasswordHandle = () => {
      setShowPassword(!showPassword)
   }
   const showPasswordHandler = () => {
      setShowPasswordCopy(!showPasswordCopy)
   }
   const clickHandler = (e) => {
      e.preventDefault()
   }

   return (
      <Modal open={open} onClose={handleClose} borderRadius="5px">
         <FormControlStyled>
            <FormLabel className="topic">Смена пароля</FormLabel>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <div>
               <p>Вам будет отправлена ссылка для сброса пароля</p>
               <input
                  placeholder="Введите новый пароль"
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
                        <InputAdornment
                           position="end"
                           {...register('copyPassword', {
                              setValueAs: (v) => v.trim(),
                              required: 'Поле не заполнено',
                              validate: (value) =>
                                 value === watchPassword ||
                                 'Пароли не совпадают',
                           })}
                        >
                           <IconButton
                              onClick={showPasswordHandle}
                              onMouseDown={clickHandler}
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
                     setValueAs: (v) => v.trim(),
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
               Подтвердить
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
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '1.563rem',
      color: '#222222',
      textTransform: ' uppercase',
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
      height: '2.938rem',
      width: '24.375rem',
      borderRadius: ' 0.625',
      fontSize: '0.875',
   },
   '& .message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
   },
}))
