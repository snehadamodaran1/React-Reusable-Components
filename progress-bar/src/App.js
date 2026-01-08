import "./styles.css";
import { useState, useCallback } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("reset");
  const [timer, setTimer] = useState(null);

  const startTimer = useCallback(() => {
    // Clear any existing timer
    if (timer) {
      clearInterval(timer);
    }
    const newTimer = setInterval(() => {
      setProgress((prev) => {
        console.log(prev);
        // Stop the timer if progress reaches or exceeds 1000
        if (prev >= 100) {
          clearInterval(newTimer);
          setTimer(null);
          setStatus("complete");
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    setTimer(newTimer);
    setStatus("start");
  }, [timer]);

  const pauseTimer = useCallback(() => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      setStatus("pause");
    }
  }, [timer]);

  const resetTimer = useCallback(() => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
    setProgress(0);
    setStatus("reset");
  }, [timer]);

  return (
    <div className="App">
      <div className="progress-container">
        <div
          className="progress-state"
          style={{
            width: `${progress}%`,
            backgroundColor: "blue",
            height: "20px",
          }}
        ></div>
        <div>Progress: {progress} / 100</div>
      </div>
      <div>Status: {status}</div>
      <button onClick={startTimer} disabled={status === "start"}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={status !== "start"}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
