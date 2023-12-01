import {request} from './requester'
const baseURL = 'http://localhost:3000';



export const userRegister = async (userData) => {

    const result = request.post(`${baseURL}/register`,userData) 
  
    return result;
}



export const userLogin = async (userData) => {

    const result = request.post(`${baseURL}/login`,userData );
  
return result

}



export const userLogout = async () => {
         return request.post(`${baseURL}/logout`)
}


export const getAllUsers = async() => {

     return  request.get(`${baseURL}/users`);
      
  
}


export const changeUserRole = async(userId,newRole) => {
    return request.put(`${baseURL}/users/profile`,{userId,newRole})
}
