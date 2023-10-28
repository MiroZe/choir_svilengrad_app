  import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from '../styles/RegisterForm.module.css'

import Button from 'react-bootstrap/Button';


const RegisterForm = ()=> {



return (

  <div className={styles['form-container']}>

  <h2>Register Form</h2>
    <form action="
    ">
    <FloatingLabel
      controlId="floatingInput"
      label="Email"
      className="mb-3"
    >
      <Form.Control type="username" placeholder="name@example.com" />
    </FloatingLabel>
    <FloatingLabel
      controlId="floatingInput"
      label="Username"
      className="mb-3"
    >
      <Form.Control type="username" placeholder="johnDoe" />

    </FloatingLabel>

    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>

    <FloatingLabel controlId="floatingPassword" label="Repeat password" className="mb-3">
      <Form.Control type="re-password" placeholder="Repeat password" />
    </FloatingLabel>

    <Form.Select aria-label="Default select example">
      <option>Please choose your gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      
    </Form.Select>
    <br />
    <Button variant="success">Submit</Button>
    </form>
    </div>


    
)


}


export default RegisterForm