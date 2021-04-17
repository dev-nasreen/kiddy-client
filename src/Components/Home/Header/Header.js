import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderTop from '../HeaderTop/HeaderTop';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                    <HeaderTop></HeaderTop>
                    <Navbar></Navbar>
                    <HeaderMain></HeaderMain>
                
            </div>
        </div>

    );
};

export default Header;