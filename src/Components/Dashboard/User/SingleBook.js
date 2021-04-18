import React from 'react';

const SingleBook = ({ book }) => {
    return (
        <div className="col-md-12 mb-3">
            <div style={{ backgroundColor: '#fff', padding: '20px' }}>
                <h3>{book.serviceName}</h3>
                <p>{book.description}</p>
                <div><p>Price: ${book.price}</p> <p>Pending</p></div>
               
            </div>

        </div>

    );
};

export default SingleBook;