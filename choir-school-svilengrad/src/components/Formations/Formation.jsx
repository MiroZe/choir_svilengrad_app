import styles from './Formations.module.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';



const Formation = ({imageUrl,formationName}) => {


    return (

             <div className={styles.formationCard}>
            <div className={styles['image-container']}>
             <img className={styles.choirImage} src={imageUrl} alt="Choir" />
             </div>
             <div className={styles['content']}>
                <h2 className={styles.formationName}>{formationName}</h2>  

                <Button variant="secondary">Details</Button>
             </div>

        </div>
    )



}

Formation.propTypes = {
    formationName: PropTypes.string.isRequired, 
    imageUrl: PropTypes.string.isRequired, 
  };

export default Formation