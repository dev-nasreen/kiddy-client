import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import VerticalSidebar from '../Sidebar/VerticalSidebar';
//import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => { 
return (
    <section style={{ backgroundColor: '#ededed', padding:'100px 0' }}>
        <div className="container">
            <div className="row">
                <VerticalSidebar></VerticalSidebar>
                <div className="col-md-8 mTop">
                   
                </div>
            </div>
        </div>
    </section>
);
};

export default Dashboard;