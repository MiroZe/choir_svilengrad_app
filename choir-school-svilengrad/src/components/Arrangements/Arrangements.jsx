import { useState,useEffect } from "react"
import { getArrangements } from "../../services/uploadServices";
import styles from '../Scores/Scores.module.css'
import ScoreItem from "./ArrangementItem";
import { useSelector } from "react-redux"; 




const Arrangements = () => {

    const [arrangements,setArrangements] = useState([]);


    const formation = useSelector((state) => state.formation);
    console.log(formation);
 

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
     <>
        <h3>There is no uploaded arrangements for {formation.formationName} yet!</h3>
    </>
    }
   </div>

)


}

export default Arrangements