import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './DeleteConfirmationModal.module.css'


const  DeleteConfirmationModal = ({data,deleteClickHandler, ...otherProps}) => {

  
  const fileUrl = data.scoreUrl || data.arrangementUrl
    
    const names = {
      firstName : '',
      lastName : '',
    
    }
    Object.keys(data).forEach(d => {
      if(d.includes('firstName')) {
        names['firstName'] = data[d]
      } else if( d.includes('lastName')) {
        names['lastName'] = data[d]
      } else if (d.includes('Name')){
        names['firstName'] = data[d]
      }
    })
  
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
            <h4>{`Are you sure to delete ${names.firstName} ${names.lastName ? names.lastName : ''}?`}</h4>
          
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={()=> deleteClickHandler(data._id, fileUrl)}>Delete</Button>
            <Button onClick={otherProps.onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
       
      );
  
}


export default DeleteConfirmationModal