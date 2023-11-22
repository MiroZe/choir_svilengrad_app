import { useState,useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxErrorState/store";
import {useNavigate } from "react-router-dom"

import styles from './Users.module.css';
import { getAllUsers } from '../../services/userService';
import UserItem from './UserItem';
import logo from '../../assets/SHKOLA_ZNAK.png';




const Users = () => {

    
    const [usersList, setUsersList] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getAllUsers();
          setUsersList(result);
        } catch (error) {
          
          localStorage.removeItem('user')
          console.log('Attempting to navigate to /login');
          navigate('/login')
          dispatch(setError(`${error.message}Please log in!`));
        }
      };
    
      fetchData();
    }, [dispatch,history]);

   


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