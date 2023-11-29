import Button from 'react-bootstrap/Button';
import { makeTaxPayment } from '../../../services/taxesServices';
import { useDispatch } from 'react-redux';
import { setError } from '../../../reduxStates/store';
import { useEffect, useState } from 'react';



const TaxRowItem = ({_id, firstName, lastName,index,payments,year, month}) => {


const dispatch = useDispatch()


const [disabled, setDisabled] = useState(false)
 const [value, setValue] = useState({
    taxAmount :''
 })

 const [paymentAmount, setPaymentAmount] = useState('')
 const [newPayments, setNewPayments] = useState(payments)

 useEffect(() => {

    newPayments.map(x => {
        if(_id == x.choristerId && x.isPaid) {
            
            setPaymentAmount(x.amountPaid)
            setDisabled(true)
        }
        return
     })

 },[newPayments,_id])



 const onChangeHandler = (e) => {
    setValue( state => ({...state, [e.target.name]:e.target.value}))

 }



 const paymentHandler = async (id) => {

    const amountPayment = value.taxAmount;
    

    try {
         await makeTaxPayment(id, amountPayment, year,month);
         setNewPayments(state => state.map(x => ({...x,amountPaid:value.taxAmount })))
         setDisabled(true);
    } catch (error) {
        dispatch(setError(error.message))
    }

 }

 const newPaymentSubmitHandler = () => {
    setDisabled(false);
    setPaymentAmount('')
 }


return (

    <tr>
              <td>{index +1}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{year}</td>
              <td>{month}</td>
              <td><input disabled={disabled} type="text" value={paymentAmount || value.taxAmount} name="taxAmount" onChange={onChangeHandler}/></td>
              <td><Button variant="success" 
              onClick={()=> paymentHandler(_id)}
              disabled={disabled}
              >Pay</Button>
              <Button variant="danger" onClick={newPaymentSubmitHandler}>Edit existing payment</Button></td>
              
            </tr>
)


}

export default TaxRowItem