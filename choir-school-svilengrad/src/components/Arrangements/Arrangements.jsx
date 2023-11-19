import { useState,useEffect,useContext } from "react"
import { getArrangements } from "../../services/uploadServices";
import styles from '../Scores/Scores.module.css'
import ScoreItem from "./ArrangementItem";
import { FormationContext } from "../../contexts/FormationContext";




const Arrangements = () => {

    const [arrangements,setArrangements] = useState([]);
    const {formationName, formationId} = useContext(FormationContext);

 

    useEffect(() => {
        getArrangements(formationName)
            .then(setArrangements)

    },[formationName])



return (
   <div className={styles['file-card-container']}>
    {arrangements.length > 0 && 
        arrangements.map(arrangement => <ScoreItem  key={arrangement._id} {...arrangement} formationId={formationId}/>)
    }
     {arrangements.length == 0 && 
     <>
        <h3>There is no uploaded arrangements for {formationName} yet!</h3>
    </>
    }
   </div>

)


}

export default Arrangements