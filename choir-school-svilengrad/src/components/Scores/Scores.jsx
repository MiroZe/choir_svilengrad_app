import { useState,useEffect } from "react"
import { deleteScore, getScores } from "../../services/uploadServices";
import { Link, useNavigate } from "react-router-dom";
import styles from './Scores.module.css'
import ScoreItem from "./ScoreItem";
import { useSelector } from "react-redux"; 
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConformationModal'
import { setError } from '../../reduxStates/store';
import { useDispatch } from 'react-redux';




const Scores = () => {

    const [scores,setScores] = useState([]);
    const {formationName ='',_id = ''} = useSelector((state) => state.formation || {});
    const [scoreData, setScoreData] = useState({});
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);

   
   



    useEffect(() => {
        getScores(formationName)
            .then(data => {
            
              setScores(data)
            })
            .catch(error => dispatch(setError(error.message)))

    },[formationName,dispatch,])


    const showDeleteModal = (_id,firstName,scoreUrl) => {
  
        setScoreData({ _id, firstName,scoreUrl})
        setModalShow(true);
        
      }


    const deleteClickHandler = async (scoreId, fileUrl) => {
 
        try {
        
        await deleteScore(scoreId, fileUrl);
         setScores(state => state.filter(x => x._id !== scoreId))
         setModalShow(false);
         navigate(`/formations/${_id}/scores`)
          
        } catch (error) {
          dispatch(setError(error.message))
        }
        
      }



return (
   <div className={styles['file-card-container']}>
   
    {scores.length > 0 && 
        scores.map(score => <ScoreItem  key={score._id} {...score} formationId={_id} showDeleteModal={showDeleteModal}/>)
    }
     {scores.length == 0 && 
      <div className={styles['no-content']}>
      <h3>There is no uploaded arrangements for {formationName} yet!</h3>
  <Link to={`/formations/${_id}`} className={styles['back-link']}>Back</Link>

  </div>
    }

<>
        <DeleteConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={scoreData}
        deleteClickHandler = {deleteClickHandler}
        />
        </>
   </div>

)


}

export default Scores