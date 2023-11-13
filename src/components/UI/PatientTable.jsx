import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { table } from './TableMap'

const PatientTable = () => {
   return (
      <DivStyled>
         <div>
            <h2>Мои записи</h2>
            <p>Статус</p>
            <Button className="ButtonStyled" type="submit">
               Подтверждён
            </Button>
         </div>

         <div className="box">
            <ul>
               <ul className="child">
                  <li>Имя</li>
                  <li>{table.name}</li>
               </ul>

               <ul className="child">
                  <li>Фамилия</li>
                  <li>{table.lastName}</li>
               </ul>

               <ul className="child">
                  <li>Email</li>
                  <li>{table.email}</li>
               </ul>
               <ul className="child">
                  <li>Номер телефона</li>
                  <li>{table.phone}</li>
               </ul>
            </ul>

            <ul className="boxtwo">
               <ul className="child">
                  <li>Дата и время</li>
                  <li>{table.date}</li>
                  <li>{table.oclock}</li>
               </ul>

               <ul className="child">
                  <li>Специалист</li>
                  <li>{table.doctor}</li>
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
   marginLeft: '6rem',
   textAlign: 'start',

   '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '&h2': {
         fontWeight: '37.5rem',
         marginTop: '2.5rem',
         fontSize: '1.5rem',
      },
      '& p': {
         marginTop: '2.5rem',
         fontSize: '1rem',
         fontFamily: 'Manrope',
      },

      '& Button': {
         height: '2rem',
         width: '7rem',
         borderRadius: '0.625rem',
         fontSize: '0.675rem',
         marginTop: '0.50rem',
         fontFamily: 'Manrope',
         background: '#346EFB',
      },
      '& Button.canceled': {
         background: 'red',
      },
      '& Button.prohibited': {
         background: 'blue',
      },
      '& Button.confirmed': {
         background: 'green',
      },
   },

   '.box': {
      width: '12.5rem',
      height: '19.5rem',
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      marginTop: '0.75rem',
      borderRadius: '4px',
      color: '#222222',
      fontFamily: 'Manrope',
   },

   '.boxtwo': {
      marginLeft: '5rem',
   },
   '.child': {
      width: '18.063rem',
      fontFamily: 'Manrope',
      marginTop: '0.6rem',
      listStyle: 'none',
   },
}))
