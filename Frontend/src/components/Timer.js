import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => (
  <div id="timer">
    <CountdownCircleTimer
      isPlaying
      duration={20}
      colors={[
        ["#ff8095", 0.33],
        ["#4444ad", 0.33],
        ["#b3001e", 0.33],
      ]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  </div>
);
export default Timer;
