import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Users.module.css';



const UserItem = ({
    email, role, username
}) => {

    const [roleSelect, setRole] = useState({role:''});
    const roleOnChangeHandler = (e) => {
       
        setRole(e.target.value)
    }

    return (
             
      <ListGroup.Item as="li" className={styles['user-container']}>{email}
     
      <p className={styles['current']}>Username : <span>{username}</span></p> 
      <p className={styles['current']}>Current Role : <span>{role}</span></p> 

     
      <select name="role" value={roleSelect} onChange={roleOnChangeHandler} id='role'>
        <option value="admin">Admin</option>
        <option value="chorister">Chosrister</option>
        <option value="user">User</option>
      </select>
      <button>Change</button>
      
   
      </ListGroup.Item>

 
  
    )


}

export default UserItem