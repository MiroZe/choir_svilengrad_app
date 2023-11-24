import styles from './Home.module.css'


const Home = () => {

return (
  <div className={styles['container']}>
  
    <h2 className={styles['heading']}>Welcome to Web page of </h2>
    <h1 className={styles['heading-name']}>Choir School Svilengrad</h1>
  
    <p className={styles['description']}>
      Explore the world of music and harmony with our choir school. Join us to enhance your musical skills and be part of a melodious journey.
    </p>
    
  </div>


)

}

export default Home