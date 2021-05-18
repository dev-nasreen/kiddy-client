import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';

const OrderList = () => {
    const { orderList } = useParams();
    const [loggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`https://whispering-caverns-93848.herokuapp.com/orders/?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])





    // Change orders status from database
    const [status, setStatus] = useState('');
    useEffect(() => {
        fetch('https://whispering-caverns-93848.herokuapp.com/update', {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => data)
    }, [status])



    console.log(status);

    return (
        <>

            <h3 className="py-2 text-center">All orders</h3>

            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"> # SL</th>
                        <th scope="col"> Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Pay with</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>${order.email}</td>
                                <td>{order.serviceName}</td>
                                <td>Credit card</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {order.status}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li onClick={() => setStatus({ status: 'pending', id: order._id })}>Pending</li>
                                            <li onClick={() => setStatus({ status: 'Done', id: order._id })}>Done</li>
                                            <li onClick={() => setStatus({ status: 'On going', id: order._id })}>On going</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {/* <h3 className="py-2 text-center">You have no orders</h3> */}

        </>
    );
};

export default OrderList;
