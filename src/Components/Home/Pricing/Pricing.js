import React from 'react';
import SinglePrice from '../SinglePrice/SinglePrice';
import './Pricing.css'

const Pricing = () => {
    const pricingData = [
        {
            price: 30,
            name:"Silver Pack",
            btn:"teal"
        },
        {
            price: 70,
            name:"Golden Pack",
            btn:"brand"
        }
    ]
    return (
        <section className="mTop">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <p className="welcome-title">Pricing Plane</p>
                    <h3>Our Pricing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nemo quis cupiditate fugit, 
                        voluptatibus ullam, non laboriosam alias veniam, ex inventore iure sed?</p>
                </div>
                {
                   pricingData.map(data => <SinglePrice data={data} key={data.name}></SinglePrice>) 
                }
            </div>
        </div>
        </section>
        
    );
};

export default Pricing;