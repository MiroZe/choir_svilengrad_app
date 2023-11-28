import { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getPayments } from '../../../services/taxesServices';

import TaxRowItem from './TaxRowItem';



const TaxesList = ({formValues}) => {

    const[choristers,setChoristers] = useState([]);
    const [payments,setPayments] = useState([])
   

   useEffect(() => {
    getPayments(formValues)
        .then(({choristers,payments}) => {
            setChoristers(choristers);
             setPayments(payments)

        })
          
       

   },[formValues])



    return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Year</th>
              <th>Month</th>
              <th>Monthly Tax</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {choristers.map((ch,index ) => <TaxRowItem key={ch._id} {...ch} index={index} payments={payments}/>)}

          </tbody>
        </Table>
      );


}

export default TaxesList