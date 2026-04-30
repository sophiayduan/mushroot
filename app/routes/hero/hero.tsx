import { useState } from 'react'
import "./hero.css";
import m1 from "../../assets/mini-mush-1.png";
import m2 from "../../assets/mini-mush-2.png";
import m3 from "../../assets/mini-mush-3.png";
import m4 from "../../assets/mini-mush-4.png";
import m5 from "../../assets/mini-mush-5.png";
import m6 from "../../assets/mini-mush-6.png";
import sideDark from "../../assets/hero-sidebar.png";
import titleLogo from "../../assets/title-logo.png";

import cloud1 from "../../assets/cloud-1.png";
import cloud2 from "../../assets/cloud-2.png";
import cloud3 from "../../assets/cloud-3.png";
import cloud4 from "../../assets/cloud-4.png";

function Hero() {
    return(
        <div className = "hero">
            <div className = "clouds">
                <img className = "cloud cloud-1" src={cloud1} />
                <img className = "cloud cloud-2" src={cloud2}/>
                <img className = "cloud cloud-3" src={cloud3}/>
                <img className = "cloud cloud-4" src={cloud4}/>
            </div>

            <div className = "hills">
                <div className = "back-hill"></div>
                <div className = "mid-hill"></div>
                <div className = "front-hill"></div>
            </div>
            <img className = "logo" src={titleLogo} alt="mush root text on top of a log" />
        </div>
    )
}

export default Hero