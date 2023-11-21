import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./AdminNavBar.module.css";

const AdminNavBar = () => {
  return (
    <Navbar className={styles["nav-container"]}>
      <Container>
        <Link to={"/formations/create"}>Create Formation</Link>
      </Container>

      <Container>
        <Link to={"/choristers/create"}>Add chorister</Link>
      </Container>
      <Container>
        <Link to={"/choristers"}>Choristers</Link>
      </Container>
      <Container>
        <Link to={"/upload"}>Upload</Link>
      </Container>
      <Container>
        <Link to={"/users"}>Users</Link>
      </Container>
    </Navbar>
  );
};

export default AdminNavBar;
