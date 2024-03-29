import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services,setServices] = useState([])
    const url = 'https://hidden-brook-46366.herokuapp.com/service'
    useEffect(()=>{
         fetch(url)
         .then(res =>res.json())
         .then(data => setServices(data))
    },[])
    const deleteProduct = (id)=>{
        fetch(`https://hidden-brook-46366.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(result => {
                    console.log("deleted successfully", result);
                })
      }
    return (
        <div>
            <h3>This is manage service  you can deleted Service </h3>
            {
                services.map(service => <li className="mb-3 mt-3">{service.name}  
                 <button onClick={() => deleteProduct(service._id)} className="btn btn-primary ms-3" >Deleted</button></li>
                 )
            }
        </div>
    );
};

export default ManageService;