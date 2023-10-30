import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FormLabel, InputAdornment } from '@mui/material'
import PhotoWoman from '../assets/images/applicationform-woman.png'
import Button from './UI/Button'
import { UserIcon, PhoneIcon, ArrowIcon } from '../assets'
import { Input } from './UI/input/Input'

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
         if (!nameRegex.test(value)) {
            setErrors({
               ...errors,
               name: 'Неправильное имя',
            })
         } else {
            setErrors({
               ...errors,
               name: '',
            })
         }
      } else if (name === 'phoneNumber') {
         const phoneRegex = /^\+996\d{9}$/
         if (!phoneRegex.test(value)) {
            setErrors({
               ...errors,
               phoneNumber: 'Неправильный номер',
            })
         } else {
            setErrors({
               ...errors,
               phoneNumber: '',
            })
         }
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (!formData.name || !formData.phoneNumber) {
         setErrors({
            ...errors,
            name: !formData.name ? 'Это поле обязательно' : '',
            phoneNumber: !formData.phoneNumber ? 'Это поле обязательно' : '',
         })
         return
      }
      console.log('Form Data:', formData)
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
                  <FormLabel>Как к Вам обратиться?</FormLabel>
                  <Input
                     className="input-container"
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <UserIcon className="inner_icon" />
                           </InputAdornment>
                        ),
                     }}
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Введите имя"
                     width="16rem"
                     height="2.6rem"
                  />
                  <span>{errors.name}</span>
               </div>
               <div>
                  <FormLabel>Номер мобильного телефона</FormLabel>
                  <Input
                     className="input-container"
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <PhoneIcon className="inner_icon" />
                           </InputAdornment>
                        ),
                     }}
                     name="phoneNumber"
                     value={formData.phoneNumber}
                     onChange={handleChange}
                     placeholder="+996 (___) __-__-__"
                     width="16rem"
                     height="2.6rem"
                  />
                  <span>{errors.phoneNumber}</span>
               </div>
            </form>
            <StyledButton type="submit" onClick={handleSubmit}>
               ОТПРАВИТЬ ЗАЯВКУ <ArrowIcon className="arrow-icon" />
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
      textAlign: 'center',
   },
   p: {
      fontSize: '1.1rem',
      fontWeight: '400',
      textAlign: 'center',
      paddingTop: '2rem',
   },
   img: {
      marginLeft: '-5rem',
   },
}))

const ApplicationFormInnerContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '80px',
   background: '#DBEBFF',
   borderRadius: '1rem',
   padding: '60px',
   gap: '1rem',
   form: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'start',
      gap: '1rem',
      padding: '2rem',
      div: {
         display: 'flex',
         flexDirection: 'column',
      },
      label: {
         fontSize: '0.9rem',
         color: '#4D4E40',
         fontFamily: 'inherit',
      },
      span: {
         color: 'red',
      },
      '& input': {
         background: '#fff',
         width: '11rem',
         height: '0rem',
         position: 'relative',
         top: '0.2rem',
         '& :focus': {
            background: '#fff',
         },
         '& :hover': {
            background: '#fff',
         },
      },
      '& .input-container': {
         background: '#ffff',
         border: '1px solid #009344',
         borderRadius: '8px',
         '& .inner_icon': {
            position: 'absolute',
            left: '1rem',
            bottom: '0.8rem',
         },
      },
   },
}))

const StyledButton = styled(Button)(() => ({
   borderRadius: '3rem',
   '& .arrow-icon': {
      marginLeft: '0.5rem',
   },
}))
