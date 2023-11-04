import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Test from './components/Test';
import Formations from './components/Formations/Formations';
import LoginForm from './components/LoginForm/LoginForm';
import CreateChoristerForm from './components/CreeateChorister/CreateChorister';


function App() {
  

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth/register' element={<RegisterForm/>} />
      <Route path='/auth/login' element={<LoginForm />} />
      <Route path='/test' element={<Test/>} />
      <Route path='/formations' element={<Formations/>} />
      <Route path='/choristers/create' element={<CreateChoristerForm />} />
      
     </Routes>

 
    </>
  )
}

export default App
