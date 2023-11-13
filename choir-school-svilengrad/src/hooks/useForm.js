import { useState } from "react";

export const useForm = (initialValues) => {
   
   console.log(initialValues);
    const [formValues, setFormValues] = useState(initialValues);
    

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };
    
    
   
    return {
        formValues,
        onChangeHandler,
        
    };
};