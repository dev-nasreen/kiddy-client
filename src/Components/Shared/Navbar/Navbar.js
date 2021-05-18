import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { IoMdLogIn } from 'react-icons/io';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light menu-wrap">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto py-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: '#C82333' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/packages">Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="login-btn nav-item"> {
                            loggedInUser.email ?<span className="nav-link">{loggedInUser.name}</span>  :  <Link className="nav-link" to="/login">Login</Link>
                            } </p>
                        
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;
