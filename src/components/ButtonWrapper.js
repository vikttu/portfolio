import React from "react";
import "../stylesheets/ButtonWrapper.css"

export default function ButtonWrapper() {

    return  (
        <div className='button-wrapper'>
            <a className="button--text_style button--text_style__hover" href="https://github.com/vikttu">GitHub</a>
            <a className="button--linkedin button--text_style button--text_style__hover" href="https://www.linkedin.com/in/viktor-n-511b05148/">Linkedin</a>
            <a className="button--blog button--text_style button--text_style__hover" href="https://dev.to/vikttu">Blog</a>
            <a className="button--text_style button--text_style__hover" href="https://dev.to/vikttu/projects-13o8">Projetos</a>
        </div>
    )   
}