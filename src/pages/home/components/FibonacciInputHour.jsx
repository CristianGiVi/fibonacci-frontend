import { useState } from "react";

import { generateFibonnaci } from "../hooks/generateFibonnaci";

export const FibonacciInputHour = () => {

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
    generateFibonnaci(inputTime);

    setHour("");
    setMinutes("");
    setSeconds("");
  };
  


  return (
    <>
      <div className="row">
        <h4>Ingrese una hora personalizada: </h4>
        <div className="input-group">
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
      </div>

      {isError && (
        <div id="validationHourInput" className="text-danger mt-2">
          Por favor, ingrese un tiempo válido
        </div>
      )}

      <div className="row d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-auto"
          onClick={() => handleSubmit(hour, minutes, seconds)}
        >
          Generar
        </button>
      </div>
    </>
  );
};
