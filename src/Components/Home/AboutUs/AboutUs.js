import React from 'react';
import children from '../../../images/children.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className="about-area">
 <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={children} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-6 ">
                <p className="welcome-title">About us</p>
                <h3>Bring Fun Life To Your Kids</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Et harum, magni sequi nostrum maxime enim.Magnam id atque dicta deleniti,
                     ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</p>

                    <button className="btn btn-warning">More about us</button>
                </div>
            </div>
        </div>
        </section>

       
    );
};

export default AboutUs;