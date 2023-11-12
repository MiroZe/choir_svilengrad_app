import { Link } from "react-router-dom";
import styles from "./Formations.module.css";
import Button from 'react-bootstrap/Button';


const Formation = ({ imageUrl, formationName,_id}) => {
  return (
    <div className={styles.formationCard}>
      <div className={styles["image-container"]}>
        <img className={styles.choirImage} src={imageUrl} alt="Choir" />
      </div>
      <h2 className={styles.formationName}>{formationName}</h2>
      {/* <div className={styles["content"]}>
        <p> {description}</p>
        <p>Conductor: {conductor}</p>
        <Link>Choristers</Link>
        <Link>Gallery</Link>
        <Link>Video</Link>
      </div> */}
      <Button as={Link} to={`/formations/${_id}`} variant="secondary">Details</Button>
    </div>
  );
};

export default Formation;
