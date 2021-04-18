import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import VerticalSidebar from '../Sidebar/VerticalSidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    
    useEffect(()=> {
        fetch(`https://whispering-caverns-93848.herokuapp.com/orders/?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [loggedInUser.email])


console.log(orders);

    // Change orders status from database
    const ordersStatus = (id) => {
        const status = document.getElementById("status").value;
        const updateInfo = { id, status };
        console.log(updateInfo);
        fetch(`https://whispering-caverns-93848.herokuapp.com/updateStatus`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('Successfully Updated')
            })
    }



    return (
        <section style={{ backgroundColor: '#ededed', padding: '100px 0' }}>
            <div className="container">
                <div className="row">
                    <VerticalSidebar></VerticalSidebar>
                    <div className="col-md-8 mTop">
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

                                            <th scope="col">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map((order, index) => <tr key={order._id}>
                                                <td>{index + 1}</td>
                                                <td>{order.name}</td>
                                                <td>${order.email}</td>


                                                <td>{order.serviceName}</td>
                                                <td>Credit card</td>
                                                <td>
                                                    <select onChange={() => ordersStatus(order._id)} id="status" class="form-select mb-3">
                                                        <option selected>{order.status}</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="In-progress">In-progress</option>
                                                        <option value="Done">Done</option>
                                                    </select>
                                                </td>

                                                {/* <td>{order.status}</td> */}

                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            
                            {/* <h3 className="py-2 text-center">You have no orders</h3> */}
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderList;
