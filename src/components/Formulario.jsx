import React, { useState } from "react";
import { uid } from "uid";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    // validar
    if (!nombreGasto.trim() || cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);

    // creaer un objeto de un nuevo gasto

    const gasto = {
      nombreGasto,
      cantidad,
      id: uid(),
    };

    // pasar el gasto al component App.js
    setGasto(gasto);
    setCrearGasto(true);
    // resetear inputs
    setNombreGasto("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      {error && (
        <Error mensaje="Ambos campos son obligatorios ó presupuesto incorrecto" />
      )}
      <h2>Agrega tus gastos aquí...</h2>
      <hr />
      <label>Nombre del gasto: </label>
      <input
        type="text"
        className="form-control mt-2"
        value={nombreGasto}
        onChange={(e) => setNombreGasto(e.target.value)}
      />
      <label className="mt-2">Valor: </label>
      <input
        type="number"
        value={cantidad}
        className="form-control mt-2"
        onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
      />
      <button type="submit" className="btn btn-dark btn-block mt-2">
        Agregar
      </button>
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
