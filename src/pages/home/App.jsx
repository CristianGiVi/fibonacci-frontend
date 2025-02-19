
import { useState } from "react";

import { FibonacciListModal } from "./components/FibonacciListModal";
import { FibonacciInputHour } from "./components/FibonacciInputHour";
import { FibonacciCurrentHour } from "./components/FibonacciCurrentHour";

import fibonacciPic from "@/assets/fibonacci_pic3.png";
import secuenceFibonacci from "@/assets/secuenciaFibonacci.png";

export function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fibonacciList, setFibonacciList] = useState([]);
  const [hourSelected, setHourSelected] = useState("");

  return (
    <div className="container-fluid">
      <div className="row p-4 m-4">
        <div className="col-12">
          <h1>Generador de secuencias de Fibonnaci</h1>
        </div>
      </div>

      <div className="row m-4">
        <div className="col-4 p-4 rounded shadow bg-white"
        style={{ marginTop: "50px", marginBottom: "50px" }}>
          <img
            src={fibonacciPic}
            className="w-100 h-100 "
            alt="fibonacci"
          />
        </div>

        <div className="col-1"></div>

        <div className="col-7 p-4">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h5>
                Esta página fue para generar y almacenar secuencias de Fibonacci basadas en la 
                hora del sistema o en un tiempo proporcionado por el usuario.
                <br /><br />
                La secuencia se genera de la siguiente manera:
                <br /><br />
                - La semilla F0 son los segundos.
                <br /> 
                - La semilla F1 son los minutos
                <br />
                - El largo de la serie (n) es la hora.
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

      <div className="col-1"></div>

        <div className="col-4 mt-4 rounded shadow text-center bg-white">
          <FibonacciInputHour
            setIsModalVisible={setIsModalVisible}
            setFibonacciList={setFibonacciList}
            setHourSelected={setHourSelected}
          />
        </div>

        <div className="col-2"></div>

        <div className="col-4 mt-4 rounded shadow text-center bg-white">
          <FibonacciCurrentHour
            setIsModalVisible={setIsModalVisible}
            setFibonacciList={setFibonacciList}
            setHourSelected={setHourSelected}
          />
        </div>

        <div className="col-1"></div>
      </div>

      <FibonacciListModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        fibonacciList={fibonacciList}
        hourSelected={hourSelected}
      />

    </div>
  );
}
