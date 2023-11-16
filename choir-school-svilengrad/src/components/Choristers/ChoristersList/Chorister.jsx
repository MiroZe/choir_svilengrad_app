import Image from "react-bootstrap/Image";
import styles from "./Chorister.module.css";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';





const Chorister = ({ index, firstName, lastName, formations, imageUrl, _id , showDeleteModal}) => {

 


  return (
    <>
    <tr className={styles['table-row']}>
      <td>{index + 1}</td>
      <td>
        <div className={styles["image-container"]}>
          <Image src={imageUrl} rounded />
        </div>
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{formations.join(", ")}</td>
      <td>
      <Link to={`/choristers/${_id}`}><Button variant="info">Info</Button></Link>
      <Button as={Link} to={`/choristers/${_id}/edit`} variant="warning">Edit</Button>
      <Button variant="danger" onClick={() => showDeleteModal(_id, firstName,lastName)}>Delete</Button> 
      </td>
   
    </tr>
   
    </>
  );
};

export default Chorister;
