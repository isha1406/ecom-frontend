//import { JSON } from "react-router-dom"
import { EncryptStorage } from 'encrypt-storage';


export const encryptStorage = new EncryptStorage('secret-key-value');

export const login=(data,next)=>{
    encryptStorage.setItem("data",JSON.stringify(data));
    next();
}

export const logout=(next)=>{
    encryptStorage.removeItem("data");
     next();
}

export const checkLogin=()=>{
    const data=encryptStorage.getItem("data");
    
     if(data==null){
        return false;
     }

    
    return true;
}

export const getToken=()=>{
    if(checkLogin()){
       const token=encryptStorage.getItem("data").token;
       return token;
    }
    else{
        return null;
    }
}

export const getCurrentUser=()=>{
    if(checkLogin()){
        const user=encryptStorage.getItem("data").user;
        return user;
    }
    else{
        return "No user logggedin";
    }
}

export const getUserRole=()=>{
    if(checkLogin()){
        const user=encryptStorage.getItem("data").user;
        const userRole=user.role.map(roles => roles.name)
        return userRole;
    }
    else{
        return "i am sorry";
    }
}

export const enorders=(res)=>{
    encryptStorage.setItem("res",JSON.stringify(res));
}

export const checkdelivery=()=>{
    const res=encryptStorage.getItem("res");    
     if(res.orderDelivered==null){
        return false;
     }    
    return true;
}

export const outdelivery=(next)=>{
    encryptStorage.removeItem("res");
     next();
}

export const setcartItems=(cart)=>{
    encryptStorage.setItem("cart",JSON.stringify(cart));
}

export const getCartItems=()=>{
    const item=encryptStorage.getItem("cart");
    return item;
}

export const setOrderlocal=(order)=>{
    encryptStorage.setItem("order",JSON.stringify(order));
}
export const getOrderlocal=()=>{
    const order=encryptStorage.getItem("order");

    if(order.orderId==undefined)
    return "no";

    return order;
}
