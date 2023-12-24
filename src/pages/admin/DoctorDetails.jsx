import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import {
   changeDoctorThunk,
   spesialistThunk,
} from '../../store/spesialist/spesialistThunk'
import { PhotoPlass } from '../../assets'
import { Input } from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'

const DoctorDetails = ({ variant }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { doctorId } = useParams()

   let { selectedDoctor } = useSelector((state) => state.doctors)
   const [doctorsId, setDoctorsId] = useState(selectedDoctor)
   const [isEditing, setIsEditing] = useState(false)
   const [image, setImage] = useState(null)
   if (variant) {
      selectedDoctor = null
   }

   const { handleSubmit, register, reset, setValue, getValues } = useForm({
      defaultValues: {
         position: selectedDoctor?.position,
         lastName: selectedDoctor?.lastName,
         firstName: selectedDoctor?.firstName,
      },
   })

   useEffect(() => {
      if (doctorId) {
         dispatch(spesialistThunk(doctorId))
      }
   }, [dispatch])

   useEffect(() => {
      if (selectedDoctor?.departmentName) {
         setValue('firstName', selectedDoctor.firstName)
         setValue('lastName', selectedDoctor.lastName)
         setValue('position', selectedDoctor.position)
      }
   }, [selectedDoctor])

   const handleSearchDoctor = (selectedDoctor) => {
      dispatch(setDoctorsId(selectedDoctor))
   }

   const handleChange = (e) => {
      const file = e.target.files[0]
      setImage(file)
   }

   const handleDrop = (acceptedFiles) => {
      setImage(acceptedFiles[0])
   }

   const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      accept: 'image/*',
   })

   const handleBackButtonClick = () => {
      navigate('/specialists')
   }

   const handleEditButtonClick = () => {
      setIsEditing((prevIsEditing) => !prevIsEditing)
   }

   const onSubmit = (values) => {
      const doctorInfo = {
         ...values,
         image: 'https://эхц.рф/netcat_files/5/6/kruglov.jpg',
         description: 'this is description',
      }
      dispatch(changeDoctorThunk({ doctorId, departmentId: 1, doctorInfo }))
   }
   return (
      <div>
         {variant ? (
            <>
               <PositionStyle>
                  Специалисты:
                  <p>Добавление специалиста</p>
               </PositionStyle>
               <NameStyle>Добавление специалиста</NameStyle>
            </>
         ) : (
            <>
               <PositionStyle>
                  Специалисты:
                  <p>
                     {selectedDoctor === null
                        ? null
                        : `${selectedDoctor?.firstName} ${selectedDoctor?.lastName}`}
                  </p>
               </PositionStyle>
               <NameStyle>
                  {selectedDoctor === null
                     ? null
                     : `${selectedDoctor?.firstName} ${selectedDoctor?.lastName}`}
               </NameStyle>
            </>
         )}
         <Container>
            <div>
               {variant ? (
                  <div>
                     <ContainerAdd
                        {...getRootProps()}
                        onClick={(e) => e.stopPropagation()}
                     >
                        {image ? (
                           <Img
                              src={
                                 typeof image === 'string'
                                    ? image
                                    : URL.createObjectURL(image)
                              }
                              alt="image"
                           />
                        ) : (
                           <IconStyle>
                              <PhotoPlass alt="image" />
                           </IconStyle>
                        )}
                        <input
                           style={{ display: 'none' }}
                           type="file"
                           onChange={handleChange}
                           {...getInputProps()}
                        />
                        <ButtonStyle>
                           Нажмите для добавления фотографии
                        </ButtonStyle>
                     </ContainerAdd>
                  </div>
               ) : (
                  <>
                     <ImgStyle src={selectedDoctor?.image} alt="photos" />
                     <ButtonStyle>Сменить фото</ButtonStyle>
                  </>
               )}
            </div>
            <ContainerMain>
               {variant ? (
                  <>
                     <p>Добавление специалиста</p>
                     <Con id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                           <Row>
                              <InputLabel htmlFor="specialistName">
                                 Имя
                              </InputLabel>
                              <Input
                                 id="specialistName"
                                 placeholder="Напишите имя"
                                 type="text"
                                 width="30.5rem"
                                 onChange={handleSearchDoctor}
                                 value={selectedDoctor?.firstName || ''}
                              />
                           </Row>
                           <Row>
                              <InputLabel htmlFor="departmentName">
                                 Отделение
                              </InputLabel>
                              <Input
                                 id="departmentName"
                                 placeholder="Выберите отделение"
                                 type="text"
                                 width="30.5rem"
                                 onChange={handleSearchDoctor}
                                 value={selectedDoctor?.departmentName || ''}
                              />
                           </Row>
                        </div>
                        <div>
                           <Row>
                              <InputLabel htmlFor="specialistLastName">
                                 Фамилия
                              </InputLabel>
                              <Input
                                 id="specialistLastNmae"
                                 placeholder="Напишите фамилию"
                                 type="text"
                                 width="30.5rem"
                                 onChange={handleSearchDoctor}
                                 value={selectedDoctor?.lastName || ''}
                              />
                           </Row>
                           <Row>
                              <InputLabel htmlFor="specialistLable">
                                 Должность
                              </InputLabel>
                              <Input
                                 id="specialistLable"
                                 placeholder="Напишите должность"
                                 type="text"
                                 width="30.5rem"
                                 onChange={handleSearchDoctor}
                                 value={selectedDoctor?.position || ''}
                              />
                           </Row>
                        </div>
                     </Con>
                  </>
               ) : (
                  <>
                     <p>Личные данные</p>
                     <Con id="hook-form">
                        <div>
                           <Row>
                              <InputLabel htmlFor="specialistName">
                                 Имя
                              </InputLabel>
                              <Input
                                 id="specialistName"
                                 placeholder="Напишите имя"
                                 type="text"
                                 width="30.5rem"
                                 disabled={!isEditing}
                                 {...register('firstName')}
                              />
                           </Row>
                           <Row>
                              <InputLabel htmlFor="departmentName">
                                 Отделение
                              </InputLabel>
                              <Input
                                 id="departmentName"
                                 placeholder="Выберите отделение"
                                 type="text"
                                 width="30.5rem"
                                 disabled="true"
                                 value={selectedDoctor?.departmentName}
                              />
                           </Row>
                        </div>
                        <div>
                           <Row>
                              <InputLabel htmlFor="specialistLastName">
                                 Фамилия
                              </InputLabel>
                              <Input
                                 id="specialistLastNmae"
                                 placeholder="Напишите фамилию"
                                 type="text"
                                 width="30.5rem"
                                 disabled={!isEditing}
                                 {...register('lastName')}
                              />
                           </Row>
                           <Row>
                              <InputLabel htmlFor="specialistLable">
                                 Должность
                              </InputLabel>
                              <Input
                                 id="specialistLable"
                                 placeholder="Напишите должность"
                                 type="text"
                                 width="30.5rem"
                                 disabled={!isEditing}
                                 {...register('position')}
                              />
                           </Row>
                        </div>
                     </Con>
                  </>
               )}
            </ContainerMain>
         </Container>
         <ContainerDescription>
            {variant ? (
               <InputStyle placeholder="Введите описание специалиста" />
            ) : (
               <>
                  <p>Описание</p>
                  <div>
                     <h4>Преимущественно эстетическая хирургия лица:</h4>
                     <p>
                        эндоскопический лифтинг лица (лоб, височные зоны, брови,
                        верхние 2/3 лица)
                        <br /> SMAS-лифтинг лица с перемещением комков Биша,
                        боковой или медиальной платизмопластикой <br />
                        блефаропластика ( трансконъюнктивальная; расширенная с
                        перераспределением тканей ,ревизионная )<br /> повторные
                        и ревизионные лифтинги лица <br />
                        кантопексия <br /> миопексия <br /> липофилинг <br />
                        отопластика
                        <br />
                        хейлопластика <br />
                     </p>
                     <br />
                     <h4>Специализация доктора:</h4>
                     <p>
                        Сложное перелечивание корневых каналов зубов с
                        применением операционного микроскопа. Художественная
                        реставрация <br />
                        зубов с использованием самых современных пломбировочных
                        материалов. Восстановление разрушенных зубов <br />
                        керамическими вкладками, коронками.
                     </p>
                     <br />
                     <h4>Основное образование:</h4>
                     <p>
                        1988 г.г. Минский государственный медицинский институт{' '}
                        <br />
                        1988-1989 г.г. интернатура по хирургии
                     </p>
                     <br />
                     <h4>Участие в конференциях:</h4>
                     <p>
                        Активно принимаю участие в конгрессах, форумах.
                        Например, последние годы: <br /> 2016- « Сочетание PRP и
                        лазерных технологий. Инновационные методы липосакции и
                        фэтграфтинга», международная
                        <br /> конференция <br /> 2016-«Инновационные методы
                        отложения лица» . Курс Брайана Мендельсона <br /> 2017-
                        2-й Международный Интенсивный Обучающий Курс по
                        эстетической пластической хирургии , проф. Оскар М.
                        Рамирез <br /> 2017- «5-й курс «живой» хирургии.
                        Продвинутая эстетическая блефаропластика, хирургия
                        средних зон и контуров лица» <br />
                        2017- «Композитный SMAS-лифтинг, подтяжка лица и шеи.
                        Ответы на все вопросы.» Проф. Сэм Хамра <br /> 2018 г.-
                        докладчик на 1- м национальном конгрессе « Пластическая
                        хирургия и косметология» ( доклад «Параорбитальная{' '}
                        <br /> зона. Как добиться успеха?» ) <br /> 2019 г.
                        октябрь - участник 1- го конгресса Европейского общества
                        пластических эстетических хирургов , г. Брюгге, Бельгия.
                     </p>
                  </div>
               </>
            )}
         </ContainerDescription>
         <ContainerButtons>
            {variant ? (
               <>
                  <Link to="/specialists">
                     <Button variant="outlined" onClick={handleBackButtonClick}>
                        ОТМЕНИТЬ
                     </Button>
                  </Link>
                  <Button onClick={handleEditButtonClick}>ДОБАВИТЬ</Button>
               </>
            ) : (
               <>
                  <Link to="/specialists">
                     <Button variant="outlined" onClick={handleBackButtonClick}>
                        {isEditing ? 'ОТМЕНИТЬ' : 'НАЗАД'}
                     </Button>
                  </Link>
                  <Button
                     type="submit"
                     form="hook-form"
                     onClick={handleSubmit((d) => {
                        if (isEditing) {
                           onSubmit(d)
                        }
                        handleEditButtonClick()
                     })}
                  >
                     {isEditing ? 'СОХРОНИТЬ' : 'РЕДАКТИРОВАТЬ'}
                  </Button>
               </>
            )}
         </ContainerButtons>
      </div>
   )
}

