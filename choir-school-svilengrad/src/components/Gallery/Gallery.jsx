import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getPictures } from '../../services/uploadServices';
import styles from './Gallery.module.css'




export const Gallery = () => {

    const[pictures, setPictures] = useState([]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
 
     

    useEffect(()=> {

        getPictures()
            .then(pictures => setPictures(pictures))
            .catch(err => console.log(err))
    },[]);

    

return (

   
    
        <Carousel className={styles['carousel']} activeIndex={index} onSelect={handleSelect}>

            {pictures.map((picture => ( <Carousel.Item key={picture._id} className={styles['carousel-item']}>
          <img
          className="d-block w-100"
          src={picture.pictureUrl}
          alt="First slide"
        />
           
          </Carousel.Item>)))}
         
         
        </Carousel>
      )
    

}



export default Gallery