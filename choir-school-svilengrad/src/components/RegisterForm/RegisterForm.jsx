import { useState, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './RegisterForm.module.css'
import {Usercontext} from '../../contexts/UserContext'
import Button from 'react-bootstrap/Button';
import { userRegister } from '../../services/userService';
import { errorCheck } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/SHKOLA_ZNAK.png';
import { useDispatch } from 'react-redux';

import { setError } from "../../reduxErrorState/store";




const RegisterForm = ()=> {

  const {setUserFunction} = useContext(Usercontext)
  const navigate = useNavigate();
  const dispatch = useDispatch()



  const [formValues, setFormValues] = useState({
    username:'',
    email :'',
    password:'',
    rePassword :''
  });


  const[errors,setErrors] = useState({
    username: false,
    email :false,
    password:false,
    rePassword :false
})


  const onChangeRegisterFormHandler = (e) => {
   
    setFormValues(state =>({...state, [e.target.name] : e.target.value}));

  } 


  const registerUserHandler = async (e,{username,email,password,rePassword})=> {
    e.preventDefault();
    const userData = {username,email,password,rePassword};

    try {
      const registeredUser = await userRegister(userData);
      setUserFunction(registeredUser);
      navigate('/')
      
    } catch (error) {
   
      dispatch(setError(error.message));
    }


  }
  const errCheck = (e,criteria,pattern)=> {
    
  setErrors((state) => ({...state, [e.target.name] : errorCheck(e.target.value, criteria,pattern)}));


  }

  const passCheker = (e) => {

    setErrors((state) => ({...state, [e.target.name]: e.target.value !== formValues.password}))
    
  }
 

return (

  <div className={styles['form-container']}>

<div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Register Form</h2>
      </div>

    <form action="" onSubmit={(e) => registerUserHandler(e,formValues)}>
    <FloatingLabel
      controlId="floatingInput"
      label="Username"
      className="mb-3"
    >
      <Form.Control type="username" 
      name="username" 
      onChange={onChangeRegisterFormHandler} 
      value={formValues.username}
      onBlur={(e) => errCheck(e, 5)}/>
      {errors.username && <p className="error">Username should be at least 5 characters long!</p>}
      
      </FloatingLabel>
    <FloatingLabel
      controlId="floatingInput"
      label="Email"
      className="mb-3"
    >
      <Form.Control type="email" name='email'
       onChange={onChangeRegisterFormHandler} 
       value={formValues.email}
       onBlur={(e) => errCheck(e, '', 'emailPattern')}/>
      {errors.email && <p className="error">Invalid email!</p>}
             
    </FloatingLabel>

   

    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
      <Form.Control type="password"  name='password' 
      onChange={onChangeRegisterFormHandler}
       value={formValues.password}
       onBlur={(e) => errCheck(e, '6')}
       />
       {errors.password && <p className="error">Password should be 6 characters at least</p>}
    </FloatingLabel>

    <FloatingLabel controlId="floatingPassword" label="Repeat password" className="mb-3">
      <Form.Control type="password" name='rePassword' 
      onChange={onChangeRegisterFormHandler} 
      value={formValues.rePassword}
      onBlur={(e) => passCheker(e) }/>
      {errors.rePassword && <p className="error">Passwords mismatch!</p>}
    </FloatingLabel>

   
 
    <Button variant="success" type='submit'>Submit</Button>
    </form>
    </div>


    
)


}


export default RegisterForm