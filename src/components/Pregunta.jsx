import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  const agregarCantidad = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <form onSubmit={agregarPresupuesto}>
      <h3>Dime tu Presupuesto</h3>
      {error && <Error mensaje="Presupuesto inválido" />}
      <input
        type="number"
        className="form-control mt-3"
        onChange={(e) => agregarCantidad(e)}
      />
      <button type="submit" className="btn btn-primary btn-block mt-3">
        Agregar Presupuesto
      </button>
    </form>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
