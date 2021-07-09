import { API } from "../../backend";

export const createOrder = (userId,token,orderData) =>{
    return fetch(`${API}order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
           "content-type" : "application/json",
           Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: orderData}) 
       }).then(response =>{
           return response.json()
       }).catch(error => console.log(error))
}

export const cartEmpty = next =>{
    if(typeof window !== undefined){
        localStorage.removeItem("cart")
    }
}