import styles from './TaxesDashboard.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TaxesList from '../TaxesList/TaxesList';





const TaxesDashboard = () => {

    
  
    const [newEventName, setnewEventName] = useState('');
    const [formValues, setFormValues] = useState(
        {year: '',
        month: '',
        formation:'',
        eventName:''
                }
    );
    const [showChoristerList, setShowChoristerList] = useState(false);

    


    const onChangeEventHandler = (e) => {
       
        setFormValues(state => ({...state, [e.target.name]:e.target.value}))
    }

    const setNewOption = (value) => {
        setnewEventName(value);
        
    }

    const showList = async (e) => {
        e.preventDefault()
        const {year,month,formation} = formValues
       
       if(year === '' || month === '' || formation == '') return
        
        setShowChoristerList(true)
    }

return (
  
    <div className={styles['container']}>
  
        <Form onSubmit={showList}>
      
    <Form.Label>Event Name</Form.Label>
    <>
        <Form.Control type="text" value={formValues.eventName} name="eventName" onChange={onChangeEventHandler}/>
        <Button onClick={()=> setNewOption(formValues.eventName)}>Save</Button>
        </>

        <Form.Label>Choose Year</Form.Label>
    <Form.Select placeholder='Choose Year' aria-label="year" name='year' value={formValues.year} onChange={onChangeEventHandler}>
    <option value="">-------</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </Form.Select>
    <Form.Label>Choose Month or Event</Form.Label>
    <Form.Select aria-label="month" name='month' value={formValues.month} onChange={onChangeEventHandler}>
      <option value="">-------</option>
      <option value="january">January</option>
      <option value="february">February</option>
      <option value="march">March</option>
      <option value="april">April</option>
      <option value="may">May</option>
      <option value="june">June</option>
      <option value="july">July</option>
      <option value="august">August</option>
      <option value="september">September</option>
      <option value="october">October</option>
      <option value="november">November</option>
      <option value="december">December</option>  
      <option value={newEventName}>{newEventName}</option>  
    </Form.Select>
    <Form.Label>Choose Formation</Form.Label>

    <Form.Select aria-label="formation" name="formation" value={formValues.formation} onChange={onChangeEventHandler}>
    <option value="">-------</option>
      <option value="littleOnes">Little Ones</option>
      <option value="childrensChoir">Childrens Choir</option>
      <option value="burdenis">Burdenis</option>
    </Form.Select>
    
    


   


        <Button type="submit">Show</Button>
        </Form>
        {showChoristerList && <TaxesList formValues={formValues}/>}

    </div>
)


}

export default TaxesDashboard