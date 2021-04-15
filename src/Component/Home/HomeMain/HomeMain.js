import React from 'react';
import image1 from '../../../images/daa0a774e717ef13a6d714104fb9b7d6.jpg'
import image2 from '../../../images/milky-way-2695569_960_720.jpg'
import image3 from '../../../images/modern-abstract-motion-banner-dark-background-colourful-light-76877365.jpg'

const HomeMain = () => {
    return (
        <div className="container mt-4">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active " style={{height:'400px'}}>
                        <img src={image1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item " style={{height:'400px'}}>
                        <img src={image2} class="d-block  w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" style={{height:'400px'}}>
                                <img src={image3} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
    );
};

export default HomeMain;