import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';
import SingleBook from './SingleBook';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders?email=${loggedInUser.email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [loggedInUser.email]);
    useEffect(() => {
        fetch('http://localhost:5000/orders/' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email]);

   
    return (
        <section style={{ backgroundColor: '#ededed', padding: '100px 0' }}>
            <div className="container">
                <div className="row">
                    <VerticalSidebar></VerticalSidebar>
                    <div className="col-md-8 mTop">
                        <div className="row">
                            {
                               orders.map(order =>
                                   <SingleBook book={order} key={order._id}></SingleBook> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;