import React from 'react';
import About from '../../About/About';
import Message from '../../Message/Message';
import Review from '../../Review/Review';
import Service from '../../Service/Service';
import HomeMain from '../HomeMain/HomeMain';
const Home = () => {
    return (
        <div>
            <HomeMain/>
            <Service/>
            <About></About>
            <Review/>
            <Message/>
        </div>
    );
};

export default Home;