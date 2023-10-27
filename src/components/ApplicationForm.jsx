import React, { useState } from 'react'
import styled from '@emotion/styled'
import PhotoWoman from '../assets/images/applicationform-woman.png'
import Button from './UI/Button'
import ArrowIcon from '../assets/icons/arrow.svg'
import UsersIcon from '../assets/icons/Users.svg'
import PhoneIcon from '../assets/icons/phone.svg'

const ApplicationForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
   })

   const [errors, setErrors] = useState({
      name: '',
      phoneNumber: '',
   })

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value,
      })

      if (name === 'name') {
         const nameRegex = /^[A-Za-z\s]+$/
         setErrors({
            ...errors,
            name: nameRegex.test(value) ? '' : 'Неправильное имя',
         })
      } else if (name === 'phoneNumber') {
         const phoneRegex = /^\+996\d{9}$/
         setErrors({
            ...errors,
            phoneNumber: phoneRegex.test(value) ? '' : 'Неправильный номер',
         })
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem('formData', JSON.stringify(formData))
   }

   return (
      <ApplicationFormContainer>
         <ApplicationFormInnerContainer>
            <h2>Оставьте заявку</h2>
            <p>
               Оставьте свой номер и наши специалисты свяжутся с Вами <br />
               в ближайшее время
            </p>

            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="name">Как к Вам обратиться?</label>
                  <img src={UsersIcon} alt="" />
                  <StyledInput
                     type="text"
                     name="name"
                     id="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Введите имя"
                  />
                  <span>{errors.name}</span>
               </div>
               <div>
                  <label htmlFor="phoneNumber">Номер мобильного телефона</label>
                  <img src={PhoneIcon} alt="" />
                  <StyledInput
                     type="text"
                     name="phoneNumber"
                     id="phoneNumber"
                     value={formData.phoneNumber}
                     onChange={handleChange}
                     placeholder="+996 (___) __-__-__"
                  />
                  <span>{errors.phoneNumber}</span>
               </div>
            </form>
            <StyledButton type="submit" onClick={handleSubmit}>
               ОТПРАВИТЬ ЗАЯВКУ <img src={ArrowIcon} alt="" />
            </StyledButton>
         </ApplicationFormInnerContainer>
         <img src={PhotoWoman} alt="" />
      </ApplicationFormContainer>
   )
}

export default ApplicationForm

const ApplicationFormContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   padding: '5rem 7.5rem',
   fontFamily: 'Manrope',
   h2: {
      fontSize: '2.2rem',
      fontWeight: '500',
   },
   p: {
      fontSize: '1.1rem',
      fontWeight: '400',
   },
   form: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'start',
      gap: '1rem',
      padding: '2rem',
      div: {
         display: 'flex',
         flexDirection: 'column',
         gap: '0.5rem',
         position: 'relative',
      },
      label: {
         fontSize: '0.9rem',
         color: '#4D4E40',
      },
      span: {
         color: 'red',
      },
      img: {
         position: 'absolute',
         top: '3rem',
         left: '6rem',
         transform: 'translateY(-50%)',
      },
   },
   img: {
      marginLeft: '-5rem',
   },
}))

const StyledInput = styled('input')(() => ({
   width: '16rem',
   height: '2.6rem',
   border: '1px solid #009344',
   borderRadius: '0.5rem',
   paddingLeft: '3rem',
   '&:focus': {
      border: '1px solid #009344',
      textAlign: 'left',
   },
   '&:active': {
      border: '1px solid #009344',
   },
   '&::placeholder': {
      color: '#C4C4C4',
      fontFamily: 'Manrope',
      fontSize: '1rem',
   },
}))

const ApplicationFormInnerContainer = styled('div')(() => ({
   marginTop: '80px',
   background: '#DBEBFF',
   borderRadius: '1rem',
   padding: '60px',
}))

const StyledButton = styled(Button)(() => ({
   borderRadius: '3rem',
   img: {
      paddingLeft: '6rem',
   },
}))
