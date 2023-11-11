import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/JMFBG-logo-1-180x300.png';
import { Usercontext } from '../../contexts/UserContext';
import { useContext } from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';




const Header = () => {
 const {username, isAdmin} = useContext(Usercontext)


  return (
    <>
    <header className={styles.header}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <p>Welcome, dear {username || 'Guest'}</p>
      <nav className={styles.nav}>
        <ul>
          
         
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/"}>Home</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/formations"}>Formations</NavLink> </li>
         {!username && <>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/auth/login"}>Login</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/auth/register"}>Register</NavLink> </li>
          </>
          }
          {username && <>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/test"}>Test</NavLink> </li>
          
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/auth/logout"}>Logout</NavLink> </li>
          </>
        }   
          
        
        </ul>
      </nav>
    </header>
    {isAdmin && <AdminNavBar/>}
    </>
  );
};

export default Header;
