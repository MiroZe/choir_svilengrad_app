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
        <Link to={"/upload"}>Upload Files</Link>
      </Container>

      <Container>
        <Link to={"/videos/upload"}>Add Video Link</Link>
      </Container>

      <Container>
        <Link to={"/choristers"}>Choristers</Link>
      </Container>

      <Container>
        <Link to={"/taxes"}>Taxes</Link>
      </Container>

      <Container>
        <Link to={"/users"}>Users</Link>
      </Container>
    </Navbar>
  );
};

export default AdminNavBar;
