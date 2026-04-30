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

import catCloud1 from "../../assets/cat-cloud-1.png";
import catCloud2 from "../../assets/cat-cloud-2.png";
import catCloud3 from "../../assets/cat-cloud-3.png";
import genCloud1 from "../../assets/general-cloud-1.png";
import genCloud2 from "../../assets/general-cloud-2.png";

function Hero() {
    return(
        <div className = "hero">
            <div className = "clouds">
                <img className = "cloud cat-cloud-1" src={catCloud1} />
                <img className = "cloud cat-cloud-2" src={catCloud2} />
                <img className = "cloud cat-cloud-3" src={catCloud3} />
                <img className = "cloud gen-cloud-1" src={genCloud1}/>
                <img className = "cloud gen-cloud-2" src={genCloud2}/>


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