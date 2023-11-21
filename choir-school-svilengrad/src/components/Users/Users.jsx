import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Users.module.css'


const Users = () => {

    const [role, setRole] = useState({role:''});

    const roleOnChangeHandler = (e) => {
       
        setRole(e.target.value)
    }

return (
   
    <ListGroup as="ol" numbered>
       
      <ListGroup.Item as="li" className={styles['user-container']}>Cras justo odio
     
      <p className={styles['current']}>Current Role : <span>User</span></p> 

     
      <select name="role" value={role} onChange={roleOnChangeHandler} id='role'>
        <option value="admin">Admin</option>
        <option value="chorister">Chosrister</option>
        <option value="user">User</option>
      </select>
      <button>Change</button>
      
      </ListGroup.Item>
   

  
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
  );


}

export default Users