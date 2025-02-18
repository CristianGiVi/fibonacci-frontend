import { useState, useEffect } from "react";

const handleSubmit = (hour, minutes, seconds) => {
  const inputTime = {
    hour,
    minutes,
    seconds,
  };
  console.log("Hora ingresada:", inputTime);
};


export const FibonacciInputHour = () => {

  const [ hour, setHour ] = useState("");
  const [ minutes, setMinutes ] = useState("");
  const [ seconds, setSeconds ] = useState("");





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

      <div id="validationHourInput" className="invalid-feedback">
          Por favor, Ingrese un tiempo valido
        </div>

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
