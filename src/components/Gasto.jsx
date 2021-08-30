import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto }) => {
  return (
    <div className="container-gasto mb-4">
      <div className="nombre-gasto">
        <p>{gasto.nombreGasto}</p>
      </div>
      <span className="price">$ {gasto.cantidad}</span>
    </div>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};

export default Gasto;
