import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef(null);

  const startTimer = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    
    setTimerStarted(true);
  }

  return (
    <>
      <ResultModal />

      <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={startTimer}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>

      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer Running" : "Timer Not Started"}
      </p>
    </section>
    </>
  );
};

export default TimerChallenge;