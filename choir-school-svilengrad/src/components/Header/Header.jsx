import { NavLink,Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png';

import { Usercontext } from '../../contexts/UserContext';
import { useContext } from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import ErrorMessage from '../ErrorMessages/ErrorMessage';
import { useSelector } from 'react-redux';




const Header = () => {
 const {username, isAdmin} = useContext(Usercontext)
 const error = useSelector(state => state.error);

  return (
    <>
    <header className={styles.header}>
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <p>Welcome, dear <span>{username || 'Guest'}</span></p>
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
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/gallery"}>Gallery</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/videos"}>Videos</NavLink> </li>
          
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/auth/logout"}>Logout</NavLink> </li>
          </>
        }   
          
        
        </ul>
      </nav>
    </header>
    {isAdmin && <AdminNavBar/>}
    {error && <ErrorMessage/>}
    </>
  );
};

export default Header;
