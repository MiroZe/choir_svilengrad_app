import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../CreateChorister/CreateChorister.module.css' 
import { errorCheck } from '../../../utils/utils';
import { uploadPictureService } from '../../../services/uploadServices';
import { editChorister, getOneChorister } from '../../../services/choristersServices';
import logo from '../../../assets/SHKOLA_ZNAK.png';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setError } from '../../../reduxStates/store';


const EditChorister = ()=> {

  const navigate = useNavigate();
  const {choristerId} = useParams();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch()

  const [formValues, setFormValues] = useState({
    firstName: '',   
    surName: '',
    lastName: '',
    gender: '',
    schoolName: '',
    grade: '',
    vocalRange : ''
    

  });
  
  const [formations, setFormations] = useState( {
    littleOnes: false,
    childrensChoir: false,
    burdenis: false
  });

  
  const[imageUrl, setImageUrl] = useState('')


 
  useEffect( () => {

    getOneChorister(choristerId)
    .then(chorister => {
        setFormValues(chorister) 
       
        setFormations((prevFormations) => {
          const updatedFormations = { ...prevFormations };
  
          chorister.formations.forEach((f) => {
            if (Object.keys(updatedFormations).includes(f)) {
              updatedFormations[f] = true;
            }
          });
  
          return updatedFormations;
        });
      
     
        setImageUrl(chorister.imageUrl)    
    })
    .catch(error => dispatch(setError(error.message)))

  },[choristerId,dispatch])

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

       const editChoristerHandler = async (e,formValues, formations)=> {
         e.preventDefault();
        const choristformations = Object.keys(formations).filter(r => formations[r] === true);
      

        const choristerData = {...formValues,formations:choristformations,imageUrl}
        if(Object.values(choristerData).some(f => f === '')) {
           
          throw new Error('Please check all fields')
        } 
        try {
          await editChorister(choristerId, choristerData);
          navigate('/choristers')
          
        } catch (error) {
          dispatch(setError(error.message))
        }
    
    
       }
      const errCheck = (e,criteria,pattern)=> {
        
      setErrors((state) => ({...state, [e.target.name] : errorCheck(e.target.value, criteria,pattern)}));
    
    
      }

      const onChangeFormationHandler = (e) => {
      
        setFormations((prevFormations) => ({
          ...prevFormations,
          [e.target.name]: e.target.checked,
        }));
       
        
      }

      const attachPictureHandler = async () => {

        const directory = Object.keys(formations).filter(r => formations[r] === true)[0];
        const formData = new FormData();

       
        formData.append('file', file);
        formData.append('directory', JSON.stringify(directory));
        formData.append('pictureName', pictureName);
        
        try {
          const url = await uploadPictureService(formData);
          
           setImageUrl(url.imageUrl);
           setDisabled(true)
          
        } catch (error) {
          dispatch(setError(error.message))
        }
     
        
   
    }


    
    const handleUpload = (e) => {
        setFile(e.target.files[0])
        setPictureName(`${formValues.firstName}_${formValues.lastName}.jpg`);
       

    }


    const onChangeImageUrlHandler = () => {
       
    }
   

    return (
        <>
      
     
      <div className={styles['form-container']}>
    
  
        <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Add Chorister Form</h2>
      </div>
        <form className={styles.choristerForm} onSubmit={(e) => editChoristerHandler(e,formValues,formations)}>
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
          {errors.firstName && <p className={styles["error"]}>First Name should be at least 2 characters long!</p>}
          
          </FloatingLabel>
      

        <FloatingLabel controlId="floatingsurName" label="Surname" className="mb-3">
          <Form.Control type="text"  name='surName' 
          onChange={onChangeCreateChoristerFormHandler}
           value={formValues.surName}
           onBlur={(e) => errCheck(e, 3)}
           />
           {errors.surName && <p className={styles['error']}>Surname should be 3 characters at least</p>}
        </FloatingLabel>

        <FloatingLabel controlId="floatinglastName" label="Last Name" className="mb-3">
          <Form.Control type="text"  name='lastName' 
          onChange={onChangeCreateChoristerFormHandler}
           value={formValues.lastName}
           onBlur={(e) => errCheck(e, 3)}
           />
           {errors.surName && <p className={styles['error']}>Last name should be 3 characters at least</p>}
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

        

            <div className={styles['checkboxContainer']}>

          
            <input type="checkbox" id="littleOnes" name='littleOnes' 
            checked={formations?.littleOnes}
            
            onChange={onChangeFormationHandler}
            />
            <label htmlFor="littleOnes">Choir of littles ones</label>

            <input type="checkbox" id="childrensChoir" name='childrensChoir' 
            checked={formations['childrensChoir']}
            
            onChange={onChangeFormationHandler} 
            />
            <label htmlFor="childrensChoir">Children`s choir</label>
            <input type="checkbox" id="burdenis" name='burdenis'
            
             
            onChange={onChangeFormationHandler} 
             checked={formations['burdenis']}
             />
            <label htmlFor="burdenis">Formation Burdenis</label>
            </div>


            <label htmlFor="picture">Choose picture</label>
            <input type="file" name="pictureName" id='picture' value={pictureName.value} onChange={handleUpload} />
            <button type="button" onClick={ attachPictureHandler}>Attach picture</button>


            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" 
            name='imageUrl' 
            id='imageUrl'
             
             onChange={onChangeImageUrlHandler}
             value={imageUrl}
             disabled = {disabled} />
             
          <div className={styles['button-container']} >
          <Button type='submit' variant="warning">Save</Button>
         <Button as={Link} to={'/choristers'} variant="primary">Cancel</Button>

            </div>   

        </form>
        </div> 

        </>
    )
    
    
    }
    
    
    export default EditChorister




