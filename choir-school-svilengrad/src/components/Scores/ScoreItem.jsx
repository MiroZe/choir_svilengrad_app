
import styles from './Scores.module.css'


const ScoreItem = () => {

return (
    <div className={styles['scores-container']}>
        
    <div className={styles['img-container']}>
    <img src="https://thumb.mp-farm.com/380097/preview.jpg" alt="score picture" />
    </div>
    <div className={styles['info']}>
    <p>Score Name: <span>1</span></p>
    <p>Score Author: <span>2</span></p>
    <p>Creator: <span>3</span></p>
   
    </div>
  </div>
)


}

export default ScoreItem