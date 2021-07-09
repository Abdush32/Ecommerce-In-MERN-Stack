import React from 'react'
import { Link} from "react-router-dom";
import payment from "../UIpic/payment.png"
import android from "../UIpic/android.png"
import apple from "../UIpic/apple.png"
const Footer = () => {
    return (
    
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fa fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Mp Nagar Bhoapl 462021</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fa fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>98365788898878</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fa fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>abdushs54@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html" />
                            </div>
                            <div className="footer-text">
<p>!Hi I am Abdush CEO of this Website and software Engineer by Profession: we sells Online T-shirt a fine quality product Trending T-shirt we provide
Thanks :)
</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fa fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fa fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fa fa-instagram instagram-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h6>Customer Service</h6>
                            </div>
                            <ul>
                                <li><a href="">Contact us</a></li>
                                <li><a href="#">Cash on Delivery</a></li>
                                <li><a href="#">15 days Return Policy</a></li>
                                <li><a href="#">Cancel Order</a></li>
                
                         
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h6>Secure Payment</h6>
                            </div>
                            <div className="footer-text mb-25">
<Link><img src={android} /></Link> &nbsp;
<Link><img src={apple} /></Link>
                                <img src={payment}  />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="">Abdush</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>

    )
}

export default Footer
