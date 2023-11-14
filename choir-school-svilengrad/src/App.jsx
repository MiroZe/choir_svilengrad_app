import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Test from "./components/Test";
import Formations from "./components/Formations/FormationsList";
import LoginForm from "./components/LoginForm/LoginForm";
import CreateChoristerForm from "./components/Choristers/CreateChorister/CreateChorister";
import CreateFormation from "./components/Formations/CreateFormation/CreateFormation";
import ChoristerList from "./components/Choristers/ChoristersList/ChoristersList";
import ChoristerDetails from './components/Choristers/ChoristerDetails/ChoristerDetails'
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./contexts/UserContext";
import Logout from "./components/Logout/Logout";
import FormationDetails from "./components/Formations/FormationDetails/FormationDetails";
import EditFormation from "./components/Formations/EditFormation/EditFormation";
import { FormationProvider } from "./contexts/FormationContext";


function App() {


  return (
    <UserProvider>
        
      <Header />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/test" element={<Test />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/create" element={<CreateFormation />} />
        <Route path="/formations/:formationId" element={<FormationProvider><FormationDetails /></FormationProvider>} />
        <Route path="/formations/:formationId/edit" element={<FormationProvider><EditFormation /></FormationProvider>} />
        <Route path="/choristers/" element={<ChoristerList />} />
        <Route path="/choristers/create" element={<CreateChoristerForm />} />
        <Route path="/choristers/:choristerId" element={<ChoristerDetails />} />
        <Route path="/auth/logout" element={<Logout />} />
      </Routes>

      <Footer />
     
    </UserProvider>
  );
}

export default App;
