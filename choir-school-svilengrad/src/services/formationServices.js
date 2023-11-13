const baseURL = 'http://localhost:3000';

const headers =  {"Content-Type": "application/json",}





export const createFormation = async(formationData) => {

    const response = await fetch(`${baseURL}/formations/create`, 
    {method:'POST',credentials: 'include', headers:headers,
     body:JSON.stringify(formationData) })
    const result = await response.json();
    return result;


};


export const getFormations = async() => {

   
    const response = await fetch(`${baseURL}/formations`)
  
    const result = await response.json();
    
    return result;
};


export const getFormationById = async(formationId) => {

    const response = await fetch(`${baseURL}/formations/${formationId}`)
  
    const result = await response.json();
    
    return result;
};

export const editFormation = async (formationId, value) => {



};
