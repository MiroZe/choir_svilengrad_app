import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from '../../hooks/useForm';
import styles from './CreateFormations.module.css'
import { createFormation } from '../../services/formationServices';

const CreateFormation = () => {


    const { formValues, onChangeHandler } = useForm({ formationName: '', imageUrl:'', conductor :'', description: ''});


    const onSubmitFormationHandler = async (e) => {
        e.preventDefault()
        const result = await createFormation(formValues);
        console.log(result);
    }

return  (

    <div className={styles['form-container']}>
<h1>Create formation Form</h1>

<Form onSubmit={onSubmitFormationHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Formation Name</Form.Label>
        <Form.Control type="text" placeholder="name of Formation" name='formationName' value={formValues.name} onChange={onChangeHandler}/>
        <Form.Label>Formation Picture</Form.Label>
        <Form.Control type="text" placeholder="https://" name='imageUrl' value={formValues.imageUrl} onChange={onChangeHandler}/>
        <Form.Label>Formation Conductor Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" name='conductor' value={formValues.conductor} onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Formation description</Form.Label>
        <Form.Control as="textarea" rows={3} name='description' value={formValues.description} onChange={onChangeHandler}/>
      </Form.Group>
      <Button type='submit' variant="secondary">Create Formation</Button>
    </Form>
    </div>

)

}

export default CreateFormation