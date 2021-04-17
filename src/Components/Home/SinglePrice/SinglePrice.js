import React from 'react';
import './SinglePrice.css'

const SinglePrice = ({ data }) => {
    return (
        <div className="col-md-4">
            <div class={`pricing ${data.btn}`}>
                <span class="price">
                    <span>$30</span>
                </span>
                <h3>{data.name}</h3>
                <ul class="ul-check list-unstyled teal">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipisicing elit</li>
                    <li>Nemo quis cupiditate</li>
                </ul>
                <p><button class={`btn btn-${data.btn} custom-btn mt-4`}>Buy Now</button></p>
            </div>
        </div>
    );
};

export default SinglePrice;