import React from "react";
import "../stylesheets/ButtonAndImageWrapper.css"
import texture from "../media/pattern.jpg"
import curriculum from "../media/Desenvolvedor_front_end_-_Viktor_Nespolo_Peixoto.pdf"

export default function ButtonAndImageWrapper() {

    return  (
        <div className='button-wrapper'>
            <a className="button-image-wrapper--button button--text_style button--text_style__hover" href={curriculum}>Currículo</a>
            <div className="button-image-wrapper--button button--contact button--text_style">
                <div className="button-image-wrapper--button__content">
                    +55 19 998572098 <br />
                    info@vitonespolo.dev
                </div>
                Contato
            </div>
            <img className="button-image-wrapper--image" src={texture} />
            </div>
    )   
}