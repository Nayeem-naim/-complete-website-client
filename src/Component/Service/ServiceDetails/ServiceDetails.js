import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ detail }) => {
    return (
        <div class="col-md-4">
            <div className="bg-dark text-white p-3 border border-4 rounded" style={{ height: '400px' }}>
                <img src={detail.imageURL} style={{ height: '120px', width: '200px' }} alt="" />
                <h3>Service Name: {detail.name}</h3>
                <p>Price: {detail.price}$ one  day</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, libero ad itaque totam quod alias repudiandae, et ut quam doloribus distinctio?</p>
                <Link as={Link} to={`/order/${detail._id}`}><button className="btn btn-success">  Order</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;