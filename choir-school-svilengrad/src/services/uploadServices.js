
const baseURL = 'http://localhost:3000';



export const uploadPictureService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/pictures` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}

export const uploadFileService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/file` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}