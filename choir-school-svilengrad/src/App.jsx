import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import Test from './components/Test';
import DownloadButton from './components/TestDownload';
import LoginForm from './components/LoginForm';
import CreateChoristerForm from './components/CreateChorister';


function App() {
  

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth/register' element={<RegisterForm/>} />
      <Route path='/auth/login' element={<LoginForm />} />
      <Route path='/test' element={<Test/>} />
      <Route path='/formations' element={<Test/>} />
      <Route path='/choristers/create' element={<CreateChoristerForm />} />
     </Routes>

     <DownloadButton />
    </>
  )
}

export default App
