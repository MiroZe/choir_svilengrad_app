import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Test from './components/Test';
import Formations from './components/Formations/FormationsList';
import LoginForm from './components/LoginForm/LoginForm';
import CreateChoristerForm from './components/CreeateChorister/CreateChorister';
import CreateFormation from './components/Formations/CreateFormation';
import AdminNavBar from './components/AdminNavBar/AdminNavBar';
import ChoristerList from './components/CroristerLIst/ChoristerList';
import ChoristerDetail from './components/CroristerLIst/ChoristerDetails';



function App() {
  

  return (
    <>
     <Header />
     <AdminNavBar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth/register' element={<RegisterForm/>} />
      <Route path='/auth/login' element={<LoginForm />} />
      <Route path='/test' element={<Test/>} />
      <Route path='/formations' element={<Formations/>} />
      <Route path='/formations/create' element={<CreateFormation/>} />
      <Route path='/choristers/' element={<ChoristerList />} />
      <Route path='/choristers/create' element={<CreateChoristerForm />} />
      <Route path='/choristers/:choristerId' element={<ChoristerDetail />} />
      
     </Routes>
     
     
 
    </>
  )
}

export default App
