import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import RegisterForm from "./components/RegisterForm/RegisterForm";

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
import EditChorister from "./components/Choristers/EditChorister/EditChorister";
import UploadForm from "./components/Upload/UploadForm";
import Gallery from "./components/Gallery/Gallery";
import Scores from "./components/Scores/Scores";
import Arrangements from "./components/Arrangements/Arrangements";
import NoPageFound from "./components/NoPageFound/NoPageFound";
import Users from "./components/Users/UsersList";
import RouteAdminGuard from "./components/RouteGuards/RouteAdminGuard";
import VideoLinkUploadForm from "./components/Videos/VideoUploadForm/VideoUploadForm";
import VideoGallery from "./components/Videos/VideoGallery";
import TaxesDashboard from "./components/Taxes/TaxesDashboard/TaxesDashboard";
import WeatherCard from "./components/Weather/WeatherCard";
import RouteUserGuard from "./components/RouteGuards/RouteUser";
import RouteChoristerGuard from "./components/RouteGuards/RouteChoristerGuard";


function App() {

  


  return (
    <UserProvider>
        
      <Header />
    

      <Routes>
       {/* PUBLIC ROUTES  */}
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/weather" element={<WeatherCard />} />
        <Route path="/auth/register" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/formations/:formationId" element={<FormationDetails />} />
        {/* PUBLIC ROUTES  */}

          {/* USER ROUTES  */}
        <Route element={<RouteUserGuard />}>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/auth/logout" element={<Logout />} />
        </Route>
          {/* USER ROUTES  */}

         {/* CHORISTER ROUTES  */}
         <Route element={<RouteChoristerGuard />}>
        <Route path="/formations/:formationId/scores" element={<Scores />} />
        <Route path="/formations/:formationId/arrangements" element={<Arrangements />} />
        <Route path="/choristers/" element={<ChoristerList />} />
        <Route path="/choristers/:choristerId" element={<ChoristerDetails />} />
        </Route>

        {/* CHORISTER ROUTES  */}

    
      {/* ADMIN ROUTES  */}
        <Route element={<RouteAdminGuard />}>
            <Route path="/formations/create" element={<CreateFormation />} />
            <Route path="/formations/:formationId/edit" element={<EditFormation />} />
            <Route path="/choristers/create" element={<CreateChoristerForm />} />
            <Route path="/choristers/:choristerId/edit" element={<EditChorister />} />
            <Route path="/upload" element={<UploadForm />} />
            <Route path="/users" element={<Users />} />
            <Route path="/videos/upload" element={<VideoLinkUploadForm />} />
            <Route path="/taxes" element={<TaxesDashboard />} />
        </Route>
          {/* ADMIN ROUTES  */}
      
        <Route path="*" element={<NoPageFound/>} />
      </Routes>

      <Footer />
     
    </UserProvider>
  );
}

export default App;
