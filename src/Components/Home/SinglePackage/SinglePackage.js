import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({detail}) => {
    const {serviceName, price, description, imageUrl, _id} = detail;
    return (
        <div className="col-md-4">
            <div className="card mb-3" >
                <div className="service-img">
                    <img src={detail.imageUrl} className="card-img-top " alt="" style={{height:'250px', width:'100%'}} />
                </div>
               
                <div className="card-body">
                    <h5 className="card-title" style={{color:'#6DD0D0'}}>{detail.serviceName}</h5>
                    <p className="card-text text-secondary ">{detail.description}</p>
                    <div className="d-flex justify-content-between"><p><strong>Price: ${detail.price}</strong></p> <p><Link  to={"/dashboard/book/"+ _id} className={`btn btn-warning custom-btn`}>Buy now</Link></p></div>
                    
                </div>
                </div>
        </div>
    );
};

export default SinglePackage;