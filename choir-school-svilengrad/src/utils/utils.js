

const patternes = {
    phonePattern : /^0[1-9]{1}[0-9]{8}$/,
    emailPattern :/^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/,
    imagePattern :/^https?:\/\/.+/
}

export const errorCheck = (value, criteria,pattern) => {

    let result = false;

        if(pattern) {
            const check = value.match(patternes[pattern])
            if(!check) {
               
               return !result
            } 
        } else {      
            if(value.length < criteria) {
                result = !result;
            
                return result
            } 
        }
        
        return result
    }

    export const passwordsCheck = (value1, value2) => {
        return value1 === value2
    }


