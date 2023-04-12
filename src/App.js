import { useState } from 'react';
import Header  from './components/header/header.js'
import Formulario from './components/formulario/formulario';
import MiOrganizacion from './components/miOrganizacion';
import './App.css';

function App() {
  const[mostrar, SetMostar] = useState(true);

  const mostrarForm = () => {
    SetMostar(!mostrar)
  }
  return (
    <div >
        <Header />
        {mostrar ? <Formulario /> : <></>}
        <MiOrganizacion showForm={mostrarForm}/>
    </div>
  );
}

export default App;
