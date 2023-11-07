import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/JMFBG-logo-1-180x300.png'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          
          
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/"}>Home</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/formations"}>Formations</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/auth/register"}>Register</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/test"}>Test</NavLink> </li>
          <li> <NavLink className={({isActive}) => isActive ? styles['nav-active'] : '' } to={"/auth/login"}>Login</NavLink> </li>

          
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
