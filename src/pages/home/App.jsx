import { useState } from "react";

import { FibonacciInputHour } from "./components/FibonacciInputHour";
import { FibonacciCurrentHour } from "./components/FibonacciCurrentHour";

import fibonacciPic from "@/assets/fibonacci_pic3.png";
import secuenceFibonacci from "@/assets/secuenciaFibonacci.png";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid">
      <div className="row p-4 m-4">
        <div className="col-12">
          <h1>Generador de secuencias de Fibonnaci</h1>
        </div>
      </div>

      <div className="row m-4">
        <div className="col-4 p-4 rounded shadow bg-white">
          <img
            src={fibonacciPic}
            className="img-fluid w-100 h-100 "
            alt="fibonacci"
          />
        </div>

        <div className="col-1"></div>

        <div className="col-7 p-4">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h5>
                Esta pagina fue para generar y almacenar secuencias de Fibonacci
                basadas en la hora del sistema o en un tiempo proporcionado por
                el usuario. La secuencia se genera de la siguiente manera: La
                semilla F0 son los segundos, la semilla F1 son los minutos y el
                largo de la serie (n) es la hora.
              </h5>
            </div>
          </div>

          <div className="row mt-4">

            <div className="col-2"></div>

            <div className="col-8 p-3 rounded shadow text-center bg-white">
              <img
                src={secuenceFibonacci}
                className="img-fluid w-100 h-100"
                alt="fibonacci"
              />
            </div>

            <div className="col-2"></div>

          </div>
        </div>
      </div>

      <div className="row m-4">
        <div className="col-4">
          <FibonacciInputHour />
        </div>

        <div className="col-2"></div>

        <div className="col-4">
          <FibonacciCurrentHour />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}
