import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="f-about mb-4">
                            <h5 style={{color:'#FD4D40'}}>About Us</h5>
                            <p>Far far away, behind the word mountains,
                                 far from the countries Vokalia and Consonantia,
                                  there live the blind texts.</p>
                        </div>
                        <div className="f-newsletter">
                        <h5 style={{color:'#FD4D40'}}>Newsletter</h5>
                        <div class="input-group mt-3">
                            <input type="text" class="form-control" placeholder="Email"  />
                            <span class="input-group-text btn btn-danger" id="basic-addon2">Send</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-2">
                        <div className="navigation">
                        <h5 style={{color:'#FD4D40'}}>Navigation</h5>
                        <ul>
                            <li><Link to="/">About Us </Link></li>
                            <li><Link to="/"> Testimonials</Link></li>
                            <li><Link to="/">Terms of Service </Link></li>
                            <li><Link to="/">Privacy </Link></li>
                            <li><Link to="/"> Contact Us</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="navigation">
                        <h5 style={{color:'#FD4D40'}}>Navigation</h5>
                        <ul>
                            <li><Link to="/">About Us </Link></li>
                            <li><Link to="/"> Testimonials</Link></li>
                            <li><Link to="/">Terms of Service </Link></li>
                            <li><Link to="/">Privacy </Link></li>
                            <li><Link to="/"> Contact Us</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12 mt-5">
                        <div className="border-top  border-secondary text-center pt-5">
                            <p>Copyright ©2021 All rights reserved | This template is made by Nasreen </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;