import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
// import Button from './UI/Button'
import {
   Building,
   Conference,
   Consilium,
   DoctorImg,
   Doctors,
   ForwardVector,
   Rectange,
   Signature,
} from '../assets'

const AboutClinicLayout = ({ place, onClick }) => {
   return (
      <StyledBox>
         <Container>
            <div>
               <NavigatePathTitle>
                  <p>
                     <NavLinkStyle to="/">Главная {' > '}</NavLinkStyle>
                     <span>О клинике</span>
                  </p>
               </NavigatePathTitle>
               <StyledTitleSubject>
                  Здоровье — самое
                  <span style={{ color: '#048741' }}> ценное в жизни</span>
               </StyledTitleSubject>
               <StyledMainContainer>
                  <StyledAboutText>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br /> incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis{' '}
                        <br /> nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu <br /> fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in
                        <br /> culpa qui officia deserunt mollit anim id est
                        laborum
                     </p>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br /> incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis{' '}
                        <br /> nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu <br /> fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in
                        <br /> culpa qui officia deserunt mollit anim id est
                        laborum
                     </p>
                     <StyledSignatureImG>
                        <img src={Signature} alt="main doctor" />
                     </StyledSignatureImG>
                  </StyledAboutText>
                  <StyledImageContainer>
                     <img src={Rectange} alt="rectange" />
                     <StyledDoctorImG src={DoctorImg} alt="" />
                     <h3>Руководитель клиники Medical Clinic</h3>
                     <h2> Аниса Михаилова </h2>
                  </StyledImageContainer>
               </StyledMainContainer>
            </div>
         </Container>

         <Block>
            <StyledMainBlock>
               <StyledAboutSecondText>
                  <StyledTitleText>
                     О нашей клинике
                     <span style={{ color: '#048741' }}> “MedCheck”</span>
                  </StyledTitleText>
                  <p>
                     Вся наша команда готова обеспечить вам медицинский уход
                     <br /> и заботу на самом высоком уровне. Наша главная
                     задача — оказать <br /> Вам теплый прием и обеспечить самый
                     лучший медицинский уход. <br /> У нас Вы в хороших руках! В
                     нашей клинике используются только <br />
                     качественные материалы и проверенные технологии. Для
                     каждого <br />
                     клиента специалисты нашей клиники разработают <br />
                     индивидуальный план лечения, подробно рассказывая о каждом
                     <br /> этапе.
                  </p>
                  <p>
                     Доброжелательность и уважительное отношение к пациентам,
                     <br /> не только материальная, но и моральная
                     ответственность <br /> за результаты лечения — все это
                     взято за основу политики Medical <br /> Clinic.
                     Профессионализм и высокое качество оказываемых услуг
                     <br />
                     помогают нам привлечь пациентов которые рекомендуют нас
                     <br /> своим родным и близким.
                  </p>
                  <p>
                     Уже 20 лет мы работаем на уровне лучших мировых стандартов,
                     <br />
                     внедряя и развивая передовые методы лечения для сохранения
                     <br />
                     здоровья наших пациентов.
                  </p>

                  {place === 'main' ? (
                     <StyledNavlink to="about">
                        Читать подробнее o клинике <ForwardVector />
                     </StyledNavlink>
                  ) : (
                     <StyledButton onClick={onClick}>
                        Записаться на консультацию
                     </StyledButton>
                  )}
               </StyledAboutSecondText>
               <StyledImageBlock>
                  <StyledBuildingImG src={Building} alt="" />

                  <StyledSlidingImG>
                     <StyledBuildingImG src={Conference} alt="conference" />
                     <StyledCenterBuildingImG src={Doctors} alt="doctors" />
                     <StyledBuildingImG src={Consilium} alt="consilium" />
                  </StyledSlidingImG>
               </StyledImageBlock>
            </StyledMainBlock>
         </Block>
      </StyledBox>
   )
}

export default AboutClinicLayout

const StyledBox = styled(Box)(() => ({
   paddingBottom: '10rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '6rem',
}))

const NavigatePathTitle = styled('div')(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   padding: '1.625rem 0',
   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: '#959595',
}))
const StyledAboutText = styled.div`
   flex: 1;
   p {
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.625rem;
      color: #4d4e51;
   }
`

const StyledMainContainer = styled.div`
   display: flex;
   gap: 9rem;
   flex-direction: row;
`
const StyledImageContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;

   h3 {
      font-size: 1.13rem;
      font-weight: 400;
      line-height: 1.563rem;
      color: #048741;
      margin-right: 10rem;
   }

   h2 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.875rem;
      color: #222222;
      margin-right: 10rem;
   }
`

const Container = styled.div`
   display: flex;
   justify-content: center;
   margin-left: 10rem;
`
const StyledTitleSubject = styled.h1`
   font-size: 2.25rem;
   font-weight: 600;
   line-height: 3.074rem;
`
const StyledDoctorImG = styled('img')(() => ({
   width: '59%',
   height: '27.375rem',
   marginTop: '-25.938rem ',
   marginLeft: '2.5rem ',
}))

const StyledSignatureImG = styled('div')(() => ({
   display: ' flex',
   justifyContent: 'end',
   img: {
      marginTop: '1.25rem ',
   },
}))

const StyledAboutSecondText = styled.div`
   width: 50%;
   height: 34rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 160%;
   color: #4d4e51;

   & p {
      font-size: 1.1rem;
      line-height: 1.625rem;
      font-weight: 400;
      font-style: normal;
      color: #4d4e51;
   }
`
const StyledMainBlock = styled.div`
   height: '34rem';
   display: flex;
   flex-direction: row;
   gap: 10rem;
`
const StyledImageBlock = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   margin-top: 10rem;
   h3 {
      font-size: 1.13rem;
      font-weight: 400;
      line-height: 1.563rem;
      color: #048741;
   }

   h2 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.875rem;
      color: #222222;
   }
`
const Block = styled.div`
   padding-left: 5.625rem;
   padding-right: 4.375rem;
   max-width: 100%;
   display: flex;
   justify-content: center;
`

const StyledTitleText = styled.h1`
   font-size: 2.25rem;
   font-weight: 600;
   line-height: 3.074;
   color: #000000;
`

const StyledBuildingImG = styled('img')(() => ({
   width: '95%',
   height: '24.875rem',
   marginTop: '1.25rem ',
}))
const StyledCenterBuildingImG = styled('img')(() => ({
   marginLeft: '1.25rem',
   marginRight: '1.25rem',
}))
const StyledSlidingImG = styled('div')(() => ({
   display: ' flex',
   img: {
      width: '29%',
      height: '7.5rem',
      borderRadius: '0.5rem',
      gap: '1.625rem',
      marginTop: '1.25rem ',
   },
}))

const StyledNavlink = styled(NavLink)(() => ({
   color: '#009344',
   fontSize: '1rem',
   fontWeight: 500,
   lineHeight: '1.375rem',
   textDecoration: 'none',
   display: 'flex',
   alignItems: 'center',
   paddingTop: '2.5rem',
}))

const StyledButton = styled('button')(() => ({
   '&': {
      alignSelf: 'start',
      marginTop: '1.25rem',
      borderRadius: '0.625rem',
      padding: '0.625rem 1.25rem',
      border: '1px solid #048741',
      color: '#048741',
      fontWeight: '500',
      fontSize: '0.875rem',
      lineHeight: '1.188rem',
      background: '#fff',
      transition: '0.5s',
      cursor: 'pointer',
   },
   '&:hover': {
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: '#FFFFFF',
   },
   '&:active': {
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: '#FFFFFF',
   },
}))
