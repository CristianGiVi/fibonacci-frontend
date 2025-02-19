import { useState, useEffect } from "react";

import { generateFibonnaci } from "../hooks/generateFibonnaci";

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return { hours, minutes, seconds };
};

const convertCurrentTimeIntoString = (currentTime) => {
  const hours = currentTime.hours.toString().padStart(2, "0");
  const minutes = currentTime.minutes.toString().padStart(2, "0");
  const seconds = currentTime.seconds.toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`
}


export const FibonacciCurrentHour = ({ setIsModalVisible, setFibonacciList, setHourSelected }) => {

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentTimeString, setCurrentTimeString] = useState(
    convertCurrentTimeIntoString(getCurrentTime()));


  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getCurrentTime();
      const newTimeString = convertCurrentTimeIntoString(newTime);
      setCurrentTime(newTime);
      setCurrentTimeString(
        newTimeString
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (currentTime) => {
    const fibonacciSequence = generateFibonnaci(currentTime);
    setFibonacciList(fibonacciSequence);
    setIsModalVisible(true);
    setHourSelected(currentTimeString);
  }

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
          onClick={() => handleSubmit(currentTime)}
        >
          Generar
        </button>
      </div>

    </>
  );
};
