import React, { useState, useEffect } from 'react';
import './App.css';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">Time:{formatTime()}</div>
      <br />
      <div className="controls">
        {isRunning ? (
          <button className="stop-btn" onClick={handleStartStop}>Stop</button>
        ) : (
          <button className="start-btn" onClick={handleStartStop}>Start</button>
        )}
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