export default DoctorDetails

const ContainerAdd = styled('div')`
   /* width: 9vw;
   height: 15vh;
   border-radius: 0.9rem;
   display: flex;
   justify-content: center;
   overflow: hidden; */
   cursor: pointer;
`

const Img = styled('img')`
   height: 15vh;
`

const IconStyle = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '8rem',
   height: '8rem',
   borderRadius: '8rem',
   backgroundColor: '#E0E2E7',
   marginTop: '1rem',
   marginLeft: '2.5rem',
}))

const ImgStyle = styled('img')(() => ({
   width: '8rem',
   height: '8rem',
   borderRadius: '8rem',
   marginTop: '1rem',
   marginLeft: '2.5rem',
}))

const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   justifyContent: 'flex-end',
   width: 'max-width',
   padding: '4rem 17%',
   '& Button': {
      width: '15rem',
      height: '2.2rem',
   },
}))

const ContainerDescription = styled('div')(() => ({
   display: 'flex',
   textAlign: 'start',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   width: '90%',
   padding: '0px 16.5%',
   '& div': {
      padding: '20px 1.5%',
   },
}))

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-start',
   padding: '30px 3%',
}))

const ContainerMain = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   width: '90%',
   '& p': {
      display: 'flex',
      padding: '1rem ',
      fontWeight: '600',
   },
}))
const Con = styled('form')(() => ({
   display: 'flex',
   gap: '1.5rem',
   padding: '0px 1rem',
}))

