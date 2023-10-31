import React from 'react'
import { Button } from '@mui/material'
import styled from '@emotion/styled'

const PatientTable = () => {
   return (
      <DivStyled>
         <h2>Мои записи</h2>
         <p>Статус</p>
         <Button type="submit">Подтверждён</Button>

         <div className="box">
            <ul>
               <ul className="child">
                  <li>Имя</li>
                  <li>Айназик</li>
               </ul>

               <ul className="child">
                  <li>Фамилия</li>
                  <li>Бакытова</li>
               </ul>

               <ul className="child">
                  <li>Email</li>
                  <li>ainazik@gmail.com</li>
               </ul>
               <ul className="child">
                  <li>Номер телефона</li>
                  <li>+996 707 123 456</li>
               </ul>
            </ul>

            <ul className="boxtwo">
               <ul className="child">
                  <li>Дата и время</li>
                  <li>23.01.23</li>
                  <li>11:30</li>
               </ul>

               <ul className="child">
                  <li>Специалист</li>
                  <li>Манак Елена</li>
               </ul>
               <ul className="child">
                  <li>Услуга</li>
                  <li>Дерматология</li>
               </ul>
            </ul>
         </div>
      </DivStyled>
   )
}
export default PatientTable

const DivStyled = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '4.688rem',
   marginLeft: '7.5rem',
   '&h2': {
      marginTop: '2.5rem',
      fontSize: '1.5rem',
   },
   '& p': {
      marginTop: '2.5rem',
      fontSize: '1rem',
      fontFamily: 'Inter',
   },
   '.css-y5afr5 p': {
      marginTop: '2.5rem',
      fontSize: '1rem',
      fontFamily: 'Inter',
   },
   '& Button': {
      height: 'normal',
      width: '7rem',
      borderRadius: '0.625rem',
      fontSize: '0.675rem',
      marginTop: '0.75rem',
      fontFamily: 'Manrope',
      background: '#346EFB',
   },
   '.box': {
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      marginTop: '0.75rem',
      width: '12.5rem',
      height: '19.5rem',
      borderRadius: '4px',
      color: '#222222',
      fontFamily: 'Manrope',
   },

   '.boxtwo': {
      marginLeft: '13rem',
   },
   '.child': { fontFamily: 'Manrope', marginTop: '0.6rem', listStyle: 'none' },
}))
