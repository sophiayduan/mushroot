import "./merge.css";
import { useState } from "react";

function Hero() {

    const [grid, setGrid] = useState(Array(12).fill(null));

    const spawnMushroom = () => {
        let firstEmptyIndex = -1;

        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === null) {
                firstEmptyIndex = i;
                break;
            }
        }
        if (firstEmptyIndex === -1) {
            return;
        }

        const newGrid = [...grid];
        newGrid[firstEmptyIndex] = "/merge-1.png";
        setGrid(newGrid);
    };

    return (
        <div className="merge">

            <button className="spawn-btn" onClick={spawnMushroom}>
                    Spawn Mushroom
            </button>

            <main>
                <div className="title-text">
                    <h1>Mush Merge</h1>
                    <p>Mushrooms --- Cats</p>
                </div>

                <div className="grid-box">
                    {grid.map((cell, i) => (
                        <div key={i} className="grid">
                            {cell && (
                                <img src={cell} alt="mushroom" className="mush-img"/>
                            )}
                        </div>
                    ))}
                </div>

                <div className="stats-box">
                    <div className="score">
                        <p className="text">Score:</p>
                        <div className="score-output"></div>
                    </div>

                    <div className="mush-count">
                        <img className="mini-mushroom" src="/mini-mush-1.png" alt="tiny mushroom"
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