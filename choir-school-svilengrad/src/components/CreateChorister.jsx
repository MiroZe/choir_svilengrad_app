import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from '../styles/RegisterForm.module.css' 
import Button from 'react-bootstrap/Button';
import { errorCheck } from '../utils/utils';




const CreateChoristerForm = ()=> {

 
      const [formValues, setFormValues] = useState({
        firstName:'',   
        surName:'',
        lastName: '',
        gender: '',
        schoolName: '',
        grade: '',
        formation : '',
        vocalRanges :''

      });
    
    
      const[errors,setErrors] = useState({
        firstName:'',   
        surName:'',
        lastName: '',
        gender: '',
        schoolName: '',
        grade: '',
        formation : '',
        vocalRanges :''
        
    })
    
    
      const onChangeCreateChoristerFormHandler = (e) => {
       
        setFormValues(state =>({...state, [e.target.name] : e.target.value}));
    
      } 
    
    
       const createChoristerHandler = async (e,formValues)=> {
         e.preventDefault();
         
       
    
       }
      const errCheck = (e,criteria,pattern)=> {
        
      setErrors((state) => ({...state, [e.target.name] : errorCheck(e.target.value, criteria,pattern)}));
    
    
      }
   

    return (
    
      <div className={styles['form-container']}>
    
      <h2>Add Chorister Form</h2>
        <form action="" onSubmit={(e) => createChoristerHandler(e,formValues)}>
        <FloatingLabel
          controlId="floatingfirstName"
          label="First Name"
          className="mb-3"
        >
          <Form.Control type="text" 
          name="firstName" 
          onChange={onChangeCreateChoristerFormHandler} 
          value={formValues.firstName}
          onBlur={(e) => errCheck(e, 3)}/>
          {errors.firstName && <p className="error">First Name should be at least 2 characters long!</p>}
          
          </FloatingLabel>
      

        <FloatingLabel controlId="floatingsurName" label="Surname" className="mb-3">
          <Form.Control type="text"  name='surName' 
          onChange={onChangeCreateChoristerFormHandler}
           value={formValues.surName}
           onBlur={(e) => errCheck(e, 3)}
           />
           {errors.surName && <p className="error">Surname should be 3 characters at least</p>}
        </FloatingLabel>

        <FloatingLabel controlId="floatinglastName" label="Last Name" className="mb-3">
          <Form.Control type="text"  name='lastName' 
          onChange={onChangeCreateChoristerFormHandler}
           value={formValues.lastName}
           onBlur={(e) => errCheck(e, 3)}
           />
           {errors.surName && <p className="error">Last name should be 3 characters at least</p>}
        </FloatingLabel>


          <Form.Select aria-label="Default select example"
          name="gender"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.gender}
           >
             <option>Please choose your gender</option>
            <option value="male">Male</option>
             <option value="female">Female</option>
            </Form.Select> 


            <Form.Select aria-label="Default select example"
            name="schoolName"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.schoolName}
           >
            <option>Please choose the school of the chorister</option>
            <option value="1">Ivan Vazov school</option>
            <option value="2">D-r Petar Beron school</option>
            <option value="3">Hristo Botev school</option>
            <option value="4">Hristo Botev school</option>
            <option value="5">Hristo Popmarkov school</option>
            <option value="6">Lyuben Karavelov school</option>
            <option value="7">Graduated</option>
            </Form.Select> 

            <Form.Select aria-label="Default select example"
          name="grade"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.grade}
           >
             <option>Please choose grade</option>
            <option value="I">I</option>
             <option value="II">II</option>
             <option value="III">III</option>
             <option value="IV">IV</option>
             <option value="V">V</option>
             <option value="VI">VI</option>
             <option value="VII">VII</option>
             <option value="VII">VIII</option>
             <option value="IX">IX</option>
             <option value="X">X</option>
             <option value="XI">XI</option>
             <option value="XII">XII</option>
             <option value="NA">NA</option>
            </Form.Select> 

            <Form.Select aria-label="Default select example"
          name="formation"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.formation}
           >
             <option>Please choose the formation</option>
            <option value="male">Male</option>
             <option value="female">Female</option>
            </Form.Select> 
    
        <Button variant="success" type='submit'>Log in</Button>
        </form>
        </div> 
    )
    
    
    }
    
    
    export default CreateChoristerForm




