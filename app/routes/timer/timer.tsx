import React, { useEffect, useState } from "react";
import "./timer.css";

function Timer() {
    const [workMinutes, setWorkMinutes] = useState("25");
    const [breakMinutes, setBreakMinutes] = useState("5");

    const [timeLeft, setTimeLeft] = useState(0);

    const [currentPhase, setCurrentPhase] = useState<"work" | "break">("work");

    const [isRunning, setIsRunning] = useState(false);
    const [started, setStarted] = useState(false);

    
    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                
                if (prev <= 1) {
                    if (currentPhase === "work") {
                        setCurrentPhase("break");
                        return parseInt(breakMinutes) * 60;
                    } else {
                        setCurrentPhase("work");
                        return parseInt(workMinutes) * 60;
                    }
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, currentPhase, workMinutes, breakMinutes]);

    
    const startTimer = () => {
        const work = parseInt(workMinutes) || 0;

        if (work <= 0) return;

        setCurrentPhase("work");
        setTimeLeft(work * 60);

        setStarted(true);
        setIsRunning(true);
    };

    
    const toggleTimer = () => {
        if (!started) {
            startTimer();
        } else {
            setIsRunning((prev) => !prev);
        }
    };

    
    const resetTimer = () => {
        setIsRunning(false);
        setStarted(false);

        setCurrentPhase("work");
        setTimeLeft(0);

        setWorkMinutes("25");
        setBreakMinutes("5");
    };

    
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    return (
        <div className="pageLayout">

            <h1 className="title">Pomodoro Timer</h1>

            {!started && (
                <div className="inputs">

                    <div className="inputCard">
                        <label>Work Minutes</label>

                        <input
                            className="timeInput"
                            type="number"
                            value={workMinutes}
                            onChange={(e) => setWorkMinutes(e.target.value)}
                        />
                    </div>

                    <div className="inputCard">
                        <label>Break Minutes</label>

                        <input
                            className="timeInput"
                            type="number"
                            value={breakMinutes}
                            onChange={(e) => setBreakMinutes(e.target.value)}
                        />
                    </div>

                </div>
            )}

            <div className="timerContainer">
                <h2>
                    {currentPhase === "work" ? "Work Time" : "Break Time"}
                </h2>

                <div className="timerDisplay">
                    {formatTime(timeLeft)}
                </div>
            </div>

            <div className="buttons">
                <button className="startButton" onClick={toggleTimer}>
                    {!started ? "Start" : isRunning ? "Pause" : "Resume"}
                </button>

                <button className="resetButton" onClick={resetTimer}>
                    Reset
                </button>
            </div>

        </div>
    );
}

export default Timer;