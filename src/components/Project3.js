import React from "react"

// importing react scroll
import { Link } from "react-scroll";

// importing images
import Techwicki from "../images/techwicki.png"
import Tech from "../images/tech.png"

const Project3 = () => {
    return (
        <div className="project1-main-div">
            <div className="border-div">
                <h1 className="project1-heading">TechWicki</h1>
                <p className="project1-text">Techwicki.com is an educational website providing articles on various technical topics. I built this web page using NextJS and fully optimized its SEO to try and reach best rankings on Google Search. I have been collecting knowledge for some time to be able to write all articles on TechWicki by myself. As of right now, I am trying to come up with even more interesting topics to improve my web page as much as I can. Feel free to check out TechWicki and read through some articles, there is always something new to learn.</p>
                <p className="project1-label">Check out TechWicki</p>
                <a href="https://techwicki.com/" target="_blank" rel="noopener noreferrer"><button className="button">Click Me!</button></a>
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
                <img alt="tech" src={Tech} className="tictactoe-img"></img>
                <img alt="techwicki" src={Techwicki} className="xo-img"></img>
            </div>
        </div>
    )
}

export default Project3