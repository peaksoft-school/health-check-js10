import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function DoctorCard({ doctor }) {
   const { id, image, fullName, position } = doctor
   return (
      <Container>
         <Link to={`/doctors/${id}`}>
            <img src={image} alt={fullName} />
         </Link>
         <Link to={`/doctors/${id}`} className="title">
            {`${fullName}`}
         </Link>
         <Link to={`/doctors/${id}`} className="position">
            {position}
         </Link>
         <Button variant="outlined" type="submit">
            Записаться на прием
         </Button>
      </Container>
   )
}
const Container = styled('div')(() => ({
   '& div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '19rem',
      height: '26rem',
      borderRadius: '4px',
   },
   '& img': {
      width: '19rem',
      height: '20rem',
   },
   '& button': {
      padding: '10px 20px',
      borderRadius: '10px',
      marginTop: '0.5rem',
   },
   '& .title': {
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1.125rem',
      fontWeight: '31.25rem',
   },
   '& .position': {
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1rem',
      fontWeight: '31.25rem',
      color: '#959595',
   },
}))
