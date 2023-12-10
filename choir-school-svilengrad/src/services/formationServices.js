import { request } from "./requester";

import { baseURL } from '../constants/url';




export const createFormation = async(formationData) => {

    return request.post(`${baseURL}/formations/create`,(formationData))

};


export const getFormations = async() => {

    return request.get(`${baseURL}/formations`)
  
};


export const getFormationById = async(formationId) => {

    return request.get(`${baseURL}/formations/${formationId}`)
  
};

export const editFormation = async (formationId, formationData) => {

   return request.put(`${baseURL}/formations/${formationId}/edit`,(formationData));

};



export const deleteFormation = async (formationId) => {
  return request.delete(`${baseURL}/formations/${formationId}/delete`) 
   
}
