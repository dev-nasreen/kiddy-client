import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';
import ManageServiceList from './ManageServiceList';

const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/availableServices`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section style={{ backgroundColor: '#ededed', padding: '100px 0' }}>
            <div className="container">
                <div className="row">
                    <VerticalSidebar></VerticalSidebar>
                    <div className="col-md-8 mTop">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;