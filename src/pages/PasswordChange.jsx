import React, { useState } from 'react'
import { Formik, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { IconButton, InputAdornment, styled, TextField } from '@mui/material'
import { HideIcon, ShowIcon } from '../assets'

export const PasswordChange = () => {
   const [showPassword, setShowPassword] = useState(true)
   const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword)
   }
   return (
      <Formik
         initialValues={{
            lastpassword: '',
            newpassword: '',
            confirmpassword: '',
         }}
         validationSchema={Yup.object({
            lastpassword: Yup.string()
               .max(10, 'Старый пароль должен содержать максимум 10 символов')
               .required('Пожалуйста, напишите старый пароль'),
            newpassword: Yup.string().notOneOf(
               [Yup.ref('lastpassword'), null],
               'Новый пароль должен отличаться от старого⁠⁠'
            ),
            confirmpassword: Yup.string()
               .oneOf([Yup.ref('newpassword'), null], 'Пароли не совпадают')
               .required('Пароль не совпадают'),
         })}
         onSubmit={(values) => {
            console.log(values)
         }}
      >
         <FormStyled>
            <div>
               <label htmlFor="lastpassword">Старый пароль</label>
               <FieldStyled
                  type={showPassword ? 'text' : 'password'}
                  id="lastpassword"
                  name="lastpassword"
                  placeholder="Введите ваш пароль"
                  InputProps={{
                     endAdornment: (
                        <InputAdornment>
                           {showPassword ? (
                              <ShowIcon
                                 onClick={togglePasswordVisibility}
                                 fill="red"
                              />
                           ) : (
                              <HideIcon
                                 onClick={togglePasswordVisibility}
                                 fill="red"
                              />
                           )}
                        </InputAdornment>
                     ),
                  }}
               />

               <ErrorMessageStyled name="lastpassword" component="div" />
            </div>
            <div>
               <label htmlFor="newpassword">Новый пароль</label>
               <FieldStyled
                  type={showPassword ? 'text' : 'password'}
                  id="newpassword"
                  name="newpassword"
                  placeholder="Введите новый пароль"
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="start">
                           <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? <ShowIcon /> : <HideIcon />}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
               <ErrorMessageStyled name="newpassword" component="div" />
            </div>
            <div>
               <label htmlFor="confirmpassword">Подтвердить новый пароль</label>
               <FieldStyled
                  type={showPassword ? 'text' : 'password'}
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Подтвердите пароль"
                  InputProps={{
                     endAdornment: (
                        <IconButton onClick={togglePasswordVisibility}>
                           {showPassword ? <ShowIcon /> : <HideIcon />}
                        </IconButton>
                     ),
                  }}
               />
               <ErrorMessageStyled name="confirmpassword" component="div" />
            </div>

            <nav>
               <button type="button">назад</button>
               <button type="submit">подтвердить</button>
            </nav>
         </FormStyled>
      </Formik>
   )
}

const FormStyled = styled(Form)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   marginTop: '1rem',
   fontFamily: 'Manrope',
   '& nav': {
      maxWidth: '490px',
      marginTop: '18px',
      '& button': {
         marginLeft: '18px',
         background: '#fff',
         color: '#048741',
         borderRadius: '#048741',
      },
      '& buttonGreen': {
         marginLeft: '18px',
         marginTop: '18px',
         background: '#0CBB6B',
         color: '#FFFFFF',
         size: '4px',
         border: '1rem#048741',
      },
   },
}))
const FieldStyled = styled(TextField)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '18rem',
   fontFamily: 'Manrope',
}))
const ErrorMessageStyled = styled(ErrorMessage)(() => ({
   color: 'red',
}))
