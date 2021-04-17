import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';
import { FaRegClock } from 'react-icons/fa';
import './HeaderTop.css'


const HeaderTop = () => {
    return (
        <div className="row align-items-center py-3">
        <div className="col-md-3">
            <div className="site-logo me-auto">
                <Link>Kiddy <span style={{color:'#dc3545',display:'inline-block', marginLeft:'-15px'}}>.</span></Link>
            </div>
        </div>
        <div className="col-md-4 d-flex site-info align-items-center mr-5 offset-md-1 ">
        <div className="quick-contact ms-auto">
        <p className="d-flex"> <span style={{color:'#FDB62F', fontSize:'2rem', display:'inline-block', marginRight:'5px'}}><ImLocation /></span><span className="text-white">34 Street Name, City Name Here, <br/> United States</span> </p>
          </div>     
        </div>   
        <div className="col-md-4 d-flex site-info align-items-center mr-5 ">
        <div className="quick-contact ms-auto">
        <p className="d-flex"> <span style={{color:'#C82333', fontSize:'2rem', display:'inline-block', marginRight:'5px'}}><FaRegClock /></span>
        <span className="text-white">Sunday - Friday 8:00AM - 4:00PM <br/>  Saturday CLOSED</span> </p>
              
            </div>
        </div>   
        
        </div>
    );
};

export default HeaderTop;