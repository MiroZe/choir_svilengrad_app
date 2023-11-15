import { useContext, useEffect, useState } from "react";
import styles from "./FormationDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { deleteFormation, getFormationById } from "../../../services/formationServices";
import SpinnerComp from "../../Spinner/Spinner";
import Button from 'react-bootstrap/Button';
import { Usercontext } from "../../../contexts/UserContext";
import { FormationContext } from "../../../contexts/FormationContext";
import DeleteConfirmationModal from "../../DeleteConfirmationModal/DeleteConformationModal";
import {useNavigate} from 'react-router-dom'


const FormationDetails = () => {
  const { formationId } = useParams();
  
  const [spinner, setSpinner] = useState(true);
  const {isAdmin} = useContext(Usercontext);
  const {formation, setFormationFunction} = useContext(FormationContext);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getFormationById(formationId)
      .then((data) => {
      
        setFormationFunction(data)
         setSpinner(false)
    })
      .catch((err) => console.log(err));
  }, [formationId, setFormationFunction]);


  const deleteClickHandler = async (id) => {
    await deleteFormation(id);
    setModalShow(false)
    navigate('/formations')
    
  
  }

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
        <Button variant="danger" onClick={() => setModalShow(true)}>Delete</Button>
        </div>
        }
      </div>
      <>
        <DeleteConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={formation}
        deleteClickHandler = {deleteClickHandler}
        />
        </>
    </div>
}
    </div>
  );
};

export default FormationDetails;
