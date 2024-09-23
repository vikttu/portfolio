import React from "react";
import profilePicture from "../media/profile-image-portfolio.jpg";
import "../stylesheets/ProfilePicture.css";

export default function ProfilePicture() {

    return  (
        <div className='profile-picture'>
            <img className="profile-picture-image" src={profilePicture} alt="Imagem de perfil" />
        </div>
    )   
}