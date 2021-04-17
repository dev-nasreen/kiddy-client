import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 service-card text-white">
            <div className={`text-center info-container info-${service.background}`} >
            <span class="wrap-icon">
                <span class="icon"><h4>{service.icon}</h4></span>
                </span>
            
            <h5>{service.title}   </h5>
            <p style={{color:'rgba(255,255,255,.7)'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odit ratione voluptates, reiciendis amet doloribus dicta!</p>
            </div>
            
            </div>
    );
};

export default ServiceDetail;