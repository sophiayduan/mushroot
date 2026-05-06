import React, { useState, useEffect } from "react";
import "./timer.css";

function Timer() {
    const [workMinutes, setWorkMinutes] = useState(0);
    const [breakMinutes, setBreakMinutes] = useState(0);
    const [workSeconds, setWorkSeconds] = useState(0);
    const [breakSeconds, setBreakSeconds] = useState(0);
    const [isTimeSet, setIsTimeSet] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [currentPhase, setCurrentPhase] = useState<"work" | "break">("work");

    // Auto-transition from work to break
    useEffect(() => {
        if (workSeconds === 0 && isTimeSet && currentPhase === "work" && isRunning) {
            setCurrentPhase("break");
            setBreakSeconds(breakMinutes * 60);
        }
    }, [workSeconds, isTimeSet, currentPhase, isRunning, breakMinutes]);

    // Auto-stop when break ends
    useEffect(() => {
        if (breakSeconds === 0 && currentPhase === "break" && isRunning && breakMinutes > 0) {
            setIsRunning(false);
        }
    }, [breakSeconds, currentPhase, isRunning, breakMinutes]);

    // Countdown timer for work phase
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && currentPhase === "work" && workSeconds > 0) {
            interval = setInterval(() => {
                setWorkSeconds((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, currentPhase, workSeconds]);

    // Countdown timer for break phase
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && currentPhase === "break" && breakSeconds > 0) {
            interval = setInterval(() => {
                setBreakSeconds((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, currentPhase, breakSeconds]);

    const setTime = () => {
        const totalWork = workMinutes * 60;
        if (totalWork > 0) {
            setWorkSeconds(totalWork);
            setIsTimeSet(true);
            setCurrentPhase("work");
            setIsRunning(false);
        }
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setWorkSeconds(0);
        setBreakSeconds(0);
        setIsTimeSet(false);
        setCurrentPhase("work");
        setWorkMinutes(0);
        setBreakMinutes(0);
    };

    const formatTime = (totalSecs: number) => {
        const h = Math.floor(totalSecs / 3600);
        const m = Math.floor((totalSecs % 3600) / 60);
        const s = totalSecs % 60;
        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    return (
        <div>
            <h1 className="Title">Pomodoro Timer</h1>

            {!isTimeSet ? (
                <div className="setTimeContainer">
                    <h2 className = "setTime">Set Time</h2>
                    
                    <div>
                        <h3 className = "workTime">Work Time</h3>
                        <div>
                            <div>
                                <label className = "minutes1">Minutes</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={workMinutes}
                                    onChange={(e) => setWorkMinutes(Math.max(0, parseInt(e.target.value) || 0))}
                                    className = "inputWork1"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className = "breakTime">Break Time</h3>
                        <div>
                            <div>
                                <label className = "minutes2">Minutes</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={breakMinutes}
                                    onChange={(e) => setBreakMinutes(Math.max(0, parseInt(e.target.value) || 0))}
                                    className = "inputBreak1"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={setTime}
                        className = "setTimeButton"
                    >
                        Start Timer
                    </button>
                </div>
            ) : (
                <div className="timerContainer">
                    {/* Work Timer */}
                    <div>
                        <h2 className="work">Work</h2>
                        <div className="timerDisplay">
                            {formatTime(workSeconds)}
                        </div>
                    </div>

                    {/* Break Timer */}
                    <div>
                        <h2 className="break">Break</h2>
                        <div className="timerDisplay">
                            {formatTime(breakSeconds)}
                        </div>
                    </div>

                    {/* Controls */}
                    <div>
                        <button
                            onClick={toggleTimer}
                            className="startButton"
                        >
                            {isRunning ? "Pause" : "Start"}
                        </button>
                        <button
                            onClick={resetTimer}
                            className="resetButton"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Timer;

function BreakTimer() {
    const [minutes, setMinutes] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isTimeSet, setIsTimeSet] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && totalSeconds > 0) {
            interval = setInterval(() => {
                setTotalSeconds((prev) => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, totalSeconds]);

    const setTime = () => {
        const total = minutes * 60;
        if (total > 0) {
            setTotalSeconds(total);
            setIsTimeSet(true);
            setIsRunning(false);
        }
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTotalSeconds(0);
        setIsTimeSet(false);
        setMinutes(0);
    };

    const formatTime = (totalSecs: number) => {
        const m = Math.floor((totalSecs % 3600) / 60);
        return `${String(m).padStart(2, "0")}`;
    };

    return (
        <div>
            <h1>Countdown Timer</h1>

            {!isTimeSet ? (
                <div>
                    <div>
                        <div>
                            <label>Minutes</label>
                            <input
                                type="number"
                                min="0"
                                max="59"
                                value={minutes}
                                onChange={(e) => setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                            />
                        </div>
                    </div>
                    <button
                        onClick={setTime}
                    >
                        Set Timer
                    </button>
                </div>
            ) : (
                <>
                    <div>
                        {formatTime(totalSeconds)}
                    </div>
                    <div>
                        <button
                            onClick={toggleTimer}
                        >
                            {isRunning ? "Pause" : "Start"}
                        </button>
                        <button
                            onClick={resetTimer}
                        >
                            Reset
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

