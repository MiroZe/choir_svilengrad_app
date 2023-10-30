import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import Test from './components/Test';
import DownloadButton from './components/TestDownload';

function App() {
  

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth/register' element={<RegisterForm/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/formations' element={<Test/>} />
     </Routes>

     <DownloadButton />
    </>
  )
}

export default App
