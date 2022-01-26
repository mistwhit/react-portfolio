import React from "react";
import headshot from '../../assets/images/misty-whitenton-1.jpg';

const Home = () => {
    return (
        <div>
            <div className="home container text-center justify-content-center">
                <h1 className="home-text mb-1">MISTY WHITENTON</h1>
                <h3 className="mb-5"><em>Full-Stack Developer and Musician</em></h3>
                <div className=" text-center">
                    <img src={headshot} alt="Headshot1" className="headshot1 img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Home;