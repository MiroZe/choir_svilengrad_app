import { useState,useEffect,useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import { deletePictureById, getPictures } from '../../services/uploadServices';
import styles from './Gallery.module.css'
import logo from '../../assets/SHKOLA_ZNAK.png'
import SpinnerComp from '../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { setError } from "../../reduxStates/store";
import { Usercontext } from '../../contexts/UserContext';






export const Gallery = () => {

    const[pictures, setPictures] = useState([]);
    const [index, setIndex] = useState(0);
    const [spinner, setSpinner] = useState(true);
    const [fullsize,setFullSize] = useState(false);
    const [src,setSrc] = useState('');
    const [pictureId,setPictureId] = useState('');
    const {isAdmin} = useContext(Usercontext)
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

    const pictureClickHandler = (e,pictureId) => {
        
        setFullSize( s => s = !s)
        setSrc(e.target.src);
        setPictureId(pictureId)
    }

    const backToGallery = () => {
        setFullSize( s => s = !s)
    }

    const deletePictureHandler = async (pictureId,pictureUrl) => {
        try {
         setSpinner(true)
          await deletePictureById(pictureId,pictureUrl);
          setPictures(pictures.filter((f) => f._id !== pictureId));
          setSpinner(false)
          setFullSize(false)
          
        } catch (error) {
          dispatch(setError(error.message))
        }

    }

   
    

    return (
      <div className={styles['gallery-container']}>
        {spinner && <SpinnerComp />}
  
        {!spinner && pictures.length > 0 && (
          <>
            {!fullsize ? (
              <Carousel className={styles['carousel']} activeIndex={index} onSelect={handleSelect}>
                {pictures.map((picture) => (
                  <Carousel.Item key={picture._id} className={styles['carousel-item']}>
                

                    <img
                      onClick={(e) => pictureClickHandler(e,picture._id )}
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
                {isAdmin && <Button onClick={() => deletePictureHandler(pictureId,src)} variant="danger" style={{marginTop:'10px'}}>Delete</Button>}
              </div>
            )}
          </>
        )}

    {!spinner && (pictures.length == 0) && (<h2 style={{marginTop:'20px'}}>There is no uploaded pictures yet</h2>) }
      </div>
    );
  };



export default Gallery