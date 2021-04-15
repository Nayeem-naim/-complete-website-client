import React from 'react';

const ServiceDetails = ({detail}) => {
    const handleService = () => {
        console.log('wow click me');
    }
    return (
        <div onClick={handleService}  class="col-md-4">
            <div className="bg-dark text-white p-3 border border-4 rounded" style={{height:'200px'}}>
                <h2>{detail.name}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, libero ad itaque totam quod alias repudiandae, et ut quam doloribus distinctio vitae facere laboriosam impedit nulla nam, ratione repellendus magni?</p>
            </div> 
           
        </div>
    );
};

export default ServiceDetails;