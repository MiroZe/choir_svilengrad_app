import { useContext } from "react";
import YouTube from "react-youtube";
import { Usercontext } from "../../contexts/UserContext";
import Button from 'react-bootstrap/Button';
import styles from './VideoGallery.module.css'





const VideoItem = ({videoId, tag, _id, deleteVideoHandler}) => {
    const {isAdmin} = useContext(Usercontext)
    
    const opts = {
        height: '190',
        width: '300',
        
        playerVars: {
        
          autoplay: 0,
        },
      };

return (
    <div className={styles['video-container']}>
        <div className={styles['media']}>
    <YouTube videoId={videoId} opts={opts} />
        </div>
    <div className={styles['actions']}>
        <h6>tag:#{tag}</h6>
        {isAdmin && <Button variant="danger" onClick={() => deleteVideoHandler(_id)}>Delete</Button>}

    </div>
    </div>
)

}

export default VideoItem