import { request } from "./requester";

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
   
    if(uploadType === 'picture') {
       return request.post(`${baseURL}/pictures`,({formation,url}))
    } else if (uploadType ==='score'){
       return request.post(`${baseURL}/scores`,({formation,url,fileName,authorName}) )
    }
    else if (uploadType ==='arrangement'){
        return request.post(`${baseURL}/arrangements`,({formation,url,fileName,authorName}))
    }


};

export const getPictures = async () => {
    const response = await fetch(`${baseURL}/pictures`, {credentials: 'include'});
    const result = response.json();
    return result
}

export const getScores = async (formationName) => {
    const response = await fetch(`${baseURL}/scores?name=${formationName}`, {credentials: 'include'});
    const result = response.json();
    return result
}

export const getArrangements = async (formationName) => {
    const response = await fetch(`${baseURL}/arrangements?name=${formationName}`, {credentials: 'include'});
    const result = response.json();
    return result
}

export const deleteScore = (scoreId,scoreImageUrl)  => {

    return request.delete(`${baseURL}/upload/file`,{id:scoreId,fileUrl:scoreImageUrl,modelName:'score'});
}
export const deleteArrangement = (arrangementId,arrangementImageUrl)  => {

    return request.delete(`${baseURL}/upload/file`,{id:arrangementId,fileUrl:arrangementImageUrl,modelName:'arrangement'});
}

export const createYouTubeRecord = (videoId,videoUrl,tag) => {


    return request.post(`${baseURL}/videos`,({videoId,videoUrl,tag}))
}

export const getAllVideos = () => {

    return request.get(`${baseURL}/videos`)
}

export const deleteVideoById = (id) => {
    return request.delete(`${baseURL}/videos/${id}`)
}