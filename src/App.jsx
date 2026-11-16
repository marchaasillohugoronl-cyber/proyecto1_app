
import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <h1>Sistema de Pacientes</h1>

      <div className="formulario">
        <h2>Registrar Paciente</h2>

        <input type="text" placeholder="Nombre del Paciente" />
        <input type="number" placeholder="Edad" />
        <input type="text" placeholder="Especialidad" />

        <button>Guardar Paciente</button>
      </div>

      <div className="lista">
        <h2>Lista de Pacientes</h2>
        <p>No hay pacientes registrados</p>
      </div>
    </div>
  );
}

export default App;
