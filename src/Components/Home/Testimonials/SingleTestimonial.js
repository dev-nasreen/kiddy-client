import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const SingleTestimonial = ({review}) => {
    return (
        <div className="col-md-4">
            <div class="card text-center  py-5" >
                <div>
                    <img src={review.icon} class="card-img-top" alt="" />
                </div>
               
                <div class="card-body">
                    <h5 class="card-title" style={{color:'#6DD0D0'}}>{review.title}</h5>
                    <p class="card-text w-75 mx-auto text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p style={{color:'yellow'}}><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar/></p>
                </div>
                </div>
        </div>
    );
};

export default SingleTestimonial;