import { useState,useEffect,useContext } from "react"
import { getScores } from "../../services/uploadServices";
import styles from './Scores.module.css'
import ScoreItem from "./ScoreItem";
import { FormationContext } from "../../contexts/FormationContext";




const Scores = () => {

    const [scores,setScores] = useState([]);
    const {formationName, formationId} = useContext(FormationContext);

 

    useEffect(() => {
        getScores(formationName)
            .then(setScores)

    },[formationName])



return (
   <div className={styles['file-card-container']}>
    {scores.length > 0 && 
        scores.map(score => <ScoreItem  key={score._id} {...score} formationId={formationId}/>)
    }
     {scores.length == 0 && 
     <>
        <h3>There is no uploaded scores for {formationName} yet!</h3>
    </>
    }
   </div>

)


}

export default Scores