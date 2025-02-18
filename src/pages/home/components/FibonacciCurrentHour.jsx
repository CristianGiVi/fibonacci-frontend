import { useState, useEffect } from "react";

import { generateFibonnaci } from "../hooks/generateFibonnaci";

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return { hours, minutes, seconds };
};

export const FibonacciCurrentHour = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentTimeString, setCurrentTimeString] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getCurrentTime();

      const hours = newTime.hours.toString().padStart(2, "0");
      const minutes = newTime.minutes.toString().padStart(2, "0");
      const seconds = newTime.seconds.toString().padStart(2, "0");

      const newTimeStringFormated = {
        hours,
        minutes,
        seconds,
      };

      setCurrentTime(newTime);
      setCurrentTimeString(
        `${newTimeStringFormated.hours}:${newTimeStringFormated.minutes}:${newTimeStringFormated.seconds}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="row">
        <h4>Hora actual:</h4>
        <div>
          <h3> {currentTimeString} </h3>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary w-auto"
          onClick={() => generateFibonnaci(currentTime)}
        >
          Generar
        </button>
      </div>
    </>
  );
};
