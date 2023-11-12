import { useState } from "react";
import { errorCheck } from "../utils/utils";

export const useFormErrors = (initialValue) => {
    const [errors, setErrors] = useState(initialValue);

    
    
    const onErrorHandler = (e,criteria,pattern) => {
        

        const isErrors = errorCheck(e.target.value, criteria,pattern);
      
        setErrors(state => ({ ...state, [e.target.name]: isErrors }));
    };

    const isErrors = !(Object.values(errors).some(f => f !== false));
    
    

    return {
        errors,
        onErrorHandler,
        isErrors
    }
  
}