
import { useEffect, useState } from 'react';

import styles from './VideoGallery.module.css'
import { deleteVideoById, getAllVideos } from '../../services/uploadServices';
import { useDispatch } from 'react-redux';
import { setError } from '../../reduxStates/store';
import VideoItem from './VideoItem';
import Spinner from 'react-bootstrap/esm/Spinner';




const VideoGallery = () => {
   
    const [videos, setVideos] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {

        getAllVideos()
            .then(data => {
                setVideos(data)
                setSpinner(false)
            })
            .catch(error => dispatch(setError(error.message)))

    },[dispatch]) ;


    const deleteVideoHandler = async (id) => {
            try {
                await deleteVideoById(id);
                setVideos(videos => videos.filter(v => v._id !== id))
                
            } catch (error) {
                dispatch(setError(error.message))
            }

    }
   

return (
        <>
        {spinner && <Spinner/>}
        {!spinner && (
        <div className={styles['videos-container']} >

           {videos.map(v => <VideoItem key={v._id} {...v} deleteVideoHandler={deleteVideoHandler}/>)}
         
        </div>
        )}
        </>
      )
    

}
export default VideoGallery