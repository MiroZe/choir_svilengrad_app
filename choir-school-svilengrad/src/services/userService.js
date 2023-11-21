import {request} from './requester'
const baseURL = 'http://localhost:3000';



export const userRegister = async (userData) => {

    const result = request.post(`${baseURL}/register`,userData) 
  
    return result;
}



export const userLogin = async (userData) => {

    const result = await request.post(`${baseURL}/login`,userData );
  
return result

}



export const userLogout = async () => {
         return await request.post(`${baseURL}/logout`)
}


export const getAllUsers = async() => {
    return await request.get(`${baseURL}/users`)
}