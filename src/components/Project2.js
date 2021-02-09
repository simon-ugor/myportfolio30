import React from "react"

// importing react scroll
import { Link } from "react-scroll";

// importing images
import Cart from "../images/cart.png"
import Shirt from "../images/shirt.png"

const Project2 = () => {
    return (
        <div className="project1-main-div">
            <div className="border-div">
                <h1 className="project1-heading">E-Shop Template</h1>
                <p className="project1-text">Sometimes it can get difficult and time consuming to look online for a company that needs an e-shop built. So I decided not to wait, rather build an universal e-shop template basically for any product and company. Please note this is only front-end version of e-shop, so some features are not implemented. I am currently working on my full-stack (MERN) skills to implement a log in option as well as learning what are the checkout possibilities. If you are interested in viewing my e-shop temlpate, simply click the button below.</p>
                <p className="project1-label">Check out my E-Shop Project</p>
                <a href="https://simon-ugor.github.io/eshoptemplate20/" target="_blank" rel="noopener noreferrer"><button className="button">Click Me!</button></a>
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
                <img alt="cart" src={Cart} className="cart-img"></img>
                <img alt="shirt" src={Shirt} className="shirt-img"></img>
            </div>
        </div>
    )
}

export default Project2