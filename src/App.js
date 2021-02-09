import React, { useState } from "react"

// importing react router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

// importing components
import Top from "./components/Top.js"
import Img from "./components/Img.js"
import Right from "./components/Right.js"
import Myname from "./components/Myname.js"
import Project1 from "./components/Project1"
import Project2 from "./components/Project2"
import Project3 from "./components/Project3"
import MobileDiv from "./components/MobileDiv"

function App() {

  const [name, setName] = useState("Šimon Ugor")
  const [defaultText, setDefaultText] = useState("ReactJS and NextJS front-end developer")
  const [heading, setHeading] = useState("")
  const [display, setDisplay] = useState("")
  const [text, setText] = useState("")
  const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")
  const [text4, setText4] = useState("")
  const [downloadDisplay, setDownloadDisplay] = useState("none")
  const [formDisplay, setFormDisplay] = useState("none")
  const [margin, setMargin] = useState("6vh")

  const aboutMe = (event) => {
    event.preventDefault()
    setName("")
    setDefaultText("")
    setHeading("About Me")
    setText("My name is Šimon Ugor and I am currently studying Informatics in Krems and der Donau, Austria. Since the beginning of Covid19 I study from home, Slovakia, meaning I have a lot more time for self-studies. I decided to focus on Web Development simply because that was what I enjoyed the most. Started with the basics of HTML, CSS and Javascript, ended up diving into ReactJS framework and really enjoying it.")
    //setText2("I decided to focus on Web Development simply because that was what I enjoyed the most. Started with the basics of HTML, CSS and Javascript, ended up diving into ReactJS framework and really enjoying it.")
    setText3("I am currently looking for a real-world working experience and trying my best to find a job in this field. You can find more information about me in my CV which you can download in My CV section. I created this website fully from scratch using ReactJS and some more really interesting technologies. If you are interested in looking into the code of my portfolio or any other app included, feel free to contact me and I will provide anything you need.")
    //setText4("I created this website fully from scratch using ReactJS and some more really interesting technologies. If you are interested in looking into the code of my portfolio or any other app included, feel free to contact me and I will provide anything you need.")
    setDownloadDisplay("none")
    setFormDisplay("none")
    setMargin("0vh")
  }

  const myCv = (event) => {
    event.preventDefault()
    setName("")
    setDefaultText("")
    setHeading("Download my CV:")
    setText("")
    setText2("")
    setText3("")
    setText4("")
    setDownloadDisplay("block")
    setFormDisplay("none")
    setMargin("0vh")
  }

  const contactMe = (event) => {
    event.preventDefault()
    setName("")
    setDefaultText("")
    setHeading("Send me an E-mail:")
    setText("")
    setText2("")
    setText3("")
    setText4("")
    setDownloadDisplay("none")
    setFormDisplay("flex")
    setMargin("0vh")
  }

  const emailSent = () => {
    setName("")
    setDefaultText("")
    setHeading("Thank you for reaching out! I will get back to your email as soon as possible.")
    setText("")
    setText2("")
    setText3("")
    setText4("")
    setDownloadDisplay("none")
    setFormDisplay("none")
  }

  const emailError = () => {
    setName("")
    setDefaultText("")
    setHeading("An error has occurred, please try again later.")
    setText("")
    setText2("")
    setText3("")
    setText4("")
    setDownloadDisplay("none")
    setFormDisplay("none")
  }

  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="desktop-div">
            <div className="div1">
              <Top
                aboutMe={aboutMe}
                myCv={myCv}
                contactMe={contactMe}
              />
              <Img />
              <Right />
              <Myname
                name={name}
                defaultText={defaultText}
                heading={heading}
                display={display}
                text={text}
                text2={text2}
                text3={text3}
                text4={text4}
                downloadDisplay={downloadDisplay}
                formDisplay={formDisplay}
                emailSent={emailSent}
                emailError={emailError}
                margin={margin}
              />
            </div>
            <div className="div2">
              <Project1 />
            </div>
            <div className="div3">
              <Project2 />
            </div>
            <div className="div4">
              <Project3 />
            </div>
          </div>
        </div>
      </Switch>
      <MobileDiv />
    </Router>
  );
}

export default App;
