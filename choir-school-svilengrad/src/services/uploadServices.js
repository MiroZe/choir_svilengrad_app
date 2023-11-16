
const baseURL = 'http://localhost:3000';



export const uploadPictureService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/pictures` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}

export const uploadPictureToGalleryService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/gallery` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}