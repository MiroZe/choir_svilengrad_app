import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './CreateChorister.module.css' 
import { errorCheck } from '../../../utils/utils';
import { uploadPictureService } from '../../../services/uploadServices';
import { createChorister } from '../../../services/choristersServices';
import logo from '../../../assets/SHKOLA_ZNAK.png';
import { useNavigate } from 'react-router-dom';





const CreateChoristerForm = ()=> {

  const navigate = useNavigate()

 
      const [formValues, setFormValues] = useState({
        firstName:'',   
        surName:'',
        lastName: '',
        gender: '',
        schoolName: '',
        grade: '',
        vocalRange :'',
        

      });

      const [formations, setFormations] = useState( {
        littleOnes: false,
        childrensChoir: false,
        burdenis: false
      });

      const[imageUrl, setImageUrl] = useState('')
    
    
      const[errors,setErrors] = useState({
        firstName:'',   
        surName:'',
        lastName: '',
        gender: '',
        schoolName: '',
        grade: '',
        formation : '',
        vocalRange :''
        
    });

    const[pictureName,setPictureName] = useState('')
    
    const [file, setFile] = useState(null);
    
    
      const onChangeCreateChoristerFormHandler = (e) => {
       
        setFormValues(state =>({...state, [e.target.name] : e.target.value}));
    
      } 

       const createChoristerHandler = async (e,formValues, formations)=> {
         e.preventDefault();
        const choristformations = Object.keys(formations).filter(r => formations[r] === true);
      

        const choristerData = {...formValues,formations:choristformations,imageUrl}
         await createChorister(choristerData);
         navigate('/choristers')
       
      
         
       
    
       }
      const errCheck = (e,criteria,pattern)=> {
        
      setErrors((state) => ({...state, [e.target.name] : errorCheck(e.target.value, criteria,pattern)}));
    
    
      }

      const onChangeFormationHandler = (e) => {
        setFormations(state => ({...state ,[e.target.name]: e.target.checked}));
       
        
      }

      const attachPictureHandler = async () => {

        const directory = Object.keys(formations).filter(r => formations[r] === true)[0];
        const formData = new FormData();

        console.log(pictureName);
        
        formData.append('file', file);
        formData.append('directory', JSON.stringify(directory));
        formData.append('pictureName', pictureName);
        
        const url = await uploadPictureService(formData);
        
         setImageUrl(url.imageUrl);
     
        
   
    }


    
    const handleUpload = (e) => {
        setFile(e.target.files[0])
        setPictureName(`${formValues.firstName}_${formValues.lastName}.jpg`);
       

    }


    const onChangeImageUrlHandler = (e) => {
        console.log(e.target.value);
        console.log(imageUrl);
    }
   

    return (
    
      <div className={styles['form-container']}>
    
    <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Add Chorister Form</h2>
      </div>
        <form className={styles.choristerForm} onSubmit={(e) => createChoristerHandler(e,formValues,formations)}>
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

            <div className="mb-3">

          <Form.Select aria-label="Default select example"
          name="gender"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.gender}
           >
             <option>Please choose your gender</option>
            <option value="male">Male</option>
             <option value="female">Female</option>
            </Form.Select> 
            </div>


            <Form.Select aria-label="Default select example"
            name="schoolName"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.schoolName}
           >
            <option>Please choose the school of the chorister</option>
            <option value="Ivan Vazov">Ivan Vazov school</option>
            <option value="d-r Petar Beron">D-r Petar Beron school</option>
            <option value="Hristo Botev">Hristo Botev school</option>
            <option value="Hristo Popmarkov">Hristo Popmarkov school</option>
            <option value="Lyben Karavelov">Lyuben Karavelov school</option>
            <option value="Graduated">Graduated</option>
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
             <option value="VIII">VIII</option>
             <option value="IX">IX</option>
             <option value="X">X</option>
             <option value="XI">XI</option>
             <option value="XII">XII</option>
             <option value="NA">NA</option>
            </Form.Select> 

            <Form.Select aria-label="Default select example"
          name="vocalRange"
           onChange={onChangeCreateChoristerFormHandler}
           value={formValues.vocalRange}
           >
             <option>Please choose vocal range</option>
            <option value="soprano">Soprano</option>
             <option value="alto">Alto</option>
             <option value="tenor">Tenor</option>
             <option value="baritone">Baritone</option>
             <option value="bass">Bass</option>
            </Form.Select> 

        

            <div className={styles.checkboxContainer}>

          
            <input type="checkbox" id="littleOnes" name='littleOnes' 
            checked={formations['littleOnes']}
            value={formations.littleOnes}
            onChange={onChangeFormationHandler}
            />
            <label htmlFor="littleOnes">Choir of littles ones</label>

            <input type="checkbox" id="childrensChoir" name='childrensChoir' 
            checked={formations['childrensChoir']}
            value={formations.childrensChoir} 
            onChange={onChangeFormationHandler} 
            />
            <label htmlFor="childrensChoir">Children`s choir</label>
            <input type="checkbox" id="burdenis" name='burdenis'
            
             value={formations.burdenis}
            onChange={onChangeFormationHandler} 
             checked={formations['burdenis']}
             />
            <label htmlFor="burdenis">Formation Burdenis</label>
            </div>


            <label htmlFor="picture">Choose picture</label>
            <input type="file" name="pictureName" id='picture' value={pictureName.value} onChange={handleUpload} />
            <button type="button" onClick={ attachPictureHandler}>Attach picture</button>


            <label htmlFor="imageUrl">Choose picture</label>
            <input type="text" 
            name='imageUrl' 
            id='imageUrl'
             
             onChange={onChangeImageUrlHandler}
             value={imageUrl}
             disabled />

        <button type='submit'>Add Chorister</button>
        </form>
        </div> 
    )
    
    
    }
    
    
    export default CreateChoristerForm




