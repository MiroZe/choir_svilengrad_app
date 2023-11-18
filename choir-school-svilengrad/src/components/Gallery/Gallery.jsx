import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getPictures } from '../../services/uploadServices';
import styles from './Gallery.module.css'




export const Gallery = () => {

    const[pictures, setPictures] = useState([]);
    const [index, setIndex] = useState(0);
    const [fullsize,setFullSize] = useState(false);
    const [src,setSrc] = useState('');

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

 
     

    useEffect(()=> {

        getPictures()
            .then(pictures => setPictures(pictures))
            .catch(err => console.log(err))
    },[]);


    const pictureClickHandler = (e) => {
        
        setFullSize( s => s = !s)
        setSrc(e.target.src)
    }

    const backToGallery = () => {
        setFullSize( s => s = !s)
    }
    

return (
    <>
        {!fullsize && 
        <Carousel className={styles['carousel']} activeIndex={index} onSelect={handleSelect}>

            {pictures.map((picture => ( <Carousel.Item key={picture._id} className={styles['carousel-item']}>
          <img
          onClick={pictureClickHandler}
          className="d-block w-100"
          src={picture.pictureUrl}
          alt="First slide"
        />
          </Carousel.Item>)))}
        </Carousel>
        
        }
        {fullsize && (<div className={styles['fullsize']}><img onClick={backToGallery} src={src}/></div>)}
        </>
      )
    

}



export default Gallery