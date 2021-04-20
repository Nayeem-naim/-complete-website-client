import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails/ServiceDetails';


const Service = () => {
    const [services,setServices] = useState([])
    const url = 'http://localhost:5000/service'
    useEffect(()=>{
         fetch(url)
         .then(res =>res.json())
         .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <div className="container mt-4  text-center">
            <h5 style={{color:'#FA8072'}}>See Our</h5>
            <h2><b> Latest Services </b></h2>
            <div className="row mt-5">
                {
                 services.map(detail => <ServiceDetails detail={detail}></ServiceDetails>)
                }
            </div>
            
        </div>
    );
};

export default Service;