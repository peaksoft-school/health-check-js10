import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import DoctorCard from '../../components/UI/DoctorCard'
import { fetchDoctors } from '../../store/doctors/doctorsThunk'

const Doctors = () => {
   const doctors = useSelector((state) => state.doctors.doctors)
   const [showAllDepartments, setShowAllDepartments] = useState(false)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchDoctors())
   }, [dispatch])

   const handleShowMoreClick = () => {
      setShowAllDepartments(true)
   }
   const handleShowLessClick = () => {
      setShowAllDepartments(false)
   }

   const groupedDoctors = doctors.reduce((acc, doctor) => {
      const { departmentName } = doctor

      if (!acc[departmentName]) {
         acc[departmentName] = []
      }

      acc[departmentName].push(doctor)

      return acc
   }, {})

   const visibleDepartments = showAllDepartments
      ? Object.keys(groupedDoctors)
      : Object.keys(groupedDoctors).slice(0, 4)

   return (
      <StyledDoctorsContainer>
         <h2>
            Наши <GreenText>врачи</GreenText>
         </h2>
         <p>
            Попасть в команду медицинской клиники «Medical Clinic» могут <br />
            только лучшие специалисты c многолетней практикой и доказанным
            опытом.
         </p>
         <p>
            Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
            ведущих университетах <br /> Европы, чтобы еще на шаг стать ближе к
            совершенству.
         </p>

         <StyledDoctorsInnerContainer>
            {visibleDepartments.map((department) => (
               <div key={department}>
                  <StyledText>{department}</StyledText>
                  <StyledDoctorCard>
                     {groupedDoctors[department].slice(0, 3).map((doctor) => (
                        <DoctorCard doctor={doctor} />
                     ))}
                  </StyledDoctorCard>
               </div>
            ))}
            <StyledSpan>
               В нашей клинике работают: <b>более 30 специалистов</b>
               {!showAllDepartments ? (
                  <StyledButton onClick={handleShowMoreClick}>
                     Показать больше
                  </StyledButton>
               ) : (
                  <StyledButton onClick={handleShowLessClick}>
                     Показать меньше
                  </StyledButton>
               )}
            </StyledSpan>
         </StyledDoctorsInnerContainer>
      </StyledDoctorsContainer>
   )
}

export default Doctors

const StyledDoctorsContainer = styled('div')(() => ({
   maxWidth: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   marginTop: '30px',
   padding: '0 9%',
   fontFamily: 'Manrope',
   '& p': {
      paddingTop: '2rem',
   },
}))

const StyledDoctorsInnerContainer = styled('div')(() => ({
   maxWidth: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
}))

const StyledDoctorCard = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   gap: '3rem',
}))

const StyledButton = styled('button')(() => ({
   color: '#048741',
   background: 'none',
   border: 'none',
   paddingLeft: '0.5rem',
   cursor: 'pointer',
}))

const StyledText = styled('p')(() => ({
   marginTop: '4rem',
   fontSize: '24px',
   width: '600',
   padding: '20px 0',
}))

const StyledSpan = styled('span')(() => ({
   margin: '7rem auto',
}))

const GreenText = styled('span')(() => ({
   color: '#048741',
}))
