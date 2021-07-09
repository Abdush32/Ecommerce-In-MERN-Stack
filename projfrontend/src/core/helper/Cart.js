import React, { useState, useEffect } from "react";
import ReactImageMagnify from 'react-image-magnify';
import Base from "../Base";
import PaypalCheckout from "../PaypalCheckout";
import StripeCheckout from "../StripeCheckout";
import "../core.css"
import Card from "./Card";
import { loadCart } from "./CartHelper";


const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);


  const loadAllProducts = (products) => {
    return (
      <div>
        <h2 style={{color:"#AE45FF"}}>List of Products:{products.length}</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromcart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
   
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2></h2>
      </div>
    );
  }; 

  return (
    <Base title="" description="">
    <center><h5 className="readycheckout">Ready to checkout</h5></center>
    <hr/>
      <div className="row text-center">
<div className="col-lg-4 col-md-6 col-sm-12">{ products.length > 0 ? (loadAllProducts(products)) :
   ( <h3>No Products In Cart</h3> )} </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <StripeCheckout 
        products={products}
        setReload={setReload} />

        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
  
        <PaypalCheckout
        products={products}
        setReload={setReload}/>
        </div>
 
      </div>
    </Base>
  );
};

export default Cart;
