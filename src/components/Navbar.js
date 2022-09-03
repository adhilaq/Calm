import React from "react";
import Meditate from "../images/meditate.jpg";

export default function Navbar()
{
    return (
        <nav className="navbar">
            <img alt="meditate" src={Meditate} className="meditate-image" />
        </nav>

    );
}