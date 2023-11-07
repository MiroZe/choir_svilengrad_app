import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './AdminNavBar.module.css'


const AdminNavBar= () => {

return (

<Navbar className={styles['nav-container']} >
        <Container>
          <Navbar.Brand >
        <Link to={'/formations/create'}>Formations Create</Link>
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="#home">Edit Formations </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="#home">
          <Link  to={"/choristers/create"}>Add chorister</Link>
          </Navbar.Brand>
        </Container>
        <Container>
        <Link  to={"/choristers"}>Choristers</Link>
        </Container>
        <Container>
          <Navbar.Brand href="#home">Upload Notes</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="#home">Upload Arrangiments</Navbar.Brand>
        </Container>
      </Navbar>

)






}

export default AdminNavBar