import {Link} from 'react-router-dom'
import noPage from '../../assets/404.jpg'


const NoPageFound = ( ) => {
    return (
<div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <img src={noPage} alt="Choir" style={{ width: '500px', borderRadius: '50%', marginBottom: '20px', flexGrow:'1'}} />
      
      <p>Oops! The page you are looking for does not exist.</p>
      <Link style=
      {{color:'#c61b2b', fontSize:'2em', textDecoration:'none', backgroundColor:'#2c3e50'}}
       to="/">Go back to the homepage</Link>
    </div>
    )
}

export default NoPageFound