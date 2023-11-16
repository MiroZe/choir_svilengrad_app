import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { deleteChorister, getAllChoristers } from '../../../services/choristersServices';
import Chorister from './Chorister';
import styles from "./Chorister.module.css";
import DeleteConfirmationModal from '../../DeleteConfirmationModal/DeleteConformationModal';
import logo from '../../../assets/SHKOLA_ZNAK.png'
import { useNavigate } from 'react-router-dom';





const ChoristerList =() => {
  
  const [choristers, setChoristers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState({});
  
  const navigate = useNavigate()


useEffect(() => {
    getAllChoristers().then(result => setChoristers(result))
},[])

const showDeleteModal = (_id,firstName,lastName) => {
  
  setUserData({ _id, firstName, lastName })
  setModalShow(true);
  
  
  
  

}




const deleteClickHandler = async (id) => {
 
    await deleteChorister(id);
    setModalShow(false)
   setChoristers(state => [...state.filter(ch=> ch._id !== id )])
    navigate('/choristers')
    

} 



return (
        <div className={styles['table-container']}>
          <div className={styles['title']}>
          <img src={logo} alt="" />
        <h2>List of choristers</h2>
        
          </div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Formation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {choristers.map( (c, index) => <Chorister key={c._id} {...c} index={index} showDeleteModal={showDeleteModal} />)}
          </tbody>
        </Table>
        <>
        <DeleteConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={userData}
        deleteClickHandler = {deleteClickHandler}
        />
        </>
        </div>
)

}

export default ChoristerList