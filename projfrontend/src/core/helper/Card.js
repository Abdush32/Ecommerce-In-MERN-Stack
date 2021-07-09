import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { addItemToCart, removeItemFromcart } from './CartHelper';
import Imagehelper from './Imagehelper'
import "../core.css"
const Card = ({product,
addtoCart = true,
removeFromcart = false,
setReload = f => f, 
// function(f){return f}
reload= undefined
}) => {

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)



const cardTitle = product ? product.name : "A photo from pexels"
const cardDescription = product ? product.description : "Default Description"
const cardPrice =  product ? product.price : "Default"

const addToCart = () => {
    addItemToCart(product, () => setRedirect(true))
}
const getARedirect = (redirect) => {
    if(redirect){
        return <Redirect to="/cart" />
    }
}




const showAddToCart = addtoCart =>{
 return (
     addtoCart && (
        <button
        onClick={addToCart}
        className="btn btn-md btnwa out mt-2 mb-2"
      >
        Add to Cart
      </button>
     )
 )
}

const showRemoveFromCart = removeFromCart =>{
    return(
        removeFromCart && (
            <button
            onClick={() => {
              removeItemFromcart(product._id)
              setReload(!reload)
              
            }}
            className="btn btn-md btnwa out mt-2 mb-2"
          >
            Remove from cart
          </button>
        )
    )
}


    return (
        <div className="card text-white bg-dark border border-danger ">
          <div className="card-header lead">{cardTitle}</div>
          <div className="card-body">
          {getARedirect(redirect)}
            <Imagehelper product={product} />
            <p className="lead  font-weight-normal text-wrap">
            {cardDescription}
            </p>
            <p className="btn btn price rounded  btn-sm px-4">{cardPrice}$</p>
            <div className="row">
              <div className="col-12">
              {showAddToCart(addtoCart)}
              </div>
              <div className="col-12">
             {showRemoveFromCart(removeFromcart)}
              </div>
            </div>
          </div>
       
        </div>
      );
}

export default Card
