import React, { useEffect, useState } from 'react';
import VerticalSidebar from '../Sidebar/VerticalSidebar';

const AdminList = () => {

const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-caverns-93848.herokuapp.com/adminList`)
            .then(res => res.json())
            .then(data => setAdmins(data))
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
                                    <th scope="col">Admin List </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    admins.map(admin =>
                                        <tr>
                                            <td >{admin.email} </td>
                                        </tr>
                                        )
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminList;