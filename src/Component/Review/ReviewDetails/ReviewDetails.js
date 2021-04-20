import React from 'react';

const ReviewDetails = ({review}) => {
    return (
        <div className="col-md-4">
            <div className="mt-4 bg-success rounded text-white p-2">
                <h1>{review.name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, voluptas!</p>
            </div>
            </div>
             
    );
};

export default ReviewDetails;