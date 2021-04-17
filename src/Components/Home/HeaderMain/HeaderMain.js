import React from 'react';
import './HeaderMain.css'



const HeaderMain = () => {
    return (
        <div className="h-content d-flex align-items-center">
            <div className="col-md-12">
                <div className="welcome-text">
                <p className="welcome-title">Welcome To Our Website</p>
                <h3>Bring Fun Life To <br/> Your Kids</h3>
                <p className="text-white">Amazing Playground for your kids</p>
                </div>
                <button className="btn btn-brand custom-btn">Learn More</button>
            </div>
            
           
        </div>
    );
};

export default HeaderMain;