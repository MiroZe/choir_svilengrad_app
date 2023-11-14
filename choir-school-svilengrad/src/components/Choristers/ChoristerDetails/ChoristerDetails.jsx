import { useEffect, useState } from "react";
import styles from "./ChoristerDetails.module.css";
import Button from "react-bootstrap/Button";
import { getOneChorister } from "../../../services/choristersServices";
import { useParams,Link } from "react-router-dom";
import SpinnerComp from "../../Spinner/Spinner";

const ChoristerDetail = () => {

    const {choristerId} = useParams();
  const [spinner, setSpinner] = useState(true);

   


    const [chorister, setChorister] = useState({});

    useEffect(() => {
        getOneChorister(choristerId)
        .then(data => {
          setChorister(data)
          setSpinner(false)})
        .catch(err => console.log(err))
    },[choristerId])

    
   


  return (

    
    <div className={styles["chorister-card"]}>
      {spinner && <SpinnerComp/>}

      {!spinner && 
      <>
      <img
        src={chorister?.imageUrl}
        alt="Profile Image"
        className={styles["chorister-image"]}
      />
      <div className={styles['chorister-details']}>
        
        <div className={styles['names']}>
        <p >{chorister?.firstName}</p>
        <p >{chorister?.surName}</p>
        <p >{chorister?.lastName}</p>
        </div>
        <div className={styles['info']}>
        <p>School name: <span>{chorister?.schoolName}</span></p>
        <p>Grade: <span>{chorister?.grade}</span></p>
        <p>Formation: <span>{chorister?.formations.join(',').toUpperCase()}</span></p>
        <p>Gender: <span>{chorister?.gender}</span></p>
        <p>Vocal Range: <span>{chorister?.vocalRange}</span></p>
        </div>
      </div>
      <Button as={Link} to={'/choristers'} variant="secondary">Back</Button>
      </>
}
    </div>
    
  );
};

export default ChoristerDetail;
