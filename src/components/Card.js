import React from "react";


export default function Card(props)
{
    return (
        <div className="card">
            <a href={props.link}>
                <img alt="card-photo" src={props.img} className="card-image" />
            </a>
            <div className="card-stats">
                <p>{props.type}</p>
                <p>Duration: {props.duration}</p>
            </div>
        </div>

    );

}