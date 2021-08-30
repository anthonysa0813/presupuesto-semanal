import React, { useEffect, useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";
import "./index.css";

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  const [nuevoGasto, setNuevoGasto] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      setNuevoGasto([...nuevoGasto, gasto]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false);
    }
  }, [gasto, nuevoGasto, setRestante, presupuesto, crearGasto, restante]);

  return (
    <div className="container">
      <header>
        <h2 className="text-center mt-4">Gasto Semanal</h2>
      </header>
      {pregunta ? (
        <Pregunta
          setPresupuesto={setPresupuesto}
          setRestante={setRestante}
          setPregunta={setPregunta}
        />
      ) : (
        <div className="row info">
          <div className="col col-lg-6 col-md-6 col-12">
            <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
          </div>
          <div className="col col-lg-6 col-md-6 col-12">
            <Listado listado={nuevoGasto} />
            <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
