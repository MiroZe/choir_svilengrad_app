import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png';
import { useTranslation } from 'react-i18next';
import { Usercontext } from '../../contexts/UserContext';
import { useContext } from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import ErrorMessage from '../ErrorMessages/ErrorMessage';
import { useSelector } from 'react-redux';




const Header = () => {
  const { username, isAdmin } = useContext(Usercontext)
  const error = useSelector(state => state.error);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };




  return (
    <>
      <header className={styles.header}>
        <div className={styles['logo-container']}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <li className={styles['language-switcher']}>
            <button
              type="button"
              className={styles['language-button']}
              onClick={() => changeLanguage('bg')}
              title="Български"
            >
              🇧🇬
            </button>

            <button
              type="button"
              className={styles['language-button']}
              onClick={() => changeLanguage('en')}
              title="English"
            >
              🇬🇧
            </button>
          </li>
        </div>
        <p>{t('header.welcome')} <span>{username || t('header.guest')}</span></p>




        <nav className={styles.nav}>
          <ul>


            <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/"}>{t('navigation.home')}</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/formations"} >{t('navigation.formations')}</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/weather"} >{t('navigation.weather')}</NavLink> </li>

            {!username && <>
              <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/auth/login"} >{t('navigation.login')}</NavLink> </li>
              <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/auth/register"}>{t('navigation.register')}</NavLink> </li>
            </>
            }
            {username && <>
              <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/gallery"} >{t('navigation.gallery')}</NavLink> </li>
              <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/videos"} >{t('navigation.videos')}</NavLink> </li>

              <li> <NavLink className={({ isActive }) => isActive ? styles['nav-active'] : ''} to={"/auth/logout"} >{t('navigation.logout')}</NavLink> </li>

            </>

            }


          </ul>
        </nav>
      </header>
      {isAdmin && <AdminNavBar />}
      {error && <ErrorMessage />}
    </>
  );
};

export default Header;
