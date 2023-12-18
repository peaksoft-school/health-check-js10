import { Formik, Form, ErrorMessage } from 'formik'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { styled } from '@mui/material'
import { Input } from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'
import Header from '../../layout/user/header/Header'
import Footer from '../../layout/Footer'

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
         .required('Телефонь обязателен')
         .min(13, 'Телефон должен содержать максимум 12 символов')
         .max(13, 'Номер телефона слишком длинный')
         .required('Телефон обязателен'),
   })
   const onSubmit = (values) => {
      console.log(values)
   }
   const handleCancel = (initialValues) => {
      console.log(initialValues)
   }
   const setActive = ({ isActive }) => `Enabled  ${isActive && 'active-link'}`

   return (
      <>
         <Header variant="hr" />
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
         >
            {({ values, handleChange }) => (
               <FormStyled>
                  <h2 className="cap">Профиль</h2>
                  <div className="LinkTwo">
                     <NavLink to="/profile" className={setActive}>
                        личные данные
                     </NavLink>
                     <NavLink
                        to="/profile/password-change"
                        className={setActive}
                     >
                        cменить пароль
                     </NavLink>
                  </div>
                  <h4 className="personalData">Ваши личные данные</h4>

                  <div className="firstContainer">
                     <div className="Parent">
                        <div className="box">
                           <label className="label" htmlFor="username">
                              Имя
                           </label>
                           <InputStyled
                              onChange={handleChange}
                              value={values.username}
                              type="text"
                              name="username"
                              placeholder="Имя"
                           />
                           <ErrorMessageStyled
                              name="username"
                              component="span"
                           />
                        </div>
                        <div className="box">
                           <label className="label" htmlFor="useremail">
                              E-mail
                           </label>
                           <InputStyled
                              type="text"
                              name="useremail"
                              placeholder="Email"
                              onChange={handleChange}
                              value={values.useremail}
                           />
                           <ErrorMessageStyled
                              name="useremail"
                              component="span"
                           />
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
                              type="text"
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
                        variant="outlined"
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
         <Footer />
      </>
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
   '&h2': {
      marginTop: '1.8rem',
      color: '#222222',
      fontSize: '1.5rem',
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
      fontSize: '0.875rem',
   },
   '.personalData': {
      color: '#222222',
      fontFamily: 'Manrope',
      marginTop: '1.5rem',
      marginLeft: '7.6rem',
      letterSpacing: '0.2px',
      fontWeight: '600',
      fontSize: '1.2rem',
   },
   '.cap': {
      marginTop: '1.875rem',
      marginLeft: '7.7rem',
      color: '#222222',
      fontSize: '1.5rem',
   },
   '.LinkTwo': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1.875rem',
      marginTop: '1.3rem',
      marginLeft: '7.6rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      '.LinkTwo:onclick': {
         cursor: 'pointer',
      },
   },
   '.Enabled': {
      fontFamily: 'Manrope',
      color: '#959595',
      textDecoration: 'none',
   },
   '.Enabled.active-link': {
      color: '#048741',
      textDecoration: 'underline',
   },
}))

const ErrorMessageStyled = styled(ErrorMessage)(() => ({
   marginTop: '3.8rem',
   color: 'red',
   fontSize: '0.8rem',
   fontFamily: 'Manrope',
   position: 'absolute',
}))
const InputStyled = styled(Input)(() => ({
   '.MuiOutlinedInput-root': {
      widht: '20.625rem',
      height: '2.4rem',
      fontFamily: 'Manrope',
      color: '#222222',
      fontSize: '1rem',
      padding: '8px 12px',
      '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
         padding: '0.3rem',
         fontSize: '1rem',
      },
   },
}))

const ButtonStyled = styled('div')(() => ({
   display: 'flex',
   marginLeft: '37.4%',
   marginTop: '1.5rem',
   gap: '1rem',
   '& .buttonStyle': {
      height: '2.3rem',
      width: '12.5rem',
      borderRadius: ' 0.625rem',
      fontSize: '0.75rem',
      fontFamily: 'Manrope',
      letterSpacing: '1px',
      textTransform: 'uppercase',
   },
}))
