import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
             
            <Button
           
              variant="success"
              type="submit"
            >
              Add Video
            </Button>
            <Button
            
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