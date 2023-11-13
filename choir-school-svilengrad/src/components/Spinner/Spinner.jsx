import Spinner from 'react-bootstrap/Spinner';
import styles from './Spinner.module.css'


const SpinnerComp = () => {


return (
    <div className={styles['spinner-container']}>
<Spinner animation="grow" size="300sm" />
<Spinner animation="grow" size="300sm" />
<Spinner animation="grow" size="300sm" />

    </div>
)

}


export default SpinnerComp