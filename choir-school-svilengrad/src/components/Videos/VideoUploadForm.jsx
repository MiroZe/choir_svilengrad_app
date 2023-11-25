import Form from 'react-bootstrap/Form';
import styles from './VideoUploadForm.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png';


const VideoLinkUploadForm = () => {


return (
    <div className={styles['video-container']}>

        <div className={styles["header"]}>
        <img src={logo} alt="" />
        <h2>Video Url Upload Form</h2>
      </div>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>YouTube Link</Form.Label>
        <Form.Control type="link" placeholder="www.youtube....." />
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Choose video tag</option>
      <option value="burdenis">Burdenis</option>
      <option value="childrensChoir">Childrens Choir</option>
      <option value="littleOnes">Little Ones</option>
      <option value="other">Other Video</option>
    </Form.Select>
   
    

    </Form>

    </div>
)

}


export default VideoLinkUploadForm