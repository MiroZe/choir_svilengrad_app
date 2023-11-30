import styles from './GoogleMapsLocation.module.css'

const GoogleMapsLocation = () => {


    return(
        
        <div className={styles['location-container']}>
            <iframe style={{width:'100%', height:'100%'}} src="https://maps.google.com/maps?q=26%20%D0%B1%D1%83%D0%BB.%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
        </div>
       
    )
    
    
    }
    export default GoogleMapsLocation