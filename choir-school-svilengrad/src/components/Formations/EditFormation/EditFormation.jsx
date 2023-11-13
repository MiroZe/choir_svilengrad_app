import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "../../../hooks/useForm";
import styles from "../CreateFormation/CreateFormations.module.css";
import { editFormation, getFormationById } from "../../../services/formationServices";
import { useFormErrors } from "../../../hooks/useFormErrors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditFormation = () => {

  const {formationId} = useParams();
  const [initialData, setInitialData] = useState({})

  useEffect ( () => {
    getFormationById(formationId)
    .then(data =>{
      setInitialData(data)
      })
    .catch(err => console.log(err))
  },[formationId]);


  
  const { formValues, onChangeHandler } = useForm({
    formationName: initialData?.formationName || '',
    imageUrl: initialData?.imageUrl || '',
    conductor: initialData?.conductor || '',
    description: initialData?.description || '',
  });
//   console.log(initialData?.conductor);
 console.log(formValues.conductor);

  const { errors, onErrorHandler, isErrors } = useFormErrors({
    formationName: false,
    imageUrl: false,
    conductor: false,
    description: false,
  });

  const onEditFormationHandler = async (e) => {
    e.preventDefault();
    if (!Object.values(errors).some((f) => f !== false)) return;

    await editFormation(formationId, formValues);
  };

  return (

   
   
    <div className={styles["form-container"]}>
      <h1>Edit formation Form</h1>
      {initialData.formationName && 
      <Form onSubmit={onEditFormationHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Formation Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name of Formation"
            name="formationName"
            value={formValues.formationName}
            onChange={onChangeHandler}
            onBlur={(e) => onErrorHandler(e, "5")}
          />
          {errors.formationName && (
            <p className={styles.error}>
              Formation name should be 6 characters at least
            </p>
          )}
          <Form.Label>Formation Picture</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://"
            name="imageUrl"
            value={formValues.imageUrl}
            onChange={onChangeHandler}
            onBlur={(e) => onErrorHandler(e, "", "imagePattern")}
          />
          {errors.imageUrl && (
            <p className={styles.error}>Invalid Image URL!</p>
          )}
          <Form.Label>Formation Conductor Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            name="conductor"
            value={formValues.conductor}
            onChange={onChangeHandler}
            onBlur={(e) => onErrorHandler(e, "6")}
          />
          {errors.conductor && (
            <p className={styles.error}>
              Conductor name should be 6 characters at least
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Formation description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formValues.description}
            onChange={onChangeHandler}
            onBlur={(e) => onErrorHandler(e, "20")}
          />
          {errors.description && (
            <p className={styles.error}>
              Description should be 20 characters at least
            </p>
          )}
        </Form.Group>
        <Button type="submit" variant="secondary" disabled={!isErrors}>
          Save 
        </Button>
        <Button variant="secondary" >
          Cancel 
        </Button>
      </Form> }
    </div>
  
          
  );
};

export default EditFormation;
