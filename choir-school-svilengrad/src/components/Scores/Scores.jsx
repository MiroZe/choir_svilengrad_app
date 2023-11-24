import { useState,useEffect } from "react"
import { getScores } from "../../services/uploadServices";
import { Link } from "react-router-dom";
import styles from './Scores.module.css'
import ScoreItem from "./ScoreItem";
import { useSelector } from "react-redux"; 





const Scores = () => {

    const [scores,setScores] = useState([]);
    const {formationName,_id} = useSelector((state) => state.formation);

 console.log(formationName);

    useEffect(() => {
        getScores(formationName)
            .then(setScores)

    },[formationName])



return (
   <div className={styles['file-card-container']}>
    {scores.length > 0 && 
        scores.map(score => <ScoreItem  key={score._id} {...score} formationId={_id}/>)
    }
     {scores.length == 0 && 
      <div className={styles['no-content']}>
      <h3>There is no uploaded arrangements for {formationName} yet!</h3>
  <Link to={`/formations/${_id}`} className={styles['back-link']}>Back</Link>

  </div>
    }
   </div>

)


}

export default Scores