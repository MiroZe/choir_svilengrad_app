
const baseURL = 'http://localhost:3000';



export const uploadPictureService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/pictures` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}

export const geUrlUploadService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/file` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}

export const uploadFileService = async(uploadType,formation,url,fileName,authorName) => {
    let response;

  
   
    

    if(uploadType === 'picture') {
        response = await fetch(`${baseURL}/pictures`,
        {method:'POST',credentials: 'include', headers:{"Content-Type": "application/json"},
        body:JSON.stringify({formation,url}) } );
    } else if (uploadType ==='score'){
        response = await fetch(`${baseURL}/scores`,
        {method:'POST',credentials: 'include', headers:{"Content-Type": "application/json"},
        body:JSON.stringify({formation,url,fileName,authorName}) } );
    }


    return await response.json();
   


};

export const getPictures = async () => {
    const response = await fetch(`${baseURL}/pictures`, {credentials: 'include'});
    const result = response.json();
    return result
}