import React from "react";
import Menu from "./Menu";
import Footer from "./Footer"
import "./core.css"
const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="bg-dark  text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>


<Footer />


  </div>


);

export default Base;
