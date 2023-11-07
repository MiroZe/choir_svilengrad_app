import styles from './Chorister.module.css'
import Button from 'react-bootstrap/Button';


const ChoristerDetail = () => {


    return (
        <div className={styles['chorister-card']}>
    <img src="profile-image.jpg" alt="Profile Image" className={styles['chorister-image']} />
    <div className="person-details">
        <h2 className={styles['name']}>John Doe</h2>
        <p className="job-title">Web Developer</p>
        <p className="description">Passionate about creating responsive and user-friendly web applications.</p>
    </div>
    <Button variant="secondary">Back</Button>

</div>

    )
}


export default ChoristerDetail