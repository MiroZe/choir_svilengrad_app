
const baseURL = 'http://localhost:3000';

const headers =  {"Content-Type": "application/json",}

export const userRegister = async (userData) => {

   

    const response = await fetch(`${baseURL}/register`, {method:'POST', headers:headers, body:JSON.stringify(userData) })
    const result = await response.json();
    return result;
}