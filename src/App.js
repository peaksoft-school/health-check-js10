import './App.css'
import CheckboxUI from './components/UI/Checkbox'
import { Input } from './components/UI/input/Input'
import Header from './layout/admin/header/Header'

function App() {
   return (
      <>
         <div style={{ backgroundColor: '#F5F5F5' }}>
            <Header />
         </div>
         <div>
            <Input />
            <CheckboxUI />
         </div>
      </>
   )
}
export default App
