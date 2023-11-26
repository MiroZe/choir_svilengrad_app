import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './VideoUploadForm.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png';
import { useForm } from '../../hooks/useForm';
import { useEffect, useState } from 'react';
import { getYouTubeVideoId } from '../../utils/getYouTubeUrl';
import {setError} from '../../reduxStates/store'
import {useDispatch} from "react-redux"
import { createYouTubeRecord } from '../../services/uploadServices';
import {useNavigate, Link} from 'react-router-dom'


const VideoLinkUploadForm = () => {


  const {formValues, onChangeHandler} = useForm({
    youTubeLink: '',
    tag:''

  });

  const[isDisabled,setDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=> {
    if(!Object.values(formValues).some(f => f === '')) {
      setDisabled(false)
    }
  },[formValues])


 const submitYoutubeLinkHandler = async (e) => {
  e.preventDefault()

  const {youTubeLink, tag} = formValues;
  
  if(!youTubeLink || !tag) {
   
    return
  }
  
  
  try {
   const youTubeId = getYouTubeVideoId(youTubeLink);
   const youTubeRecord = await createYouTubeRecord(youTubeId,youTubeLink,tag);
   console.log(youTubeRecord);
   navigate('/')
  
 } catch (error) {
  dispatch(setError(error.message))
 }

 }


return (
    <div className={styles['video-container']}>

        <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Video Url Upload Form</h2>
      </div>
        <Form onSubmit={submitYoutubeLinkHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>YouTube Link</Form.Label>
        <Form.Control type="link"
         placeholder="www.youtube....." 
         name="youTubeLink" 
         value={formValues.youTubeLink}
         onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Select aria-label="Default select example" 
      name="tag" 
      value={formValues.tag}
      onChange={onChangeHandler}
      >
      <option value="">Choose video tag</option>
      <option value="burdenis">Burdenis</option>
      <option value="childrensChoir">Childrens Choir</option>
      <option value="littleOnes">Little Ones</option>
      <option value="other">Other Video</option>
    </Form.Select>
             
            <Button
            disabled={isDisabled}
              variant="success"
              type="submit"
            >
              Add Video
            </Button>
            <Button as={Link }to ={'/'}
            variant="primary"
            type="button"
            className={styles['btn']}
          >
            Cancel
          </Button>
    

    </Form>

    </div>
)

}


export default VideoLinkUploadForm