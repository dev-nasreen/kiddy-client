import React, { useContext } from 'react';
import { FaGripHorizontal } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
import { FaPlus} from 'react-icons/fa';
import { ImUserPlus} from 'react-icons/im';
import { FaCog} from 'react-icons/fa';
import { FiShoppingCart} from 'react-icons/fi';
import { BiShoppingBag} from 'react-icons/bi';
import { MdRateReview} from 'react-icons/md';
import { AiOutlineLogout} from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import './Sidebar.css'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
   const handleSignOut =()=>{
    setLoggedInUser({});
    sessionStorage.removeItem('token')
    history.push('/')
   }
    return ( <div className="col-md-3">
    <div className="sidebar  ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex flex-column">
                <Link className="navbar-brand site-logo" to="/">Kiddy.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-column ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/dashboard"><FaGripHorizontal /> <span>Dashboard</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><FaHome /> <span>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orderList"> <FaListAlt/> <span>Order List</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addServices"><FaPlus/> <span>Add Services</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/makeAdmin"><ImUserPlus /> <span>Make Admin</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manageServices"><FaCog /> <span>Manage Services</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book"><FiShoppingCart/> <span>Book</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bookingList"><BiShoppingBag/> <span>Booking List</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/review">  <MdRateReview/> <span>Review</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bookingList"> {
                                loggedInUser &&  <p style={{cursor:'pointer'}} onClick={handleSignOut}><AiOutlineLogout />Logout </p>
                        } </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
    );
};

export default Sidebar;