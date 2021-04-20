import React, { useState,useEffect } from 'react';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const Review = () => {
    const[reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
           .then(res => res.json())
           .then(data => setReviews(data))
    })
      console.log(reviews);
    return (
        <div className="container text-center  mt-4 mb-4">
            <h1>Testimonial</h1>
            <div className="row">
           {
               reviews.map(review => <ReviewDetails review={review}></ReviewDetails>)
           }
            </div>
        </div>
    );
};

export default Review;