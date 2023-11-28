import Button from 'react-bootstrap/Button';



const TaxRowItem = ({firstName, lastName,index,payments}) => {

 const {year, months} = payments[0];
 const {name, paymentsForMonth} = months[0]

return (

    <tr>
              <td>{index +1}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{year}</td>
              <td>{name}</td>
              <td><input type="number" value={''} /></td>
              <td><Button variant="success">Pay</Button>
              <Button variant="danger">Mark as unpaid</Button></td>
              
            </tr>
)


}

export default TaxRowItem