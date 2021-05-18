import React from 'react';

const SingleBook = ({ book }) => {
    return (
        <div className="col-md-12 mb-3">
            <div style={{ backgroundColor: '#fff', padding: '20px' }}>
                <h3>{book.serviceName}</h3>
                <p>{book.description}</p>
                <div><p>Price: ${book.price}</p> <span style={{padding:'10px 20px', display:"inline-block", color:'#fff', backgroundColor:"#FD4D40"}}>{book.status}</span></div>
               
            </div>

        </div>

    );
};

export default SingleBook;