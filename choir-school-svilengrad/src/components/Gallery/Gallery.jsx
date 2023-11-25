import { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getPictures } from '../../services/uploadServices';
import styles from './Gallery.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png'
import SpinnerComp from '../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxStates/store";




export const Gallery = () => {

    const[pictures, setPictures] = useState([]);
    const [index, setIndex] = useState(0);
    const [spinner, setSpinner] = useState(true);
    const [fullsize,setFullSize] = useState(false);
    const [src,setSrc] = useState('');
    const dispatch = useDispatch();
    

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


    useEffect(() => {
      getPictures()
        .then((pictures) => {
          setPictures(pictures);
          setSpinner(false);
        })
        .catch((error) => {
          dispatch(setError(error.message));
        });
    }, [dispatch]);

    const pictureClickHandler = (e) => {
        
        setFullSize( s => s = !s)
        setSrc(e.target.src)
    }

    const backToGallery = () => {
        setFullSize( s => s = !s)
    }
    

    return (
      <div className={styles['gallery-container']}>
        {spinner && <SpinnerComp />}
  
        {!spinner && (
          <>
            {!fullsize ? (
              <Carousel className={styles['carousel']} activeIndex={index} onSelect={handleSelect}>
                {pictures.map((picture) => (
                  <Carousel.Item key={picture._id} className={styles['carousel-item']}>
                    <img
                      onClick={pictureClickHandler}
                      className="d-block w-100"
                      src={picture.pictureUrl}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <div className={styles['fullsize']}>
                <div className={styles['logo']}>
                  <img src={logo} alt="" />
                </div>
                <img onClick={backToGallery} src={src} alt="Fullsize Image" />
              </div>
            )}
          </>
        )}
      </div>
    );
  };



export default Gallery