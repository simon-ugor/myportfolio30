import React from "react"

const Top = (props) => {

    const aboutMeClick = (event) => {
        props.aboutMe(event)
    }

    const myCvClick = (event) => {
        props.myCv(event)
    }

    const contactMeClick = (event) => {
        props.contactMe(event)
    }

    return (
        <div className="top-div">
            <button onClick={aboutMeClick} className="button">About Me</button>
            <button onClick={myCvClick} className="button">My CV</button>
            <button onClick={contactMeClick} className="button">Contact Me</button>
        </div>
    )
}

export default Top