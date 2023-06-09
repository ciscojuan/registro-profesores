import "./formulario.css";
import { useState } from "react";
import TextInput from "./formulario__textInput";
import Select from "./formulario__select";
import Boton from "./formulario__boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("mensaje enviado");
    let data = {
        nombre,
        ocupacion,
        foto,
        equipo
    }
    props.addColaborador(data)
  };
  return (
    <section className="formulario">
      <form onSubmit={onSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextInput
          label="Nombre"
          placeholder="Enter you Name"
          valor={nombre}
          setValor={setNombre}
          required
        />
        <TextInput
          label="Ocupacion"
          placeholder="Enter your ocupation"
          valor={ocupacion}
          setValor={setOcupacion}
          required
        />
        <TextInput
          label="Foto"
          placeholder="Entre your github profile photo"
          valor={foto}
          setValor={setFoto}
          required
        />
        <Select valor={equipo} setValor={setEquipo} equipos={props.equipos}/>
        <Boton /> 
      </form>
    </section>
  );
};
export default Formulario;
