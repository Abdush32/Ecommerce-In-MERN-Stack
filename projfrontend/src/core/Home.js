import React, { useEffect, useState } from 'react'
import { API } from '../backend';
import "../styles.css";
import Crousel from "./Crousel"
import Trendingslider from "./Trendingslider"
import bewakoof from "../UIpic/bewakoof.jpg";
import bannerdown from "../UIpic/banner down.jpg";
import long1 from "../UIpic/long2.png";
import Base from './Base';
import Card from './helper/Card';
import getProducts from './helper/coreapicalls';



const Home = () => {
  console.log("API IS", API);
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProducts = () =>{
    getProducts().then(data =>{
      if(data.error){
        setError(data.error)
      }
      else{
        setProducts(data)
      }
    })
  }

useEffect(() => {
 loadAllProducts();
}, [])
  
    return (
      <div>
<br/>
<br/>
<br/>
      <Crousel/>

      <Base title="" description="" style={{backgroundColor:" #0A0A0A"}}>

      <div className="row text-center">
      <img src={bannerdown}  className="img-fluid"/>
        <h1 className="text-white">All T-shirts</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
     
      <div className="container-fluid">
      <img src={long1} className="img-fluid" style={{width:'100%'}} />


</div>
<Trendingslider />
    </Base>
    
    </div>
    )
}

export default Home
