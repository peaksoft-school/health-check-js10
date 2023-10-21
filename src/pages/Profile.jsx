import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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
         .required('Email обязателен'),
      usertelefone: Yup.string().required('Телефон обязателен'),
   })

   const onSubmit = (values) => {
      console.log(values)
   }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         <Form>
            <div>
               <label htmlFor="username">Имя</label>
               <Field type="text" name="username" placeholder="Имя" />
               <ErrorMessage name="username" component="span" />
            </div>
            <div>
               <label htmlFor="userlastname">Фамилия</label>
               <Field type="text" name="userlastname" placeholder="Фамилия" />
               <ErrorMessage name="userlastname" component="span" />
            </div>
            <div>
               <label htmlFor="useremail">E-mail</label>
               <Field type="text" name="useremail" placeholder="E-mail" />
               <ErrorMessage name="useremail" component="span" />
            </div>
            <div>
               <label htmlFor="usertelefone">Телефон</label>
               <Field type="text" name="usertelefone" placeholder="+996" />
               <ErrorMessage name="usertelefone" component="span" />
            </div>
            <button type="submit">Сохранить</button>
         </Form>
      </Formik>
   )
}

export default Profile
