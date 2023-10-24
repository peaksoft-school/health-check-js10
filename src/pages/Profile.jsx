import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { styled } from '@mui/material'

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
         .required('Пожалуйста, напишите старый пароль'),
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
            <div className="firstContainer">
               <div>
                  <div>
                     <label htmlFor="username">Имя</label>
                     <FieldStyled
                        type="text"
                        name="username"
                        placeholder="Имя"
                     />
                     <ErrorMessageStyled name="username" component="span" />
                  </div>
                  <div className="box">
                     <label htmlFor="useremail">E-mail</label>
                     <FieldStyled
                        type="text"
                        name="useremail"
                        placeholder="Email"
                     />
                     <ErrorMessageStyled name="useremail" component="span" />
                  </div>
               </div>
               <div>
                  <div>
                     <label htmlFor="userlastname">Фамилия</label>
                     <FieldStyled
                        type="text"
                        name="userlastname"
                        placeholder="Фамилия"
                     />
                     <ErrorMessageStyled name="userlastname" component="span" />
                  </div>
                  <div className="box">
                     <labelStyled htmlFor="usertelefone">Телефон</labelStyled>
                     <FieldStyled
                        type="text"
                        name="usertelefone"
                        placeholder="+996 (_ _ _) _ _  _ _  _ _"
                     />
                     <ErrorMessageStyled name="usertelefone" component="span" />
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
      </Formik>
   )
}

export default Profile

const FormStyled = styled(Form)(() => ({
   display: 'flex',
   flexDirection: 'column',
   fontFamily: 'Manrope',
   marginLeft: '4.688rem',
   marginTop: '4rem',
   '.firstContainer': {
      display: 'flex',
      gap: '3rem',
   },
   '.box': {
      marginTop: '1rem',
   },
}))
const FieldStyled = styled(Field)(() => ({
   display: 'flex',
   width: '20.625rem',
   height: '2.375rem',
   fontFamily: 'Manrope',
   paddingLeft: '1.125rem',
}))
const ErrorMessageStyled = styled(ErrorMessage)(() => ({
   color: 'red',
   fontSize: '0.7rem',
   fontFamily: 'Manrope',
   position: 'absolute',
}))
const ButtonStyled = styled('div')(() => ({
   display: 'flex',
   marginLeft: '24rem',
   marginTop: '1rem',
   '& .buttonStyle': {
      height: '2.813rem',
      width: '10.375rem',
      borderRadius: ' 0.625rem',
      fontSize: '0.875rem',
      fontFamily: 'Manrope',
      marginLeft: '1.125rem',
   },
}))
