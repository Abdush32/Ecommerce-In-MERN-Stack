import React, { Component } from "react";
import Slider from "react-slick";
import one from "../UIpic/1.jpg"
import two from "../UIpic/2.jpg"
import three from "../UIpic/3.jpg"
import four from "../UIpic/4.jpg"
import five from "../UIpic/5.jpg"
import six from "../UIpic/6.jpg"

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2 className="text-center text-white">Trending Collections</h2>
        <Slider {...settings}>
          <div className="text-center">
           <img src={one} className="img-fluid" alt="1"/>
          </div>
          <div>
          <img src={two} className="img-fluid" alt="2"/>
          </div>
          <div>
          <img src={three} className="img-fluid" alt="3"/>
          </div>
          <div>
          <img src={four} className="img-fluid" alt="4"/>
          </div>
          <div>
          <img src={five} className="img-fluid" alt="5"/>
          </div>
          <div>
          <img src={six} className="img-fluid" alt="6"/>
          </div>
        </Slider>
      </div>
    );
  }
}