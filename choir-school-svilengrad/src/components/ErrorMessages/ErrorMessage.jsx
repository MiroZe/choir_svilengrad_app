import styles from './ErrorMessage.module.css'


const ErrorMessage = () => {

return (



<div className={styles["alert danger-alert"]}>
  <h3>Danger Alert Message</h3>
  <a className={styles['close']}>&times;</a>
</div>


)

}


export default ErrorMessage