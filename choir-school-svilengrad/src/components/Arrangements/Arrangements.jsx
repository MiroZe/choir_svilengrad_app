import { useState,useEffect } from "react"
import { getArrangements } from "../../services/uploadServices";
import { Link } from "react-router-dom";
import styles from '../Scores/Scores.module.css'
import ScoreItem from "./ArrangementItem";
import { useSelector } from "react-redux"; 




const Arrangements = () => {

    const [arrangements,setArrangements] = useState([]);


    const formation = useSelector((state) => state.formation);
   
 

    useEffect(() => {
        getArrangements(formation.formationName)
            .then(setArrangements)

    },[formation.formationName])



return (
   <div className={styles['file-card-container']}>
    {arrangements.length > 0 && 
        arrangements.map(arrangement => <ScoreItem  key={arrangement._id} {...arrangement} formationId={formation._id}/>)
    }
     {arrangements.length == 0 && 
     <div className={styles['no-content']}>
        <h3>There is no uploaded arrangements for {formation.formationName} yet!</h3>
    <Link to={`/formations/${formation._id}`} className={styles['back-link']}>Back</Link>

    </div>
    }
   </div>

)


}

export default Arrangements