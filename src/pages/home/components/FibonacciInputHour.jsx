export const FibonacciInputHour = () => {
  return (
    <>
      <div className="row">
        <h4>Ingrese una hora personalizada: </h4>
        <div className="input-group">
          <input
            type="number"
            placeholder="Hours"
            aria-label="hours"
            className="form-control"
          />
          <input
            type="number"
            placeholder="Minutes"
            aria-label="minutes"
            className="form-control"
          />
          <input
            type="number"
            placeholder="Seconds"
            aria-label="seconds"
            className="form-control"
          />
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-auto">Generar</button>
      </div>
    </>
  );
};
