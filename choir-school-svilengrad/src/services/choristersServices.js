import { request } from "./requester";

const baseURL = 'http://localhost:3000';




export const getAllChoristers = async() => {

   return request.get(`${baseURL}/choristers/`);
}


export const createChorister = async(choristerdata) => {

    return request.post(`${baseURL}/choristers/create`,(choristerdata) )

}

export const getOneChorister = async (choristerId) => {
    return request.get(`${baseURL}/choristers/${choristerId}`);
 
};

export const deleteChorister = async (choristerId) => {
   return request.delete(`${baseURL}/choristers/${choristerId}/delete`);
  
}

export const editChorister = async (choristerId, choristerData) => {

return request.put(`${baseURL}/choristers/${choristerId}/edit`,(choristerData));
  
}