import { useContext, useEffect, useState } from "react";
import styles from "./FormationDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { getFormationById } from "../../../services/formationServices";
import SpinnerComp from "../../Spinner/Spinner";
import Button from 'react-bootstrap/Button';
import { Usercontext } from "../../../contexts/UserContext";
import { FormationContext } from "../../../contexts/FormationContext";


const FormationDetails = () => {
  const { formationId } = useParams();
  
  const [spinner, setSpinner] = useState(true);
  const {isAdmin} = useContext(Usercontext);
  const {formation, setFormationFunction} = useContext(FormationContext)

  useEffect(() => {
    getFormationById(formationId)
      .then((data) => {
      
        //setFormation(data);
        setFormationFunction(data)
         setSpinner(false)
    })
      .catch((err) => console.log(err));
  }, [formationId,setFormationFunction]);

  return (
    <div className={styles['card-container']}>
        {spinner &&  <SpinnerComp/>}
  
     {!spinner && 
    <div className={styles["card"]}>
      <img src={formation.imageUrl} alt="Choir Formation Image" />
      <div className={styles["card-content"]}>
      <div className={styles["overlay"]}>
        <Link to={'/formations'}>Back to formations</Link>
      </div>
        <h2>{formation.formationName}</h2>
        <p>{formation.description}</p>
        <p>Conductor:{formation.conductor}</p>
        <div className={styles["links"]}>
          <a href="#gallery">Gallery</a>
          <a href="#video">Video</a>
          <Link to={'/choristers'}>Choristers</Link> 
        </div>
        {isAdmin && 
        <div className={styles['admin-actions']}>
        <Button as={Link} to={`/formations/${formation._id}/edit`} variant="warning">Edit</Button>
        <Button variant="danger">Delete</Button>
        </div>
        }
      </div>
    </div>
}
    </div>
  );
};

export default FormationDetails;
