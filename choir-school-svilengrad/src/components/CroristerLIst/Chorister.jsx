import Image from "react-bootstrap/Image";
import styles from "./Chorister.module.css";
import Button from 'react-bootstrap/Button';

const Chorister = ({ index, firstName, lastName, formations, imageUrl }) => {
  return (
    <tr className={styles['table-row']}>
      <td>{index + 1}</td>
      <td>
        <div className={styles["image-container"]}>
          <Image src={imageUrl} rounded />
        </div>
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{formations.join("")}</td>
      <td>
      <Button variant="info">Info</Button>
      <Button variant="warning">Edit</Button>
      <Button variant="danger">Delete</Button> 
      
      </td>
    </tr>
  );
};

export default Chorister;
