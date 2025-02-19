import { useState } from "react";

import { generateFibonnaci } from "../hooks/generateFibonnaci";

export const FibonacciInputHour = ({ setIsModalVisible, setFibonacciList, setHourSelected }) => {

  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isError, setIsError] = useState(false);


  const validateData = (inputHour, inputMinutes, inputSeconds) => {
    if (
      inputHour === "" ||
      inputMinutes === "" ||
      inputSeconds === "" ||
      inputHour < 0 ||
      inputHour > 23 ||
      inputMinutes < 0 ||
      inputMinutes > 59 ||
      inputSeconds < 0 ||
      inputSeconds > 59
    ) {
      setIsError(true);

      setHour("");
      setMinutes("");
      setSeconds("");
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (hour, minutes, seconds) => {
    const isErrorInData = validateData(hour, minutes, seconds);
    if (isErrorInData) {
      return;
    }

    const inputTime = { 
      hours: parseInt(hour, 10), 
      minutes: parseInt(minutes, 10), 
      seconds: parseInt(seconds, 10) 
    };

    const fibonacciSequence = generateFibonnaci(inputTime);

    setFibonacciList(fibonacciSequence);
    setIsModalVisible(true);
    setHourSelected(`${hour}:${minutes}:${seconds}`);

    setHour("");
    setMinutes("");
    setSeconds("");
    setIsError(false)
  };
  


  return (
    <>
      <div className="row d-flex justify-content-center m-4">
        <h4>Ingrese una hora personalizada: </h4>
        <div className="input-group mt-4">
          <input
            type="number"
            placeholder="Hora"
            className="form-control"
            min="0"
            max="23"
            required
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
          <input
            type="number"
            placeholder="Minutos"
            aria-label="minutes"
            className="form-control"
            min="0"
            max="59"
            required
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <input
            type="number"
            placeholder="Segundos"
            aria-label="seconds"
            className="form-control"
            min="0"
            max="59"
            required
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>

        {isError && (
        <div id="validationHourInput" className="text-danger mt-1">
          Por favor, ingrese un tiempo válido
        </div>
      )}
      </div>



      <div className="row d-flex justify-content-center mx-1 mb-3">
        <button className="btn btn-primary"
          onClick={() => handleSubmit(hour, minutes, seconds)}
        >
          Generar
        </button>
      </div>
    </>
  );
};
