import React, { useContext, useEffect, useState } from 'react';
import { FaGripHorizontal } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { ImUserPlus } from 'react-icons/im';
import { FaCog } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';
import { MdRateReview } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useHistory, useRouteMatch, Route } from 'react-router-dom';
import { UserContext } from '../../../App';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import AddServices from '../Admin/AddServices';
import MakeAdmin from '../Admin/MakeAdmin';
import AdminList from '../Admin/AdminList';
import OrderList from '../Admin/OrderList';
import BookingList from '../User/BookingList';
import ManageServices from '../Admin/ManageServices';
import Review from '../User/Review';
import Book from '../User/Book';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    console.log(path, url);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://whispering-caverns-93848.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])


    const history = useHistory();
    const handleSignOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token')
        history.push('/')
    }
    return (
        <section style={{ backgroundColor: '#ededed', height: '100vh', paddingTop: "100px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="sidebar">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid d-flex flex-column">
                                    <Link className="navbar-brand site-logo" to="/">Kiddy.</Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav d-flex flex-column ">

                                            <li className="nav-item">
                                                <Link className="nav-link" to="/"><FaHome /> <span>Home</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/BookingList`}><BiShoppingBag /> <span>Booking List</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/reviews`}>  <MdRateReview /> <span>Review</span></Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/addServices`}><FaPlus /> <span>Add Services</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/makeAdmin `}><ImUserPlus /> <span>Make Admin</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/adminList`}><ImUserPlus /> <span>Admin List</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/orderList`}><ImUserPlus /> <span>Order List</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`${url}/manageServices`}><FaCog /> <span>Manage Services</span></Link>
                                            </li>


                                            <li className="nav-item">
                                                <Link className="nav-link" to="/"> {
                                                    loggedInUser && <p style={{ cursor: 'pointer' }} onClick={handleSignOut}><AiOutlineLogout />Logout </p>
                                                } </Link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <Switch>
                            <Route exact path={`${path}`}>
                            <OrderList />
                            </Route>
                            <Route path={`${path}/orderList`}>
                                <OrderList />
                            </Route>
                            <Route path={`${path}/adminList`}>
                                <AdminList />
                            </Route>
                            <Route path={`${path}/book/:_id`}>
                                <Book />
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </Route>
                            <Route path={`${path}/addServices`}>
                                <AddServices />
                            </Route>
                            <Route path={`${path}/bookingList`}>
                                <BookingList />
                            </Route>
                            <Route path={`${path}/manageServices`}>
                                <ManageServices />
                            </Route>
                            <Route path={`${path}/reviews`}>
                                <Review />
                            </Route>


                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;