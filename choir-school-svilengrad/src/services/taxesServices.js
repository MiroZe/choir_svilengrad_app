import { request } from "./requester";

const baseURL = 'http://localhost:3000';



export const getPayments = (dateData) => {

    const{year,month,formation} = dateData;


    return request.get(`${baseURL}/taxes?year=${year}&month=${month}&formation=${formation}`)

}