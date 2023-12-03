import styles from './Formations.module.css';
import { useState,useEffect } from 'react';
import { getFormations } from '../../services/formationServices';
import Formation from './Formation'
import { useDispatch } from 'react-redux';
import { setError } from '../../reduxStates/store';



export const Formations = () => {

const [formations,setFormations] = useState([]);
const dispatch = useDispatch();


useEffect(()=> {
  getFormations()
  .then(data => {setFormations(data)
    })
     .catch(error => dispatch(setError(error.message)));
},[dispatch])



 


return (
    <div className={styles.container}>
       
       {formations.map(formation => <Formation key={formation._id} {...formation} />)}
    
       
    </div>
)


}

export default Formations