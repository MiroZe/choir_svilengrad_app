
const baseURL = 'http://localhost:3000';

const headers =  {"Content-Type": "application/json",}

export const userRegister = async (userData) => {

    const response = await fetch(`${baseURL}/register`, {method:'POST', headers:headers, credentials: 'include', body:JSON.stringify(userData) })
    const result = await response.json();
    return result;
}

export const userLogin = async (userData) => {
    const response = await fetch(`${baseURL}/login`, {method:'POST', credentials: 'include',headers:headers, body:JSON.stringify(userData) })
    const result = await response.json();
    return result;
}

export const userLogout = async () => {
    return await fetch(`${baseURL}/logout`, {method:'POST',credentials:'include'});
   
}