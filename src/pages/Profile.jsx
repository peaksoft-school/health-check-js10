import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { styled } from '@mui/material'

const Profile = () => {
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
         .email('Email недействителен')
         .required('Email @ обязателен'),
      usertelefone: Yup.string().required('Телефон обязателен'),
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
         <FormStyled>
            <div>
               <label htmlFor="username">Имя</label>
               <FieldStyled type="text" name="username" placeholder="Имя" />
               <ErrorMessageStyled name="username" component="span" />
            </div>
            <div>
               <label htmlFor="userlastname">Фамилия</label>
               <FieldStyled
                  type="text"
                  name="userlastname"
                  placeholder="Фамилия"
               />
               <ErrorMessageStyled name="userlastname" component="span" />
            </div>
            <div>
               <label htmlFor="useremail">E-mail</label>
               <FieldStyled type="text" name="useremail" placeholder="E-mail" />
               <ErrorMessageStyled name="useremail" component="span" />
            </div>
            <div>
               <labelStyled htmlFor="usertelefone">Телефон</labelStyled>
               <FieldStyled
                  type="text"
                  name="usertelefone"
                  placeholder="+996"
               />
               <ErrorMessageStyled name="usertelefone" component="span" />
            </div>
            <nav>
               <button type="submit" onSubmit={handleCancel}>
                  назад
               </button>
               <button type="submit">Редактировать</button>
            </nav>
         </FormStyled>
      </Formik>
   )
}

export default Profile
const FieldStyled = styled(Field)(() => ({
   display: 'flex',
   width: '18rem',
   fontFamily: 'Manrope',
   marginTop: '0.3rem',
}))
const ErrorMessageStyled = styled(ErrorMessage)(() => ({
   color: 'red',
}))
const FormStyled = styled(Form)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
   maxWidth: '65%',
   fontFamily: 'Manrope',
   '& div': {
      marginTop: '0.7rem',
   },
   '& nav': {
      maxWidth: '490px',
      marginLeft: '580px',
      marginTop: '18px',
      '& button': {
         background: '#fff',
         color: '#048741',
         borderRadius: '#048741',
         marginLeft: '18px',
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
