import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './UploadForm.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png'

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState('');
  const [formation, setFormation] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadTypeChange = (e) => {
    setUploadType(e.target.value);
  };

  const handleFormationName = (e) => {
    setFormation(e.target.value);
  };


  const handleUpload = () => {
    // Add your file upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      console.log('Selected upload type:', uploadType);
      // Add your file upload logic here
    } else {
      console.log('No file selected');
    }
  };

  return (

    <Container className={styles['container']}>
        <div className={styles['title']}>
        <h3>Upload your files</h3>
        <img src={logo} alt="" />
        </div>
      <Row className="justify-content-md-center mt-5">
        <Col md="6">
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            <Form.Group controlId="formType" className="mb-3">
              <Form.Label>Select Type</Form.Label>
              <Form.Control as="select" value={uploadType} onChange={handleUploadTypeChange}>
                <option value="select">--------</option>
                <option value="arrangement">Arrangement</option>
                <option value="picture">Picture</option>
                <option value="notes">Notes</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formType" className="mb-3">
              <Form.Label>Select Formation</Form.Label>
              <Form.Control as="select" value={formation} onChange={handleFormationName}>
                <option value="select">--------</option>
                <option value="littleOnes">Little Ones</option>
                <option value="childrensChoir">Childrens Choir</option>
                <option value="burdenis">Burdenis</option>
              </Form.Control>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={handleUpload}
              style={{ backgroundColor: '#c61b2b', borderColor: '#c61b2b' }}
            >
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
   
  );
};

export default UploadForm;