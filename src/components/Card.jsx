import React from 'react'
import styled from '@emotion/styled'

export default function Card({ cards }) {
   return (
      <Container>
         {cards.map((card) => (
            <div key={card.id}>
               <img src={card.image} alt="" />
               <p className="title">{card.title}</p>
               <p className="description">{card.description}</p>
               <button type="submit">Записаться на прием</button>
            </div>
         ))}
      </Container>
   )
}

const Container = styled('div')(() => ({
   '& div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '12.5rem',
      height: '19.5rem',
      borderRadius: '4px',
   },
   '& img': {
      width: '100%',
      height: '12.813rem',
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
   '& .description': {
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1rem',
      fontWeight: '31.25rem',
      color: '#959595',
   },
}))
