import React from "react";


export default function Card(props)
{
    return (
        <div className="card">
            <div>
            <a href={props.link}>
                <img alt="card-photo" src={props.img} className="card-image" />
            </a>
            <div className="card-stats">
                <p>{props.title}</p>
            </div>
            </div>
        </div>

    );

}