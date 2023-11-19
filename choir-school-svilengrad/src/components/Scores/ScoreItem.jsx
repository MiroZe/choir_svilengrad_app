
import { Link } from 'react-router-dom'
import styles from './Scores.module.css'


const ScoreItem = (
  {scoreName,scoreUrl,author, formationId}
) => {

return (
    <div className={styles['file-container']}>
        
    <div className={styles['img-container']}>
    <img src="https://thumb.mp-farm.com/380097/preview.jpg" alt="score picture" />
    </div>
    <div className={styles['info']}>
    <p>Score Name: <span>{scoreName}</span></p>
    <p>Score Author: <span>{author}</span></p>
    <p>Download: <span><Link to={scoreUrl} target="_blank" rel="noopener noreferrer">Link</Link></span></p>
    <Link to={`/formations/${formationId}`} className={styles['back-link']}>Back</Link>
    </div>
  </div>
)


}

export default ScoreItem