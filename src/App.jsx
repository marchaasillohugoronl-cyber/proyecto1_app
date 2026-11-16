
import { useState } from "react";
import "./App.css";

function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const [pacientes, setPacientes] = useState([]);

  const guardarPaciente = () => {

    if (!nombre || !edad || !especialidad) {
      return alert("Completa todos los campos");
    }

    const nuevoPaciente = {
      id: Date.now(),
      nombre: nombre,
      edad: edad,
      especialidad: especialidad,
    };

    setPacientes([...pacientes, nuevoPaciente]);

    setNombre("");
    setEdad("");
    setEspecialidad("");
  };

  return (
    <div className="contenedor">

      <h1>Sistema de Pacientes</h1>

      <div className="formulario">
        <h2>Registrar Paciente</h2>

        <input
          type="text"
          placeholder="Nombre del Paciente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <input
          type="text"
          placeholder="Especialidad"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
        />

        <button onClick={guardarPaciente}>
          Guardar Paciente
        </button>
      </div>

      <div className="lista">
        <h2>Lista de Pacientes</h2>

        {pacientes.length === 0 ? (
          <p>No hay pacientes registrados</p>
        ) : (
          pacientes.map((paciente) => (
            <div key={paciente.id} className="paciente">
              <p>Nombre: {paciente.nombre}</p>
              <p>Edad: {paciente.edad}</p>
              <p>Especialidad: {paciente.especialidad}</p>
              <hr />
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default App;
