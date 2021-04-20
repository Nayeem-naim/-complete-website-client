import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddService = () => {
   const [image, setImage] = useState()
   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
    const serviceData = {
        name: data.name,
        price: data.price,
        imageURL : image
      }
      console.log(serviceData);
      const url ='http://localhost:5000/addService';
    fetch(url,{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(serviceData)
    })
    .then(res => console.log('database respond ' , res))
   };

    const handleImg = event =>{
        const imgData = new FormData();
            imgData.set('key', 'eeba1d45caf2859d4e95e34292d86ab0')
            imgData.append('image', event.target.files[0] )
            axios.post('https://api.imgbb.com/1/upload', 
            imgData)
             .then(function (response) {
               setImage(response.data.data.display_url);
            console.log(response.data.data.display_url);
             })
             .catch(function (error) {
               console.log(error);
             });
         }
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" name="name" defaultValue="service Name " {...register("name")} /> <br/>
      <input className="mb-3" name="price" defaultValue="service Price " {...register("price")}  /> <br/>
      <input className="mb-3" style={{marginLeft:"110px"}} name="image" {...register("image")} type="file" onChange={handleImg}/> <br/>
      <input type="submit" />
    </form>
       
        </div>
    );
};
export default AddService;
