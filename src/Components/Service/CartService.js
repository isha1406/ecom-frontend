//import { getToken } from "../Auth";
import {http} from "./AxiosHelper";

/*const tok=getToken();*/

/*export const loadCart=()=>{
    return http.get(`/cart/getAll`,{
        headers: {
          'Authorization': tok
        }
      }).then(res=>res.data);
}
*/

export const loadCart=(user)=>{
  return http.get(`/cart/getAll/${user}`).then(res=>res.data);
}

export const addtocart=(user,data)=>{
  return http.post(`/cart/${user}`,data).then(res=>res.data);
}

export const deleteitem=(productid,user)=>{
  return http.delete(`/cart/${productid}/${user}`).then(res=>res.data);
}