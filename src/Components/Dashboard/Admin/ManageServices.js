import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';
import ManageServiceList from './ManageServiceList';

const ManageServices = () => {
    const {manageServices} = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-caverns-93848.herokuapp.com/availableServices`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
        <h2>{manageServices}</h2>

      
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => <ManageServiceList service={service} key={service._id}></ManageServiceList>)
                            }
                        </tbody>
                    </table>
        
         </>          
    );
};

export default ManageServices;