import React from "react";
import { watchingBudget } from "../helpers";
import PropTypes from "prop-types";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <p className="alert alert-primary">Presupuesto: $ {presupuesto}</p>
      <p className={watchingBudget(presupuesto, restante)}>
        Restante: $ {restante}
      </p>
    </>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
