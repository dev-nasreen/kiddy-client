import React, { useEffect, useState } from 'react';
import indoor from '../../../images/indoor.png'
import outdoor from '../../../images/outdoor.png'
import camp from '../../../images/camp.png'
import SingleTestimonial from './SingleTestimonial';
import './Testimonials.css'

const Testimonials = () => {
    // const reviews = [
    //     {
    //         icon:indoor,
    //         title:'Indoor Games',
    //         btn:"teal"
    //     },
    //     {
    //         icon:outdoor,
    //         title:'Outdoor Game and Event',
    //         btn:"warning"
    //     },
    //     {
    //         icon:camp,
    //         title:'Camping for Kids',
    //         btn:"brand"
    //     }
    // ]
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('https://whispering-caverns-93848.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <>
        <div className="testimonial-area">
             <div className="container">
                <div className="row text-center pd">
                <p className="welcome-title">Testimonial</p>
                <h3 style={{color:'#000'}}>What Our Client Says About Us</h3>
                </div>
                <div className="row">
                    {
                        reviews.map(review => <SingleTestimonial cReview={review} key={review._id}></SingleTestimonial>)
                    }
                </div>
               
            </div>
        </div>

        <div className="inspire-area">
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-white">Bring Fun Life To Your Kids</h2>
                </div>
                <div className="col-md-4 ">
                    <button className="btn btn-danger custom-btn float-end">GET STARTED</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Testimonials;
