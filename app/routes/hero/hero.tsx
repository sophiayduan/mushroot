import "./hero.css";

function Hero() {
    return(
        <div className="hero">
            <div className="clouds">
                <img className="cloud cat-cloud-1" src="/cat-cloud-1.png" alt="hello" />
                <img className="cloud cat-cloud-2" src="/cat-cloud-2.png" />
                <img className="cloud cat-cloud-3" src="/cat-cloud-3.png" />
                <img className="cloud gen-cloud-2" src="/general-cloud-2.png" />
            </div>

            <div className="hills">
                <div className="back-hill"></div>
                <div className="mid-hill"></div>
                <div className="front-hill"></div>
            </div>

            <div className="mushrooms">
                <div className="c-1">
                    <img className="mushroom mush-1" src="/mini-mush-1.png" />
                    <img className="mushroom mush-2" src="/mini-mush-2.png" />
                    <img className="mushroom mush-3" src="/mini-mush-3.png" />
                </div>

                <div className="c-2">
                    <img className="mushroom mush-1" src="/mini-mush-4.png" />
                    <img className="mushroom mush-2" src="/mini-mush-5.png" />
                    <img className="mushroom mush-3" src="/mini-mush-6.png" />
                </div>

                <div className="c-3">
                    <img className="mushroom mush-1" src="/mini-mush-4.png" />
                    <img className="mushroom mush-2" src="/mini-mush-1.png" />
                    <img className="mushroom mush-3" src="/mini-mush-3.png" />
                </div>

                <div className="c-4">
                    <img className="mushroom mush-1" src="/mini-mush-5.png" />
                    <img className="mushroom mush-2" src="/mini-mush-2.png" />
                </div>

                <div className="c-5">
                    <img className="mushroom mush-2" src="/mini-mush-6.png" />
                    <img className="mushroom mush-3" src="/mini-mush-1.png" />
                </div>

                <div className="c-6">
                    <img className="mushroom mush-1" src="/mini-mush-5.png" />
                    <img className="mushroom mush-3" src="/mini-mush-3.png" />
                </div>

                <div className="c-7">
                    <img className="mushroom mush-2" src="/mini-mush-2.png" />
                    <img className="mushroom mush-3" src="/mini-mush-4.png" />
                </div>

                <div className="c-8">
                    <img className="mushroom mush-1" src="/mini-mush-3.png" />
                    <img className="mushroom mush-2" src="/mini-mush-1.png" />
                    <img className="mushroom mush-3" src="/mini-mush-4.png" />
                </div>

                <div className="c-9">
                    <img className="mushroom mush-1" src="/mini-mush-4.png" />
                    <img className="mushroom mush-2" src="/mini-mush-6.png" />
                    <img className="mushroom mush-3" src="/mini-mush-5.png" />
                </div>

                <div className="c-10">
                    <img className="mushroom mush-1" src="/mini-mush-1.png" />
                </div>

                <div className="c-11">
                    <img className="mushroom mush-1" src="/mini-mush-5.png" />
                </div>
            </div>

            <img className="logo" src="/title-logo.png" alt="mush root text on top of a log" />
        </div>
    )
}

export default Hero;
