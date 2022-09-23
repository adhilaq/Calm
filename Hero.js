import React from "react";
import Nature from "../images/main.jpg";

export default function Hero()
{
    return (
        <div className="hero">
            <img alt="nature" src={Nature} className="nature-image" />
            <h1 className="hero-header">Calming Experience</h1>
            <p className="hero-text">Meditate now, reduce anxiety and focus on the present</p>
            <h2>Audio</h2>
        </div>

    );

}