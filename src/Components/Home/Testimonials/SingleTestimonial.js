import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const SingleTestimonial = ({cReview}) => {
    const {serviceName, review,name, email, img} = cReview;
    return (
        <div className="col-md-4">
            <div class="card text-center  py-5" >
                <div>
                    <img src={img} class="card-img-top" alt="" />
                </div>
               
                <div class="card-body">
                    <h5 class="card-title" style={{color:'#6DD0D0'}}>{serviceName}</h5>
                    <p class="card-text text-secondary">{review}</p>
                    <p style={{color:'yellow'}}><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar/></p>
                </div>
                </div>
        </div>
    );
};

export default SingleTestimonial;