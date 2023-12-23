import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { fetchDoctorById } from '../../store/doctors/doctorsThunk'
import Button from '../../components/UI/Button'
import { Vector } from '../../assets'

const DoctorInnerPage = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const doctorId = parseInt(id, 30)
   const selectedDoctor = useSelector((state) => state.doctors.selectedDoctor)

   useEffect(() => {
      dispatch(fetchDoctorById(doctorId))
   }, [dispatch, doctorId])

   const handleGoBack = () => {
      window.history.back()
   }

   return (
      <StyledDoctorsContainer>
         <h4>
            {selectedDoctor.firstName} {selectedDoctor.lastName}
         </h4>
         <StyledText>
            Попасть в команду медицинской клиники «Medical Clinic» могут <br />
            только лучшие специалисты c многолетней практикой и доказанным
            опытом.
         </StyledText>
         <StyledText>
            Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
            ведущих университетах <br /> Европы, чтобы еще на шаг стать ближе к
            совершенству.
         </StyledText>

         <StyledDoctorsInnerContainer>
            <img src={selectedDoctor.image} alt={selectedDoctor.firstName} />
            <div>
               <h6>
                  {selectedDoctor.firstName} {selectedDoctor.lastName}
               </h6>
               <p>
                  Отделение: <b>{selectedDoctor.departmentName}</b>
               </p>
               <p>
                  Должность: <b>{selectedDoctor.position}</b>
               </p>
               <Button
                  variant="contained"
                  type="submit"
                  style={{ marginTop: '2rem' }}
               >
                  Записаться на прием
               </Button>
            </div>
         </StyledDoctorsInnerContainer>

         <StyledDescriptionContainer>
            <b>Преимущественно эстетическая хирургия лица:</b>
            <li>
               эндоскопический лифтинг лица ( лоб, височные зоны, брови, верхние
               2/3 лица )
            </li>
            <li>
               SMAS-лифтинг лица с перемещением комков Биша, боковой или
               медиальной платизмопластикой
            </li>
            <li>
               блефаропластика ( трансконъюнктивальная;расширенная с
               перераспределением тканей ,ревизионная )
            </li>
            <li>повторные и ревизионные лифтинги лица</li>
            <li>кантопексия</li>
            <li>миопексия</li>
            <li>липофилинг</li>
            <li>отопластика</li>
            <li>хейлопластика</li>

            <b>Специализация доктора:</b>
            <p>
               Сложное перелечивание корневых каналов зубов с применением
               операционного микроскопа. Художественная реставрация зубов с
               использованием самых современных пломбировочных материалов.
               Восстановление разрушенных зубов керамическими вкладками,
               коронками.
            </p>
            <b>Основное образование:</b>
            <p>
               1988 г.г. Минский государственный медицинский институт <br />
               1988-1989 г.г. интернатура по хирургии
            </p>
            <b>Участие в конференциях:</b>
            <p>
               Активно принимаю участие в конгрессах, форумах. Например,
               последние годы: <br /> 2016- « Сочетание PRP и лазерных
               технологий. Инновационные методы липосакции и фэтграфтинга»,
               <br />
               международная конференция <br /> 2016-«Инновационные методы
               отложения лица» . Курс Брайана Мендельсона <br />
               2017- 2-й Международный Интенсивный Обучающий Курс по
               эстетической пластической хирургии , проф.
               <br /> Оскар М. Рамирез <br />
               2017- «5-й курс «живой» хирургии. Продвинутая эстетическая
               блефаропластика, хирургия средних зон и<br />
               контуров лица» <br />
               2017- «Композитный SMAS-лифтинг, подтяжка лица и шеи. Ответы на
               все вопросы.» Проф. Сэм Хамра
               <br /> 2018 г.- докладчик на 1- м национальном конгрессе «
               Пластическая хирургия и косметология» доклад
               <br /> «Параорбитальная зона. Как добиться успеха?»
               <br />
               2019 г. октябрь - участник 1- го конгресса Европейского общества
               пластических эстетических хирургов
               <br /> г. Брюгге, Бельгия.
            </p>
         </StyledDescriptionContainer>
         <StyledButton onClick={handleGoBack}>
            <Vector />
            Список сотрудников
         </StyledButton>
      </StyledDoctorsContainer>
   )
}

export default DoctorInnerPage

const StyledDoctorsContainer = styled('div')(() => ({
   maxWidth: '100%',
   display: 'flex',
   flexDirection: 'column',
   marginTop: '3rem',
   alignItems: 'flex-start',
   padding: '0 9%',
   fontFamily: 'Manrope',
   '& h4': {
      fontSize: '24px',
      paddingBottom: '2rem',
   },
   '& b': {
      fontWeight: '500',
   },
}))

const StyledText = styled('p')(() => ({
   padding: '10px 0',
}))

const StyledDoctorsInnerContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'flex-start',
   gap: '3rem',
   marginTop: '2rem',
   '& img': {
      width: '20rem',
      height: '22rem',
   },
   '& h6': {
      marginTop: '5rem',
      padding: '20px 0',
      color: '#048741',
      fontSize: '24px',
      fontWeight: '400',
   },
}))

const StyledButton = styled('button')(() => ({
   color: '#048741',
   background: 'none',
   border: 'none',
   margin: '3rem',
   cursor: 'pointer',
}))

const StyledDescriptionContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   paddingTop: '1rem',
   '& b': {
      marginTop: '1.5rem',
      fontWeight: '500',
   },
}))
