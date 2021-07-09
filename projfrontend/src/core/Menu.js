import React, { Fragment,useState,useEffect } from "react";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, withRouter } from "react-router-dom";
import { loadCart } from './helper/CartHelper';
import { isAuthenticate, signout } from "../auth/helper";
import "./core.css"
import Card from "./helper/Card"



const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};



const Menu = ({ history,setReload =  f => f, reload = undefined}) => {

  const [products, setProducts] = useState([])
  const [redirect, setRedirect] = useState(false)
  
  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);
  




  return (

  <div>
  <div className="container">
  <nav className="navbar navbar-expand-md  navbar fixed-top ml-auto"  id="nav_border" style={{backgroundColor:" #0A0A0A"}}>
  <Link className="navbar-brand" to="/" classname="Akart"><b>A</b>Kart</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
        <HomeIcon/>
        </Link>
      </li>
{ isAuthenticate() ? (<li className="nav-item">
<Link
  style={currentTab(history, "/cart")}
  className="nav-link"
  to="/cart">

  <ShoppingBasketIcon />  <span> 
</span>
</Link>

</li>) :("")}

      
          {/*user Dashboard*/}
     {isAuthenticate() && isAuthenticate().user.role === 0 &&(
      <li className="nav-item">
      <Link
        style={currentTab(history, "/user/dashboard")}
        className="nav-link"
        to="/user/dashboard"
      >
        U.Dashboard
      </Link>
    </li>
     )}
     {/*Admin Dashboard*/}
     {isAuthenticate() && isAuthenticate().user.role === 1 &&(
      <li className="nav-item">
      <Link
        style={currentTab(history, "/admin/dashboard")}
        className="nav-link"
        to="/admin/dashboard"
      >
     <DashboardIcon />
      </Link>
    </li>
     )}
      {/*when user is not Authenticate*/}
{!isAuthenticate() &&(


  <Fragment>
  <li className="nav-item">
    <Link
      style={currentTab(history, "/signup")}
      className="nav-link"
      to="/signup"
    >
      Signup
    </Link>
  </li>
  <li className="nav-item">
    <Link
      style={currentTab(history, "/signin")}
      className="nav-link"
      to="/signin"
    >
      Sign In
    </Link>
  </li>
  </Fragment>

)}



{isAuthenticate() && (
  <li className="nav-item">
<span className="nav-link text-warning"
   onClick={() =>{
     signout(() =>{
       history.push("/")
     })
   }}

>

<ExitToAppIcon />

</span>
</li>  
)}
    </ul>
    </div>
  </nav>


  </div>


</div>
)
};

export default withRouter(Menu);
