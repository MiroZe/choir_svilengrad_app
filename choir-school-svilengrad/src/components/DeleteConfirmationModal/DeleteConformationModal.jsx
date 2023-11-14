import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './DeleteConfirmationModal.module.css'


const  DeleteConfirmationModal = ({userData,deleteClickHandler, ...otherProps}) => {

    const {firstName, lastName, id, } = userData;

   
   
    
  
  
  
    return (
       
        <Modal
         {...otherProps}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className={styles['header']}>
            <Modal.Title id="contained-modal-title-vcenter">
              Delete confirmation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{`Are you sure to delete ${firstName} ${lastName}?`}</h4>
          
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={()=> deleteClickHandler(id)}>Delete</Button>
            <Button onClick={otherProps.onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
       
      );
  
}


export default DeleteConfirmationModal