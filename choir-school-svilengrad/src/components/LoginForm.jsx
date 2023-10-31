import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from '../styles/RegisterForm.module.css' 
import Button from 'react-bootstrap/Button';
import { errorCheck } from '../utils/utils';
import { userLogin } from '../services/userService';




const LoginForm = ()=> {

 
      const [formValues, setFormValues] = useState({
        username:'',   
        password:'',
        
      });
    
    
      const[errors,setErrors] = useState({
        username: false,
        password:false,
        
    })
    
    
      const onChangeLoginFormHandler = (e) => {
       
        setFormValues(state =>({...state, [e.target.name] : e.target.value}));
    
      } 
    
    
      const loginUserHandler = async (e,{username,password})=> {
        e.preventDefault();
        const userData = {username,password};
    
         const loggedUser = await userLogin(userData);
         console.log(loggedUser);
       
    
      }
      const errCheck = (e,criteria,pattern)=> {
        
      setErrors((state) => ({...state, [e.target.name] : errorCheck(e.target.value, criteria,pattern)}));
    
    
      }
   

    return (
    
      <div className={styles['form-container']}>
    
      <h2>Login Form</h2>
        <form action="" onSubmit={(e) => loginUserHandler(e,formValues)}>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="username" 
          name="username" 
          onChange={onChangeLoginFormHandler} 
          value={formValues.username}
          onBlur={(e) => errCheck(e, 5)}/>
          {errors.username && <p className="error">Username should be at least 5 characters long!</p>}
          
          </FloatingLabel>
      

        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password"  name='password' 
          onChange={onChangeLoginFormHandler}
           value={formValues.password}
           onBlur={(e) => errCheck(e, '6')}
           />
           {errors.password && <p className="error">Password should be 6 characters at least</p>}
        </FloatingLabel>
    
        <Button variant="success" type='submit'>Log in</Button>
        </form>
        </div> 
    )
    
    
    }
    
    
    export default LoginForm




