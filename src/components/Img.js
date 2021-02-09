import React from "react"
// importing images
import Window from "../images/window.png"

const Img = () => {
    return (
        <div className="img-div">
            <img className="window-image" alt="window" src={Window}></img>
        </div>
    )
}

export default Img