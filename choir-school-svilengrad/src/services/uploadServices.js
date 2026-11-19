import { request } from "./requester";

import { baseURL } from '../constants/url';




export const uploadPictureService = async(uploadData) => {
    
    const response = await fetch(
        `${baseURL}/upload/pictures` ,
         {method:'POST',
          
           body:uploadData})
    return await response.json();
    

}

export const getUrlUploadService = async (uploadData) => {
    return await request.post(`${baseURL}/upload/file`, uploadData);
};

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

export const getPictures = () => request.get(`${baseURL}/pictures`);

export const deletePictureById = (pictureId,pictureUrl) => {
    return request.delete(`${baseURL}/upload/file`, {id:pictureId,fileUrl:pictureUrl,modelName:'picture'})
}

export const getScores = (formationName) => {
    return request.get(
        `${baseURL}/scores?name=${encodeURIComponent(formationName)}`
    );
};


export const getArrangements = (formationName) => {
    return request.get(
        `${baseURL}/arrangements?name=${encodeURIComponent(formationName)}`
    );
};

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