const PositionStyle = styled('p')(() => ({
   display: 'flex',
   justifyContent: ' flex - start',
   fontWeight: '300',
   padding: '30px 4%',

   '& p': {
      color: '#048741',
      fontWeight: '500',
   },
}))

const NameStyle = styled('p')(() => ({
   display: 'flex',
   justifyContent: ' flex - start',
   fontSize: '1.3rem',
   width: 'max-width',
   padding: '30px 4%',
   fontWeight: '500',
}))

const InputLabel = styled('label')(() => ({
   marginBottom: '4px',
   display: 'flex',
   fontSize: '0.9rem',
}))

const Row = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginBottom: '16px',
}))

const ButtonStyle = styled('Button')(() => ({
   display: 'flex',
   justifyContent: 'center',
   color: '#346EFB',
   border: 'none',
   backgroundColor: '#ffffff',
   cursor: 'pointer',
   padding: '1rem',
   width: '13rem',
   alignItems: 'start',
   // marginLeft: '-60px',
}))

const InputStyle = styled('Input')(() => ({
   borderRadius: '5px',
   marginLeft: '1rem',
   padding: '2rem',
   width: '62.5rem',
   paddingBottom: '17rem',
   border: '1px solid #D9D9D9',
   '&:focus-visible': {
      outline: '0',
   },
}))
