const baseURL = 'http://localhost:3000';

const headers =  {"Content-Type": "application/json",}



export const createChorister = async(choristerdata) => {

    const response = await fetch(`${baseURL}/choristers/create`, 
    {method:'POST',credentials: 'include', headers:headers,
     body:JSON.stringify(choristerdata) })
    const result = await response.json();
    return result;


}