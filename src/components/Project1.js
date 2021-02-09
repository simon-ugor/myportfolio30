import React from "react"

// importing react scroll
import { Link } from "react-scroll";

// importing images
import Cloud from "../images/apicloud.png"
import Api from "../images/api.png"

const Project1 = () => {
    return (
        <div className="project1-main-div">
            <div className="border-div">
                <h1 className="project1-heading">API Calls</h1>
                <p className="project1-text">COVID-19 has been spreading around the world for a long time now so when I was thinking about what API should I look for, this was the first thing that came to my mind. Simply because this topic is really popular (not in the good way) and this may be helpful for me or other people, I decided to create a COVID-19 Statistics web app. I called an API with latest updates for Coronavirus data, fetched them and implemented on my web page. Also, this website was fully developed in NextJS. Feel free to go ahead and check out my API Calls project.</p>
                <p className="project1-label">Check out my API Project</p>
                <a href="https://covidstatistics.online" target="_blank" rel="noopener noreferrer"><button className="button">Click Me!</button></a>
                <p className="project1-or">or</p>

                <Link
                    activeClass="active"
                    to="div1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                    ><button className="button">Back to the Top</button>
                </Link>
                <img alt="cloud" src={Cloud} className="cloud-img"></img>
                <img alt="api" src={Api} className="api-img"></img>
            </div>
        </div>
    )
}

export default Project1