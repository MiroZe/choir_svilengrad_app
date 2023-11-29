import { request } from "./requester";

const baseURL = 'http://localhost:3000';



export const getPayments = (dateData) => {

    const{year,month,formation} = dateData;


    return request.get(`${baseURL}/taxes?year=${year}&month=${month}&formation=${formation}`)

};


export const makeTaxPayment = (choristerId,amountPayment,year,month) => {

    return request.patch(`${baseURL}/taxes`, ({choristerId,amountPayment,year,month}))

}