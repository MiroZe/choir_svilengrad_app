import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./AdminNavBar.module.css";
import { useTranslation } from 'react-i18next';

const AdminNavBar = () => {

const { t } = useTranslation();

  return (
    
     
  <Navbar className={styles["nav-container"]}>
    <Container>
      <Link to={"/formations/create"}>{t('admin.createFormation')}</Link>
    </Container>

    <Container>
      <Link to={"/choristers/create"}>{t('admin.addChorister')}</Link>
    </Container>

    <Container>
      <Link to={"/upload"}>{t('admin.uploadFiles')}</Link>
    </Container>

    <Container>
      <Link to={"/videos/upload"}>{t('admin.addVideoLink')}</Link>
    </Container>

    <Container>
      <Link to={"/choristers"}>{t('admin.choristers')}</Link>
    </Container>

    <Container>
      <Link to={"/taxes"}>{t('admin.taxes')}</Link>
    </Container>

    <Container>
      <Link to={"/users"}>{t('admin.users')}</Link>
    </Container>
  </Navbar>
);
    
  
};

export default AdminNavBar;
