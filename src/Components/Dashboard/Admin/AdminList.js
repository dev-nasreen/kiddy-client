import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import VerticalSidebar from '../Sidebar/VerticalSidebar';

const AdminList = () => {
const {adminList} = useParams();
const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-caverns-93848.herokuapp.com/adminList`)
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [])
    return (
        <>
       
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
                   </>
    );
};

export default AdminList;