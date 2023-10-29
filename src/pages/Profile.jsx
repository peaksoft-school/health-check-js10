import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { styled } from '@mui/material'
import { Input } from '../components/UI/input/Input'
import Button from '../components/UI/Button'

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
         .email('Неверный формат электронной почты')
         .required('Неверный формат электронной почты'),
      usertelefone: Yup.string()
         .min(13, 'Телефон должен содержать максимум 14 символов')
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
               <h2 className="cap">Профиль</h2>
               <div className="span">
                  <span className="spanGrey">личные данные</span>
                  <span className="spanGrey">Сменить пароль</span>
               </div>
               <h3 className="personalData">Ваши личные данные</h3>

               <div className="firstContainer">
                  <div className="Parent">
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
                        <label className="label" htmlFor="usertelefone">
                           Телефон
                        </label>
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
                  <Button
                     className="buttonStyle"
                     type="button"
                     onClick={handleCancel}
                  >
                     назад
                  </Button>
                  <Button className="buttonStyle" type="submit">
                     Редактировать
                  </Button>
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
   marginTop: '1rem',
   '.firstContainer': {
      display: 'flex',
      gap: '2rem',
      marginLeft: '7.5rem',
   },
   '.Parent': { display: 'flex', flexDirection: 'column' },
   '.box': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1.5rem',
   },
   '.label': {
      fontFamily: 'Manrope',
      color: '#464444',
   },
   '.personalData': {
      color: '#222222',
      fontFamily: 'Manrope',
      marginTop: '1.5rem',
      marginLeft: '7.6rem',
      letterSpacing: '0.2px',
      fontWeight: '600',
   },
   '.cap': {
      marginTop: '1.875rem',
      marginLeft: '7.7rem',
      color: '#222222',
   },
   '.span': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1.875rem',
      marginTop: '1.3rem',
      marginLeft: '7.6rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
   },
   '.spanGrey': {
      fontFamily: 'Manrope',
      color: '#959595',
   },
   '.spanGrey:hover': {
      color: '#048741',
      textDecoration: 'underline',
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
      paddingLeft: '0.125rem',
   },
}))

const ButtonStyled = styled('div')(() => ({
   display: 'flex',
   marginLeft: '29rem',
   marginTop: '2.5rem',
   '& .buttonStyle': {
      height: '2.813rem',
      width: '10rem',
      borderRadius: ' 0.625rem',
      fontSize: '0.875rem',
      fontFamily: 'Manrope',
      marginLeft: '0.125rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
   },
}))
