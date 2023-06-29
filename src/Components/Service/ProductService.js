import { http } from "./AxiosHelper";

export const loadProduct=(curr)=>{
    return http.get(`/product/view?pageNumber=${curr}`).then(res=>res.data);
}

export const getProductbyCategory=(catid)=>{
    return http.get(`product/category/${catid}`).then(res=>res.data);
}

export const getProductbyId=(productid)=>{
    return http.get(`product/view/${productid}`).then(res=>res.data);
}

export const updateProductById=(productid,dat)=>{
    return http.put(`product/update/${productid}`,dat).then(res=>res.data);
}

export const uploadImage=(productid,formData)=>{
    return http.post(`product/product/images/${productid}`,formData).then(res=>res.data);
}

export const createProduct=(categoryId,data)=>{
    return http.post(`product/create/${categoryId}`,data).then(res=>res.data);
}

export const deleteProduct=(productid)=>{
    return http.delete(`product/del/${productid}`).then(res=>res.data);
}