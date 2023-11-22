import { useState,useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxErrorState/store";
import {useNavigate } from "react-router-dom"
import { changeUserRole } from "../../services/userService";

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
         
          navigate('/login')
          dispatch(setError(`${error.message}Please log in!`));
        }
      };
    
      fetchData();
    }, [dispatch,navigate]);

    const changeRoleClickHandler = async (id,newRole) => {

      
     const upadatedUser =  await changeUserRole(id,newRole);
     setUsersList(usersList => usersList.map(user => (user._id === upadatedUser._id ?{...user,role:upadatedUser.role}: user)))
      
 
     }

  


return (

    <div className={styles['users-container']}>

      <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Users List</h2>
      </div>
        <ListGroup as="ol" numbered> 

        {usersList.map(user => <UserItem key={user._id} {...user} changeRoleClickHandler={changeRoleClickHandler}/>)}

        </ListGroup>

    </div>
   
   
  
  );


}

export default Users