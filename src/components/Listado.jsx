import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ listado }) => {
  console.log(listado);
  return (
    <>
      <h3>Listado de Gastos: </h3>
      {listado.map((gasto) => {
        return <Gasto gasto={gasto} key={gasto.id} />;
      })}
    </>
  );
};

Listado.propTypes = {
  listado: PropTypes.array.isRequired,
};

export default Listado;
