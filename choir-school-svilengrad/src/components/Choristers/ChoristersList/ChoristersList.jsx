import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { deleteChorister, getAllChoristers } from '../../../services/choristersServices';
import Chorister from './Chorister';
import styles from "./Chorister.module.css";
import DeleteConfirmationModal from '../../DeleteConfirmationModal/DeleteConformationModal';
import logo from '../../../assets/SHKOLA_ZNAK.png'
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../reduxStates/store';
import { useDispatch } from 'react-redux';
import SearchBar from '../../SearchBar/SearchBar';
import { useSearch } from '../../../hooks/useSearch';





const ChoristerList =() => {
  
  const [choristers, setChoristers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch()


useEffect(() => {
  getAllChoristers()
  .then(result => setChoristers(result))
  .catch(error => {
   
    dispatch(setError(error.message))
}) 
  }
, [dispatch]);


const {search, updateSearchValue, searchValue} = useSearch(choristers);


const showDeleteModal = (_id,firstName,lastName) => {
  
  setUserData({ _id, firstName, lastName })
  setModalShow(true);
  

}


const deleteClickHandler = async (id) => {
 
  try {
    await deleteChorister(id);
    setModalShow(false)
    setChoristers(state => [...state.filter(ch=> ch._id !== id )])
     navigate('/choristers')
    
  } catch (error) {
    dispatch(setError(error.message))
  }
    

} 

const sortHandler = (criteria) => {
  
  if(criteria === 'formations') {
    setChoristers(c => [...c].sort((a,b)=> a[criteria][0].localeCompare(b[criteria][0])))
  }else {

    setChoristers(c => [...c.sort((a,b)=> a[criteria].localeCompare(b[criteria]))])
  }
 


}



return (
        <div className={styles['table-container']}>
          <div className={styles['title']}>
          <img src={logo} alt="" />
        <h2>List of choristers</h2>
        <SearchBar updateSearchValue={updateSearchValue} searchValue={searchValue}/>
          </div>
        <Table  bordered striped responsive="sm">
          <thead>
            <tr>
              <th className={styles['numbers']} >#</th>
              <th className={styles['td-img']}>Image</th>
              <th onClick={() => sortHandler('firstName')}>First Name <i className="fa-solid fa-arrow-down-wide-short"></i></th>
              <th onClick={() => sortHandler('lastName')}>Last Name <i className="fa-solid fa-arrow-down-wide-short"></i></th>
              <th onClick={() => sortHandler('formations')}>Formation <i className="fa-solid fa-arrow-down-wide-short"></i></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {search.map( (c, index) => <Chorister key={c._id} {...c} index={index} showDeleteModal={showDeleteModal} />)}
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