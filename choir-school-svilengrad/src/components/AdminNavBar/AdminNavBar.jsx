import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './AdminNavBar.module.css'


const AdminNavBar= () => {

return (

<Navbar className={styles['nav-container']} >
        <Container>
          <Navbar.Brand as={Link} to={'/formations/create'}>Formations Create</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand as={Link} to={'/formations/edit'}>Edit Formations </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand as={Link}  to={"/choristers/create"}>Add chorister</Navbar.Brand>
        </Container>
        <Container>
        <Link  to={"/choristers"}>Choristers</Link>
        </Container>
        <Container>
          <Navbar.Brand as={Link}>Upload Notes</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand as={Link}>Upload Arrangiments</Navbar.Brand>
        </Container>
      </Navbar>

)






}

export default AdminNavBar