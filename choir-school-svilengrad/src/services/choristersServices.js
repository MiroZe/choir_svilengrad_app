const baseURL = 'http://localhost:3000';

const headers =  {"Content-Type": "application/json",}


export const getAllChoristers = async() => {

    const response = await fetch(`${baseURL}/choristers/`, {credentials:'include'});
    const result = await response.json();
 
    return result;



}


export const createChorister = async(choristerdata) => {

    const response = await fetch(`${baseURL}/choristers/create`, 
    {method:'POST',credentials: 'include', headers:headers,
     body:JSON.stringify(choristerdata) })
    const result = await response.json();

    return result;


}

export const getOneChorister = async (choristerId) => {
    const response = await fetch(`${baseURL}/choristers/${choristerId}`,  {credentials:'include'});
    const result = await response.json();
   
  
    return result;

};

export const deleteChorister = async (choristerId) => {
    const response = await fetch(`${baseURL}/choristers/${choristerId}/delete`,  {method:'DELETE' ,credentials:'include'});
    const result = await response.json();
   
  
    return result;

}

export const editChorister = async (choristerId, choristerData) => {


    const response = await fetch(`${baseURL}/choristers/${choristerId}/edit`,
    {method:'PUT' ,headers:headers, body:JSON.stringify(choristerData), credentials:'include', });
    const result = await response.json();
    return result

}