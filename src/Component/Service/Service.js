import React from 'react';
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Service = () => {
    const details =[
        {
            name:"City Transfer",
        },
        {
            name:"Hospital transfer",
        },
        {
            name:"Village Tour",
        }
    ]
    return (
        <div className="container mt-4  text-center">
            <h5 style={{color:'#FA8072'}}>See Our</h5>
            <h2  ><b> Latest Services </b></h2>
            <div className="row mt-5">
                {
                 details.map(detail => <ServiceDetails detail={detail}></ServiceDetails>)
                }
            </div>
            
        </div>
    );
};

export default Service;