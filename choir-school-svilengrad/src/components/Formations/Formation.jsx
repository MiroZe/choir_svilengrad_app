import styles from "./Formations.module.css";

import { Link } from "react-router-dom";

const Formation = ({ imageUrl, formationName, description, conductor }) => {
  return (
    <div className={styles.formationCard}>
      <div className={styles["image-container"]}>
        <img className={styles.choirImage} src={imageUrl} alt="Choir" />
      </div>
      <h2 className={styles.formationName}>{formationName}</h2>
      <div className={styles["content"]}>
        <p> {description}</p>
        <p>Conductor: {conductor}</p>
        <Link>Choristers</Link>
        <Link>Gallery</Link>
        <Link>Video</Link>
      </div>
    </div>
  );
};

export default Formation;
