import styles from './Formations.module.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Link} from 'react-router-dom'



const Formation = ({imageUrl,formationName, description, conductor}) => {

    const [showDetails, setshowDetails] = useState(false);

    const showMore = () => {
        setshowDetails((showDetails) =>  showDetails = !showDetails) 
    }


    return (
            
             <div className={styles.formationCard}>
            <div className={styles['image-container']}>
             <img className={styles.choirImage} src={imageUrl} alt="Choir" />
             </div>
                <h2 className={styles.formationName}>{formationName}</h2>  
             <div className={styles['content']}>

                <Button variant="secondary" onClick={showMore}>Details</Button>
                {showDetails && 
                    <>
                    <p> {description}</p>
                    <p>Conductor: {conductor}</p>
                    <Link>Choristers</Link>
                    <Link>Gallery</Link>
                    <Link>Video</Link>
                    </>

                
                }
             </div>

        </div>
    )



}

Formation.propTypes = {
    formationName: PropTypes.string.isRequired, 
    imageUrl: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    conductor: PropTypes.string.isRequired, 
  };

export default Formation