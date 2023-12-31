import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './UploadForm.module.css';
import logo from '../../assets/SHKOLA_ZNAK.png'
import { geUrlUploadService, uploadFileService } from '../../services/uploadServices';
import { setError } from '../../reduxStates/store';
import { useDispatch } from 'react-redux';

const UploadForm = () => {

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState('');
  const [formation, setFormation] = useState('');
  const [url, setUrl] = useState('');
  const [fileName, setfileName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [uploadDisabled, setUploadDisabled] = useState(true);
 
  const dispatch = useDispatch();

  const handleUrlChange = () => {
  
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadDisabled(false)
  };

  const handleUploadTypeChange = (e) => {
    setUploadType(e.target.value);
  };

  const handleFormationName = (e) => {
    setFormation(e.target.value);
  };

  const handleFileNameChange = (e) => {
    setfileName(e.target.value)
  }
  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value)
  }


  const handleUpload = async () => {


    const formData = new FormData();

    formData.append('file', selectedFile);
    formData.append('category', uploadType);
    formData.append('formation', formation);
    formData.append('name', fileName);

    
   
    if (selectedFile) {
      try {
        const url = await geUrlUploadService(formData)
        setUrl(url.imageUrl);
        setDisabled(false)
        
      } catch (error) {
        dispatch(setError(error.message));
      }
      
      

    } else {
      dispatch(setError('No file selected'));
    }
  };


  const uploadSubmitHandler= async(e, uploadType,formation,url,fileName,authorName) => {
    e.preventDefault();
    const values = {uploadType,formation,url};
   
  
    

    if(Object.values(values).some(v => v === '')) {
      setDisabled(false);
      return
    }
    try {
      await uploadFileService(uploadType,formation,url,fileName,authorName);
      navigate('/formations')
      
    } catch (error) {
      dispatch(setError(error.message))
    }
    


  }



  return (

    <Container className={styles['container']}>
        <div className={styles['title']}>
        <h3>Upload your files</h3>
        <img src={logo} alt="" />
        </div>
      <Row className="justify-content-md-center mt-5">
        <Col md="6">
          <Form onSubmit={(e) => uploadSubmitHandler(e, uploadType,formation,url,fileName,authorName)}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control name='file' type="file" onChange={handleFileChange} />
            </Form.Group>

            <Form.Group controlId="formType" className="mb-3">
              <Form.Label>Select Type</Form.Label>
              <Form.Control name='uploadType' as="select" value={uploadType} onChange={handleUploadTypeChange}>
                <option value="na">--------</option>
                <option value="arrangement">Arrangement</option>
                <option value="picture">Picture</option>
                <option value="score">Score</option>
              </Form.Control>
              {uploadType !== 'picture' && uploadType !== 'na' &&
              <>
              <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name of file</Form.Label>
              <Form.Control name='fileName' type="text" onChange={handleFileNameChange} value={fileName} />
             </Form.Group>

              <Form.Group controlId="author" className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control name="authorName" type="text" onChange={handleAuthorNameChange} value={authorName} />
              </Form.Group>
              </>
              }
            </Form.Group>
            <Form.Group controlId="formType" className="mb-3">
              <Form.Label>Select Formation</Form.Label>
              <Form.Control name="formation" as="select" value={formation} onChange={handleFormationName}>
                <option value="na">--------</option>
             
                {uploadType === 'picture' && 

                <option value="all">For All Formations</option>
                }
                {uploadType !== 'picture' && ( <>
                <option value="littleOnes">Little Ones</option>
                <option value="childrensChoir">Childrens Choir</option>
                <option value="burdenis">Burdenis</option>
                </>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="imageUrl" className="mb-3">
              <Form.Label>Url</Form.Label>
              <Form.Control name="url" type="text" value={url} onChange={handleUrlChange} />
            </Form.Group>

            <Button
            disabled={uploadDisabled}
              variant="warning"
              type="button"
              onClick={handleUpload}
              className={styles['btn']}
            >
              Upload
            </Button>
            <Button
            disabled={disabled}
              variant="success"
              type="submit"
            >
              Save
            </Button>
            <Button
            as={Link} to={'/'}
              style={{marginLeft:'10px'}}
              variant="primary"
             
            >
              Cancel
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
   
  );
};

export default UploadForm;
