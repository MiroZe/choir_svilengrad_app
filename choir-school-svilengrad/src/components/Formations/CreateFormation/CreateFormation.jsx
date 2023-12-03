import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from '../../../hooks/useForm';
import styles from './CreateFormations.module.css'
import { createFormation } from '../../../services/formationServices';
import { useFormErrors } from '../../../hooks/useFormErrors';
import logo from '../../../assets/SHKOLA_ZNAK.png';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setError } from '../../../reduxStates/store';




const CreateFormation = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

    const { formValues, onChangeHandler } = useForm({
       formationName: '', 
       imageUrl:'', 
       conductor :'', 
       description: ''});
   

    
    const {errors,onErrorHandler, isErrors} = useFormErrors(
      {formationName:false,imageUrl:false,conductor:false,description:false},)
     
     
      
      const onSubmitFormationHandler = async (e) => {
          e.preventDefault();
     
          if((Object.values(errors).some(f => f == true))) {
            
            return
          } 
         
        try {
          await createFormation(formValues);
          navigate('/formations')
          
        } catch (error) {
          dispatch(setError(error.message))
        }

         
          
      }

return  (

    <div className={styles['form-container']}>
      <div className={styles['header']}>
      <img src={logo} alt="" />
<h2>Create formation Form</h2>
      </div>

<Form onSubmit={onSubmitFormationHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Formation Name</Form.Label>
        <Form.Control type="text" placeholder="name of Formation" name='formationName' 
        value={formValues.name} 
        onChange={onChangeHandler}
        onBlur={(e) => onErrorHandler(e,'5')}
        />
         {errors.formationName && <p className={styles.error}>Formation name should be 6 characters at least</p>}
        <Form.Label>Formation Picture</Form.Label>
        <Form.Control type="text" placeholder="https://" name='imageUrl' 
        value={formValues.imageUrl} 
        onChange={onChangeHandler}
        onBlur={(e) => onErrorHandler(e,'','imagePattern' )}
        />
        {errors.imageUrl && <p className={styles.error}>Invalid Image URL!</p>}
        <Form.Label>Formation Conductor Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" name='conductor' 
        value={formValues.conductor} 
        onChange={onChangeHandler}
        onBlur={(e) => onErrorHandler(e,'6' )}
        />
         {errors.conductor && <p className={styles.error}>Conductor name should be 6 characters at least</p>}

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Formation description</Form.Label>
        <Form.Control as="textarea" rows={3} name='description' 
        value={formValues.description}
         onChange={onChangeHandler}
        onBlur={(e) => onErrorHandler(e,'20' )}
         />
         {errors.description && <p className={styles.error}>Description should be 20 characters at least</p>}

      </Form.Group>
      <Button type='submit' variant="warning" disabled={!isErrors}>Create Formation</Button>
      <Button as={Link} to={'/formations'}   variant="primary">Cancel</Button>
    </Form>
    </div>

)

}

export default CreateFormation