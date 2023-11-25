import { useState,useEffect } from "react"
import { getArrangements,deleteArrangement } from "../../services/uploadServices";
import { Link,useNavigate } from "react-router-dom";
import styles from '../Scores/Scores.module.css'
import ScoreItem from "./ArrangementItem";
import { useSelector } from "react-redux"; 
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConformationModal'
import { setError } from '../../reduxStates/store';
import { useDispatch } from 'react-redux';



const Arrangements = () => {

    const [arrangements,setArrangements] = useState([]);
    const {formationName,_id} = useSelector((state) => state.formation);

    const [arrangementData, setArrangementData] = useState({})

    const formation = useSelector((state) => state.formation);
    const dispatch = useDispatch()
    const navigate = useNavigate();
const [modalShow, setModalShow] = useState(false);
 

    useEffect(() => {
        getArrangements(formationName)
            .then(setArrangements)

    },[formationName])

    const showDeleteModal = (_id,firstName,arrangementUrl) => {
  
        setArrangementData({ _id, firstName,arrangementUrl})
        setModalShow(true);
        
      }


      const deleteClickHandler = async (arrangementId, fileUrl) => {
 
        try {
        
        await deleteArrangement(arrangementId, fileUrl);
        setArrangements(state => state.filter(x => x._id !== arrangementId))
         setModalShow(false);
         navigate(`/formations/${_id}/arrangements`)
          
        } catch (error) {
          dispatch(setError(error.message))
        }
        
      }


return (
   <div className={styles['file-card-container']}>
    {arrangements.length > 0 && 
        arrangements.map(arrangement => <ScoreItem  key={arrangement._id} {...arrangement} formationId={formation._id} showDeleteModal={showDeleteModal}/>)
    }
     {arrangements.length == 0 && 
     <div className={styles['no-content']}>
        <h3>There is no uploaded arrangements for {formation.formationName} yet!</h3>
    <Link to={`/formations/${formation._id}`} className={styles['back-link']}>Back</Link>

    </div>
    }
    <>
        <DeleteConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={arrangementData}
        deleteClickHandler = {deleteClickHandler}
        />
        </>
   </div>

)


}

export default Arrangements