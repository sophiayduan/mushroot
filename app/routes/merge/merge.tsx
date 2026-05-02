import "./merge.css";

function Hero() {
    return(
        <div className = "merge">
            <div className = "title-text">
                <h1>Mush Merge</h1>
                <p>Mushrooms --- Cats</p>
            </div>
            <div className = "grid-box">
                <div className = "grid grid-1"></div>
                <div className = "grid grid-2"></div>
                <div className = "grid grid-3"></div>
                <div className = "grid grid-4"></div>
                <div className = "grid grid-5"></div>
                <div className = "grid grid-6"></div>
                <div className = "grid grid-7"></div>
                <div className = "grid grid-8"></div>
                <div className = "grid grid-9"></div>
                <div className = "grid grid-10"></div>
                <div className = "grid grid-11"></div>
                <div className = "grid grid-12"></div>
            </div>
            <div className = "stats-box">
                <div className = "score">
                    <p className = "text">Score: </p>
                    <div className = "score-output"></div>
                </div>
                <img className="mini-mushroom" src="/mini-mush-1.png" alt="a tiny mushroom"/>
                <div className = "mush-count-output"></div>
            </div>
        </div>
    )
}
export default Hero;
