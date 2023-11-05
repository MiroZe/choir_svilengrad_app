import styles from './Formations.module.css';

import { useState,useEffect } from 'react';
import { getFormations } from '../../services/formationServices';
import Formation from './Formation'



export const Formations = () => {

const [formations,setFormations] = useState([]);

useEffect(()=> {
  getFormations()
  .then(data => {setFormations(data)
    })
     .catch(error => console.log(error));
},[])


return (
    <div className={styles.container}>
       
       {formations.map(formation => <Formation key={formation._id} {...formation} />)}
    
    </div>
)


}

export default Formations