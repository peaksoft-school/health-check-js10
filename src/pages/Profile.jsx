// import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { styled } from '@mui/material'
import { Input } from '../components/UI/input/Input'

const Profile = () => {
   // const [back, setBack] = useState(false)

   // const backHandler = () => {
   //    setBack(!back)
   //    console.log('back')
   // }
   const initialValues = {
      username: '',
      userlastname: '',
      useremail: '',
      usertelefone: '',
   }

   const validationSchema = Yup.object({
      username: Yup.string().required('Имя обязательно'),
      userlastname: Yup.string().required('Фамилия обязательно'),
      useremail: Yup.string()
         .email('Email @ обязателен')
         .required('Email @ обязателен'),
      usertelefone: Yup.string()
         .min(13, 'Телефон должен содержать максимум 13 символов')
         .required('Телефонь обязателен'),
   })
   const onSubmit = (values) => {
      console.log(values)
   }
   const handleCancel = (initialValues) => {
      console.log(initialValues)
   }
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         {({ values, handleChange }) => (
            <FormStyled>
               <div className="firstContainer">
                  <div className="boxOne">
                     <div className="box">
                        <label className="label" htmlFor="username">
                           Имя
                        </label>
                        <InputStyled
                           onChange={handleChange}
                           value={values.username}
                           width="20rem"
                           type="text"
                           name="username"
                           placeholder="Имя"
                        />
                        <ErrorMessageStyled name="username" component="span" />
                     </div>
                     <div className="box">
                        <label className="label" htmlFor="useremail">
                           E-mail
                        </label>
                        <InputStyled
                           width="20rem"
                           type="text"
                           name="useremail"
                           placeholder="Email"
                           onChange={handleChange}
                           value={values.useremail}
                        />
                        <ErrorMessageStyled name="useremail" component="span" />
                     </div>
                  </div>

                  <div>
                     <div className="box">
                        <label className="label" htmlFor="userlastname">
                           Фамилия
                        </label>
                        <InputStyled
                           onChange={handleChange}
                           value={values.userlastname}
                           width="20rem"
                           type="text"
                           name="userlastname"
                           placeholder="Фамилия"
                        />
                        <ErrorMessageStyled
                           name="userlastname"
                           component="span"
                        />
                     </div>

                     <div className="box">
                        <labelStyled className="label" htmlFor="usertelefone">
                           Телефон
                        </labelStyled>
                        <InputStyled
                           onChange={handleChange}
                           value={values.usertelefone}
                           width="20rem"
                           type="number"
                           name="usertelefone"
                           placeholder="+996 (_ _ _) _ _  _ _  _ _"
                        />
                        <ErrorMessageStyled
                           name="usertelefone"
                           component="span"
                        />
                     </div>
                  </div>
               </div>

               <ButtonStyled>
                  <button
                     className="buttonStyle"
                     type="button"
                     onClick={handleCancel}
                  >
                     назад
                  </button>
                  <button className="buttonStyle" type="submit">
                     Редактировать
                  </button>
               </ButtonStyled>
            </FormStyled>
         )}
      </Formik>
   )
}

export default Profile

const FormStyled = styled(Form)(() => ({
   display: 'flex',
   flexDirection: 'column',
   fontFamily: 'Manrope',
   marginTop: '4rem',
   '.firstContainer': {
      display: 'flex',
      gap: '2rem',
      marginLeft: '7.5rem',
   },
   '.boxOne': { display: 'flex', flexDirection: 'column' },
   '.box': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1.5rem',
   },
   '.label': {
      fontFamily: 'Manrope',
      color: '#464444',
   },
}))
const ErrorMessageStyled = styled(ErrorMessage)(() => ({
   marginTop: '3.3rem',
   color: 'red',
   fontSize: '0.7rem',
   fontFamily: 'Manrope',
   position: 'absolute',
}))
const InputStyled = styled(Input)(() => ({
   '.MuiOutlinedInput-root': {
      height: '1.875rem',
      fontFamily: 'Manrope',
      color: '#222222',
      fontSize: '0.8rem',
      paddingLeft: '1.125rem',
   },
}))

const ButtonStyled = styled('div')(() => ({
   display: 'flex',
   marginLeft: '29rem',
   marginTop: '2.5rem',
   '& .buttonStyle': {
      height: '2.813rem',
      width: '9rem',
      borderRadius: ' 0.625rem',
      fontSize: '0.875rem',
      fontFamily: 'Manrope',
      marginLeft: '1.125rem',
   },
}))
