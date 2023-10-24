import React, { useState } from 'react'
import { Formik, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { IconButton, InputAdornment, styled, TextField } from '@mui/material'
import { HideIcon, ShowIcon } from '../assets'

export const PasswordChange = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordCopy, setShowPasswordCopy] = useState(false)
   const [showPasswordEnd, setShowPasswordEnd] = useState(false)

   const showPasswordHandle = () => {
      setShowPassword(!showPassword)
   }

   const showPasswordHandler = () => {
      setShowPasswordCopy(!showPasswordCopy)
   }

   const showPasswordEndHandler = () => {
      setShowPasswordEnd(!showPasswordEnd)
   }

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
               .min(6, 'Старый пароль должен содержать максимум 6 символов')
               .required('Пожалуйста, напишите старый пароль'),

            newpassword: Yup.string()
               .min(6, 'Пароль должен содержать не менее 6 букв')
               .notOneOf(
                  [Yup.ref('lastpassword'), null],
                  'Новый пароль должен отличаться от старого⁠⁠'
               ),

            confirmpassword: Yup.string()
               .oneOf([Yup.ref('newpassword'), null], 'Пароли не совпадают')
               .required('Пароль не совпадают'),
         })}
         onSubmit={(values) => {
            console.log(values)
            console.log('hello')
         }}
      >
         {({ values, handleChange }) => (
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
                           <InputAdornment position="start">
                              <IconButton
                                 onMouseDown={showPasswordHandle}
                                 onClick={togglePasswordVisibility}
                              >
                                 {showPassword ? <ShowIcon /> : <HideIcon />}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                     onChange={handleChange}
                     value={values.lastpassword}
                  />

                  <ErrorMessageStyled name="lastpassword" component="div" />
               </div>
               <div>
                  <label htmlFor="newpassword"> Новый пароль</label>
                  <FieldStyled
                     type={showPasswordCopy ? 'text' : 'password'}
                     id="newpassword"
                     name="newpassword"
                     placeholder="Введите новый пароль"
                     InputProps={{
                        endAdornment: (
                           <InputAdornment className="Eyes">
                              <IconButton
                                 onMouseDown={showPasswordHandler}
                                 onClick={togglePasswordVisibility}
                              >
                                 {showPasswordCopy ? (
                                    <ShowIcon />
                                 ) : (
                                    <HideIcon />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                     onChange={handleChange}
                     value={values.newpassword}
                  />
                  <ErrorMessageStyled name="newpassword" component="div" />
               </div>
               <div>
                  <label htmlFor="confirmpassword">
                     Подтвердить новый пароль
                  </label>
                  <FieldStyled
                     type={showPasswordEnd ? 'text' : 'password'}
                     id="confirmpassword"
                     name="confirmpassword"
                     placeholder="Подтвердите пароль"
                     InputProps={{
                        endAdornment: (
                           <InputAdornment className="Eyes">
                              <IconButton
                                 onMouseDown={showPasswordEndHandler}
                                 onClick={togglePasswordVisibility}
                              >
                                 {showPasswordEnd ? <ShowIcon /> : <HideIcon />}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                     onChange={handleChange}
                     value={values.confirmpassword}
                  />
                  <ErrorMessageStyled name="confirmpassword" component="div" />
               </div>
               <div className="buttonStyle">
                  <button className="buttons" type="button">
                     назад
                  </button>
                  <button className="buttons" type="submit">
                     подтвердить
                  </button>
               </div>
            </FormStyled>
         )}
      </Formik>
   )
}

const FormStyled = styled(Form)(() => ({
   fontFamily: 'Manrope',
   marginLeft: '7.5rem',
   marginTop: '14.063rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',
   '.buttonStyle': {
      width: '62.5rem',
      display: 'flex',
   },
   '.buttons': {
      height: '2.813rem',
      width: '9.375rem',
      borderRadius: ' 0.625rem',
      fontSize: '0.875rem',
      fontFamily: 'Manrope',
      marginLeft: '1.125rem',
   },
}))
const FieldStyled = styled(TextField)(() => ({
   display: 'flex',
   maxWidth: '20.625rem',
   height: '2.375rem',
   fontFamily: 'Manrope',
   '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
      fontSize: '1rem',
      font: 'caption',
      fontFamily: 'Manrope',
   },
}))
const ErrorMessageStyled = styled(ErrorMessage)(() => ({
   color: 'red',
   fontSize: '0.7rem',
   fontFamily: 'Manrope',
}))
