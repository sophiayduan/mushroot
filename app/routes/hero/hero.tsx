import "./hero.css";
import { useOutletContext } from "react-router";

function Hero() {
    const { animations } = useOutletContext<{ animations: boolean }>();
    const anim = { animationPlayState: animations ? "running" : "paused" };

    return(
        <div className="hero">
            <div className="clouds">
                <img className="cloud cat-cloud-1" style={anim} src="/cat-cloud-1.png" alt="cute cat cloud" />
                <img className="cloud cat-cloud-2" style={anim} src="/cat-cloud-2.png" alt="cute cat cloud"/>
                <img className="cloud cat-cloud-3" style={anim} src="/cat-cloud-3.png" alt="cute cat cloud"/>
                <img className="cloud gen-cloud-1" style={anim} src="/general-cloud-1.png" alt="another normal cloud"/>
                <img className="cloud gen-cloud-2" style={anim} src="/general-cloud-2.png" alt="normal cloud"/>
            </div>
            <div className="hills">
                <div className="back-hill"></div>
                <div className="mid-hill"></div>
                <div className="front-hill"></div>
            </div>

            <div className="mushrooms">
                <div className="c-1">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-1.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-2.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-3.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-2">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-4.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-5.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-6.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-3">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-4.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-1.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-3.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-4">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-5.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-2.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-5">
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-6.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-1.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-6">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-5.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-3.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-7">
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-2.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-4.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-8">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-3.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-1.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-4.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-9">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-4.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-2" style={anim} src="/mini-mush-6.png" alt="a tiny mushroom"/>
                    <img className="mushroom mush-3" style={anim} src="/mini-mush-5.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-10">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-1.png" alt="a tiny mushroom"/>
                </div>
                <div className="c-11">
                    <img className="mushroom mush-1" style={anim} src="/mini-mush-5.png" alt="a tiny mushroom"/>
                </div>
            </div>
            <img className="logo" src="/title-logo.png" alt="mush root text on top of a log" />
        </div>
    )
}
export default Hero;