import { useContext, useEffect, useState } from "react";
import styles from "./FormationDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { deleteFormation, getFormationById } from "../../../services/formationServices";
import SpinnerComp from "../../Spinner/Spinner";
import Button from 'react-bootstrap/Button';
import { Usercontext } from "../../../contexts/UserContext";
import DeleteConfirmationModal from "../../DeleteConfirmationModal/DeleteConformationModal";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
  import { setError, setFormation } from '../../../reduxStates/store';



const FormationDetails = () => {
  const { formationId } = useParams();
  
  const [spinner, setSpinner] = useState(true);
  const {isAdmin, isChorister, isOnlyUser} = useContext(Usercontext);
  const [modalShow, setModalShow] = useState(false);
  


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formation = useSelector((state) => state.formation);
  

  useEffect(() => {
    getFormationById(formationId)
      .then((data) => {
      
        dispatch(setFormation(data));
       
         setSpinner(false)
    })
      .catch((err) =>dispatch(setError(err.message)));
  }, [formationId,dispatch]);


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
          {isOnlyUser && 
          <Link to={'/gallery'}>Gallery</Link>}
          {isChorister && (<>
          <Link to={`/formations/${formation._id}/scores`} className={styles['scores']}>Scores</Link>
          <Link to={`/formations/${formation._id}/arrangements`} className={styles['arrangements']}>Arrangements</Link>
          <Link to={'/choristers'} className={styles['choristers']}>Choristers</Link> 
          </>)}
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
