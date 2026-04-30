import { useState } from 'react'
import "./hero.css";
import m1 from ".../assets/mini-mush-1.png";
import m2 from ".../assets/mini-mush-2.png";
import m3 from ".../assets/mini-mush-3.png";
import m4 from ".../assets/mini-mush-4.png";
import m5 from ".../assets/mini-mush-5.png";
import m6 from ".../assets/mini-mush-6.png";
import sideDark from ".../assets/hero-sidebar.png";
import titleLogo from ".../assets/title-logo.png";

function Hero() {
    return(
        <div className = "hero">
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