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
import EditChorister from "./components/Choristers/EditChorister/EditChorister";
import UploadForm from "./components/Upload/UploadForm";
import Gallery from "./components/Gallery/Gallery";
import Scores from "./components/Scores/Scores";
import Arrangements from "./components/Arrangements/Arrangements";
import NoPageFound from "./components/NoPageFound/NoPageFound";


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
        <Route path="/formations/:formationId/scores" element={<FormationProvider><Scores /></FormationProvider>} />
        <Route path="/formations/:formationId/arrangements" element={<FormationProvider><Arrangements /></FormationProvider>} />
        <Route path="/choristers/" element={<ChoristerList />} />
        <Route path="/choristers/create" element={<CreateChoristerForm />} />
        <Route path="/choristers/:choristerId" element={<ChoristerDetails />} />
        <Route path="/choristers/:choristerId/edit" element={<EditChorister />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/auth/logout" element={<Logout />} />
        <Route path="*" element={<NoPageFound/>} />
      </Routes>

      <Footer />
     
    </UserProvider>
  );
}

export default App;
