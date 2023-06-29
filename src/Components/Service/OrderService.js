import { http } from "./AxiosHelper";

export const loadOrder=(pgnum)=>{
    return http.get(`/order/findAll?pageNumber=${pgnum}`).then(res=>res.data);
}

export const createOrder=(user,data)=>{
    return http.post(`/order/${user}`,data).then(res=>res.data);
}

export const getOrderById=(orderId)=>{
    return http.get(`/order/${orderId}`).then(res=>res.data);
}