import React, { useEffect, useState } from 'react';
import './Packages.css'
import SinglePackage from '../SinglePackage/SinglePackage';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch('https://whispering-caverns-93848.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <section className="package-area">
            <div className="container">
                <div className="row text-center pd">
                <p className="welcome-title">Our Packages</p>
                <h3 style={{color:'#cdcdcd'}}>Packages You like</h3>
                </div>
                <div className="row">
                    {
                        packages.map(detail => <SinglePackage detail={detail} key={detail._id}></SinglePackage>)
                    }
                </div>
            </div>
        </section>
       
    );
};

export default Packages;