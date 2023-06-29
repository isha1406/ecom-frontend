import axios from "axios";
const BASE_URL="http://localhost:8080";

export const createUser=(data)=>{
    return axios.post(`${BASE_URL}/user/create`,data).then(response=>response.data)
}

export const loginUser=(data)=>{
    return axios.post(`${BASE_URL}/auth/login`,data).then(response=>response.data)
}
