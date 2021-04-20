import React from 'react';

const About = () => {
    return (
        <div className="container text-center mt-5 mb-2 ">
            <h2 style={{color:'#C0392B '}}>About Us </h2>
            <div className="row mt-5 p-3 bg-dark d-flex justify-content-center align-items-center rounded" >
                <div className="col-md-5 m-3"  >
                    <div className="bg-primary h-75 rounded p-3 m-3">
                    <img className="w-100 h-100"   src='https://i.ibb.co/BCGhLd3/Aboutpik.jpg' alt=""/>
                    </div>
                    
                </div>
                <div className="col-md-5 m-3">
                    <div className="bg-primary rounded p-3 m-3">
                    <h1>Welcome To  Agota TourService</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique atque dolor nobis itaque tempora iure delectus. Magnam, omnis atque.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;