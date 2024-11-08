import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  const startTimer = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  const handleStop =() => {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="challenge-failed">Time's up!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : startTimer}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>

      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? "Timer Running" : "Timer Not Started"}
      </p>
    </section>
    </>
  );
};

export default TimerChallenge;