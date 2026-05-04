import "./merge.css";
import { useState } from "react";

function Hero() {
    const [grid] = useState(Array(12).fill(null));

    return (
        <div className="merge">

            <main>
                <div className="title-text">
                    <h1>Mush Merge</h1>
                    <p>Mushrooms --- Cats</p>
                </div>

                <div className="grid-box">
                    {grid.map((cell, i) => (
                        <div key={i} className="grid">
                            {cell}
                        </div>
                    ))}
                </div>

                <div className="stats-box">
                    <div className="score">
                        <p className="text">Score:</p>
                        <div className="score-output"></div>
                    </div>

                    <div className="mush-count">
                        <img
                            className="mini-mushroom"
                            src="/mini-mush-1.png"
                            alt="tiny mushroom"
                        />
                        <div className="mush-count-output"></div>
                    </div>
                </div>
            </main>

            <div className="mushrooms"></div>
        </div>
    );
}

export default Hero;