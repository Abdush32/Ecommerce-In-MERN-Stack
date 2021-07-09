import React, { useState } from 'react'
import { isAuthenticate } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/CartHelper';
import StripeCheckoutButton from 'react-stripe-checkout';
import { API } from '../backend';
import { createOrder } from './helper/orderHelper';
import "./core.css";


const StripeCheckout = ({products,setReload =  f => f, reload = undefined}) => {
const [data,setData] = useState({
    loading:false,
    success:false,
    error:"",
    address:""
})

const token = isAuthenticate() && isAuthenticate().token
const userId = isAuthenticate() && isAuthenticate().user._id

const getFinalPrice = () => {
 let amount = 0;
 products.map(p => {
     amount = amount + p.price
 })
 return amount;
}

const makePayment = token =>{
    const body = {
        token,
        products
    }
    const headers =  {
        "Content-Type":"application/json"
    }
    return fetch(`${API}/stripepayment`,{
        method:"POST",
        headers,
        body:JSON.stringify(body)
    }).then(response =>{
console.log("RESPONSE",response);

//  createOrder(userId, token, orderData); 
          cartEmpty(() => {
            console.log("Did we got a crash?");
          });

          setReload(!reload);
const {status} = response;
console.log("STATUS",status);
    }).catch(err => console.log(err))
}

const showStripeButton = () => {
return (
    products.length > 0 ?( <StripeCheckoutButton 
        stripeKey="pk_test_51J5w1OSDxwflDMzIyhITUQ5LcWFXlapMqv6D4p5KppjFoEhoLi3S6Cz5nX3ezgscCtxuv7zlj7jF7vcbHSmOGuOx00f0gt8Dk3"
                token={makePayment}
                amount={getFinalPrice() *100}
                name="Buy T-shirts"
                shippingAddress
                billingAddress
                >
                <button className="btn btn-md stripebtn out mt-2 mb-2">pay with Stripe</button>
              </StripeCheckoutButton>) : (  <h3></h3>)
)
   
}



   return (
        <div>
            <h3>Your bill is ${getFinalPrice()}</h3>
            {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;
