import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { getAllChoristers } from '../../services/choristersServices';
import Chorister from './Chorister';




const ChoristerList =() => {

const [choristers, setChoristers] = useState([]);


useEffect(() => {
    getAllChoristers().then(result => setChoristers(result))
},[])


return (
        <>
        <h2>List of choristers</h2>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Formation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {choristers.map( (c, index) => <Chorister key={c._id} {...c} index={index}  />)}
          </tbody>
        </Table>
        </>
)

}

export default ChoristerList