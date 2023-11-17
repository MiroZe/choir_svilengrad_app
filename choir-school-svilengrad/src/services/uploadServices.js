
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

    console.log(formation);
   
    

    if(uploadType === 'picture') {
        response = await fetch(`${baseURL}/pictures`,
        {method:'POST',credentials: 'include', headers:{"Content-Type": "application/json"},
        body:JSON.stringify({formation,url}) } );
    }


    const result =  await response.json();
    console.log(result);


}