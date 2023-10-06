import './App.css'
import CustomizedAccordions from './components/UI/Accordion'

function App() {
   return (
      <div className="App">
         <CustomizedAccordions title="Как проходит процедура?">
            <ul>
               <li>
                  Обработка десен защитным составом; Защита глаз при помощи
                  специальных очков; Нанесение отбеливающего геля; Первая
                  процедура отбеливания в течение 15 минут под воздействием
                  лампы; Полоскание для удаления остатков геля; Вторая процедура
                  отбеливания в течение по 15 минут под воздействием лампы;
                  Полоскание; Третья процедура отбеливания в течение 15 минут
                  под воздействием лампы; Нанесение реминерализирующего геля для
                  защиты эмали от чувствительности и ее восстановления.
               </li>
            </ul>
         </CustomizedAccordions>
      </div>
   )
}

export default App
