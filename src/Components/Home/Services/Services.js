import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaSnowman } from 'react-icons/fa';
import { GiCampingTent } from 'react-icons/gi';

import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const services = [
        {
            icon: <FaHome/>,
            title: "Indoor Games",
            background: "danger"
        },
        {
            icon: <FaSnowman/>,
            title: "Outdoor Game And Event",
            background: "yellow"
        },
        {
            icon: <GiCampingTent/>,
            title: "Camping for Kids",
            background: "teal"
        }
    ]
    return (
        <div className="container ">
            <div className="row mTop">
            <p className="welcome-title text-center py-4">Our Services</p>

                {
                    services.map(service => <ServiceDetail service={service} key={service.title}></ServiceDetail>)
                }
            </div>

        </div>
    );
};

export default Services;