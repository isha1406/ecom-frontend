import { http } from "./AxiosHelper"

export const loadCategory=()=>{
    return http.get(`/categories/getAll`).then(res=>res.data);
}

export const createCategory=(data)=>{
    return http.post(`/categories/create`,data).then(res=>res.data);
}

export const getCategoryById=(catid)=>{
    return http.get(`/categories/getById/${catid}`).then(res=>res.data);
}

export const UpdateCategoryById=(catid,data)=>{
    return http.post(`/categories/update/${catid}`,data).then(res=>res.data);
}

