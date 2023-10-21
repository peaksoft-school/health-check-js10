import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'

export const PasswordChange = () => {
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
         <Form>
            <div>
               <label htmlFor="lastpassword">Старый пароль</label>
               <Field
                  type="password"
                  id="lastpassword"
                  name="lastpassword"
                  placeholder="Введите ваш пароль"
               />
               <ErrorMessage name="lastpassword" component="div" />
            </div>
            <div>
               <label htmlFor="newpassword">Новый пароль</label>
               <Field
                  type="password"
                  id="newpassword"
                  name="newpassword"
                  placeholder="Введите новый пароль"
               />
               <ErrorMessage name="newpassword" component="div" />
            </div>
            <div>
               <label htmlFor="confirmpassword">Подтвердить новый пароль</label>
               <Field
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Подтвердите пароль"
               />
               <ErrorMessage name="confirmpassword" component="div" />
            </div>
            <button type="submit">Изменить пароль</button>
         </Form>
      </Formik>
   )
}
