
import { Link } from 'react-router-dom'
import styles from '../Scores/Scores.module.css'
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { Usercontext } from "../../contexts/UserContext";

const ArrangementItem = (
  {arrangementName,
    arrangementUrl,
    author,
     formationId,
     showDeleteModal,
     _id,}
) => {
  const { isAdmin } = useContext(Usercontext);
return (
    <div className={styles['file-container']}>
        
    <div className={styles['img-container']}>
    <img src="https://img.freepik.com/premium-vector/cloud-download-music-with-vinyl-tune-note-music-sound-cloud-icon-white-isolated_138676-541.jpg" alt="score picture" />
    </div>
    <div className={styles['info']}>
    <p>Arrangement Name: <span>{arrangementName}</span></p>
    <p>Arrangement Author: <span>{author}</span></p>
    <p>Download: <span><Link to={arrangementUrl} target="_blank" rel="noopener noreferrer">Link</Link></span></p>
    <div className={styles["link-cont"]}>
    <Link to={`/formations/${formationId}`} className={styles['back-link']}>Back</Link>
    {isAdmin && (
            <Button
              className={styles["back-link"]}
              variant="danger"
              onClick={() => showDeleteModal(_id, arrangementName, arrangementUrl)}
            >
              Delete Arrangement
            </Button>
          )}
          </div>
    </div>
  </div>
)


}

export default ArrangementItem