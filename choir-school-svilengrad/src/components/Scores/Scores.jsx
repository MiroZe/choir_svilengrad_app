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
   <div className={styles['scores-container']}>
        {scores.map(score => <ScoreItem  key={score._id} {...score} formationId={formationId}/>)}

   </div>

)


}

export default Scores