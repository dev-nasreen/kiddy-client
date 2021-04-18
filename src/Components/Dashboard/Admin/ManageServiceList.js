import React, { useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaUserEdit } from 'react-icons/fa';

const ManageServiceList = ({service}) => {
    const {serviceName, price, _id} = service;
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const handleDeleteProduct = (id, event) => {
        fetch(`https://whispering-caverns-93848.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                setDeleteSuccess(result);
                console.log(event.target.parentNode);
            
            })
    }
    console.log(service);
    return (
        <tr className={deleteSuccess?'d-none':'d-table-row'}>
        <th>{serviceName}</th>
        <th>${price}</th>
        <th><span style={{ cursor: 'pointer', color:'red', marginRight:'5px' }}
         onClick={(event) => handleDeleteProduct(_id, event)}><RiDeleteBin6Fill /></span></th>
        <th> <span style={{ cursor: 'pointer', color:'#198754', marginLeft:'5px' }}><FaUserEdit /></span> </th>
    </tr>
    );
};

export default ManageServiceList;