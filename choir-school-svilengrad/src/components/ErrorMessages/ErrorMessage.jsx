import styles from './ErrorMessage.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { clearError } from '../../reduxErrorState/store';


const ErrorMessage = () => {

  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

return (



  <div className={styles['error-alert']}>
  <p className={styles["error-message"]}>{error}</p>
  <button onClick={() => dispatch(clearError())}>Ok</button>
</div>


)

}


export default ErrorMessage