import React, { useState } from "react"

// importing Router to download CV
import { Link as RouterLink } from "react-router-dom";

// importing CV
import CVen from "./../files/CVen.pdf"
import CVsk from "./../files/CVsk.pdf"

// importing emailJS library
import emailjs from "emailjs-com"

const Myname = (props) => {

    const [formOpacity, setFormOpacity] = useState(1)
    const [sendingDiv, setSendingDiv] = useState("none")

    function sendEmail(e) {
        e.preventDefault();
        setFormOpacity(0)
        setSendingDiv("flex")
        emailjs.sendForm('service_xhpiebu', 'template_n2xgap7', e.target, 'user_3mYfrOcpDiD2jB1VinkuJ')
          .then((result) => {
            setFormOpacity("1")
            setSendingDiv("none")
            props.emailSent()
          }, (error) => {
            setFormOpacity("1")
            setSendingDiv("none")
            props.emailError()
          });
          e.target.reset()
    }

    return (
        <div className="myname-main-div">
            <div className="content-div" style={{display: props.display}}>
                <h1 style={{marginTop: props.margin}} className="heading1">{props.name}</h1>
                <h2 className="heading2">{props.defaultText}</h2>
                <h2 className="heading2">{props.heading}</h2>
                <h3 className="heading3">{props.text}</h3>
                <h3 className="heading3">{props.text2}</h3>
                <h3 className="heading3">{props.text3}</h3>
                <h3 className="heading3">{props.text4}</h3>

                <RouterLink style={{display: props.downloadDisplay, marginBottom: "5vh"}} to={CVen} target="_blank" download><button className="button">Download (EN)</button></RouterLink>
                <RouterLink style={{display: props.downloadDisplay}} to={CVsk} target="_blank" download><button className="button">Stiahnut (SK)</button></RouterLink>

                <form onSubmit={sendEmail} className="contact-form" style={{display: props.formDisplay, opacity: formOpacity}}>
                    <input className="contact-input" type="textbox" name="name" placeholder="Name/Company"></input>
                    <input className="contact-input" type="textbox" name="email" placeholder="Email"></input>
                    <input className="contact-input" type="textbox" name="subject" placeholder="Subject"></input>
                    <textarea className="contact-textarea" name="text" placeholder="Text"></textarea>
                    <button className="button">Send</button>
                </form>

                <div className="sending-div" style={{display: sendingDiv}}>
                    <p>Sending...</p>
                </div>

            </div>
        </div>
    )
}

export default Myname