import { createEffect, createSignal, type Component } from "solid-js"
interface Props {
  time: number;
  onComplete: () => void;
}
const Timer: Component<Props> = ({ time, onComplete }) => {
  const [timeLeft, setTimeLeft] = createSignal(time);

  createEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          onComplete();
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>{formatTime(timeLeft())}</>
  )
}

export default Timer