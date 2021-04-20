import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const url ='https://hidden-brook-46366.herokuapp.com/addAdmin';
    fetch(url,{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => console.log('database respond ' , res))
  };
    return (
        <div>
             <h2>you can Add admin </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} placeholder="email" /> <br/> <br/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddAdmin;