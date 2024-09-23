import React from "react";
import "../stylesheets/ButtonAndImageWrapper.css"
import texture from "../media/pattern.jpg"

export default function ButtonAndImageWrapper() {

    return  (
        <div className='button-wrapper'>
            <button className="button-image-wrapper--button">Currículo</button>
            <button className="button-image-wrapper--button">Contato</button>
            <img className="button-image-wrapper--image" src={texture} />
            </div>
    )   
}