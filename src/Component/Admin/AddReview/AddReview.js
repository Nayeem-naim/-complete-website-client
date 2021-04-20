import React from 'react';
import { useForm } from "react-hook-form";
const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    const reviewData =
            {
        name: data.name,
        price: data.message
      }
    const url = 'https://hidden-brook-46366.herokuapp.com/addReview';
    fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(reviewData)
    })
        .then(res => console.log('database respond ', res))
};
return (
    <div>
        <h2>Send Your Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="mb-3" name="name" placeholder="your Name" {...register("name")} /> <br />
            <textarea className="mb-3" name="message" placeholder="Your Message" {...register("message")} /> <br />
            <input type="submit" />
        </form>
    </div>
);
};

export default AddReview;