import React from "react"

// importing react scroll
import { Link } from "react-scroll";

const Right = () => {
    return (
        <div className="right-div">
            <h2 className="mywork-label">My Work:</h2>

            <Link
                activeClass="active"
                to="div2"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                ><button className="button">API Calls</button>
            </Link>

            <Link
                activeClass="active"
                to="div3"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                ><button className="button">E-shop template</button>
            </Link>

            <Link
                activeClass="active"
                to="div4"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                ><button className="button">TechWicki</button>
            </Link>

        </div>
    )
}

export default Right