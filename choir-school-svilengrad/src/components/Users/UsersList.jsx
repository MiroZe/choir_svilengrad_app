import { useState,useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxErrorState/store";

import styles from './Users.module.css';
import { getAllUsers } from '../../services/userService';
import UserItem from './UserItem';
import logo from '../../assets/SHKOLA_ZNAK.png';




const Users = () => {

    
    const [usersList, setUsersList] = useState([]);
  const dispatch = useDispatch()



    useEffect(()=> {
        try {
            getAllUsers()
                .then(setUsersList)
        } catch (error) {
            dispatch(setError(error.message));
        }

    },[dispatch])

   


return (

    <div className={styles['users-container']}>

      <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Users List</h2>
      </div>
        <ListGroup as="ol" numbered> 

        {usersList.map(user => <UserItem key={user._id} {...user}/>)}

        </ListGroup>

    </div>
   
   
  
  );


}

export default Users