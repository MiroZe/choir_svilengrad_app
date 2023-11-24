
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import styles from './Scores.module.css'
import { useContext } from 'react'
import { Usercontext } from '../../contexts/UserContext'






const ScoreItem = (
  {scoreName,scoreUrl,author, formationId,showDeleteModal,_id, }
) => {

const {isAdmin} = useContext(Usercontext);



return (
    <div className={styles['file-container']}>
        
    <div className={styles['img-container']}>
    <img src="https://thumb.mp-farm.com/380097/preview.jpg" alt="score picture" />
    </div>
    <div className={styles['info']}>
    <p>Score Name: <span>{scoreName}</span></p>
    <p>Score Author: <span>{author}</span></p>
    <p>Download: <span><Link to={scoreUrl} target="_blank" rel="noopener noreferrer">Link</Link></span></p>
    <div className={styles['link-cont']}>
    <Link to={`/formations/${formationId}`} className={styles['back-link']}>Back</Link>
    {isAdmin && 
      <Button className={styles['back-link']} variant="danger" onClick={()=> showDeleteModal(_id,scoreName, scoreUrl) } >Delete Score</Button> 
    
    }
    </div>
    </div>
      
  </div>
)


}

export default ScoreItem