import React from "react";
import logo from "../media/logo-web-developer.png";
import "../stylesheets/Logo.css"

export default function Logo() {

    return  (
        <div className="logo">
            <img className="logo-image" src={logo} alt="logotipo"/>
        </div>
    )   
}