import React, { Component } from "react";
import Slider from "react-slick";
import b1 from "../UIpic/b1.jpg";
import b2 from "../UIpic/b2.jpg";
import b3 from "../UIpic/b3.jpg";
import b4 from "../UIpic/b4.jpg";
import b5 from "../UIpic/b5.jpg";
import b6 from "../UIpic/b6.jpg";
import bewakoof from "../UIpic/bewakoof.jpg";
import bewakoof2 from "../UIpic/bewakoof2.jpg";
export default class Responsive extends Component {
  render() {
    var settings = {
    
        infinite: true,
        slidesToShow: 2,
      slidesToScroll: 1,
      
        autoplay: true,
        autoplaySpeed: 2200,
        pauseOnHover: true
     
    };
    return (
      <div className="crow">
     
        <Slider {...settings}>
          <div style={{width:100}}>
         <img src={bewakoof} className="img-fluid"/>
          </div>
          <div  style={{width:100}}>
          <img src={bewakoof2}  className="img-fluid" />
          </div>
        
       
     
  
      
        </Slider>
      </div>
    );
  }
}