import './App.css';
import { useState } from 'react';
import Header  from './components/header/header.js'
import Formulario from './components/formulario/formulario';
import MiOrganizacion from './components/miOrganizacion';
import Equipo from './components/equipo/index.js';
import Footer from './components/footer';

function App() {
  const[mostrar, SetMostar] = useState(false);
  const[colaboradores, setColaboradores] = useState([
    {
      'nombre': 'Juan Ramirez',
      'ocupacion': 'Desarrollador',
      'foto': 'https://github.com/ciscojuan.png',
      'equipo' : 'Front End'
    }
  ])

  const mostrarForm = () => {
    SetMostar(!mostrar)
  }
  //Registrar Colaborador
  const addColaborador = (colaborador) => {
    console.log(colaborador)
    //spread operator -> copia del arreglo
    setColaboradores([...colaboradores, colaborador])
  }

  const equipos = [
    {
      'titulo': 'Programación',
      'bgColor': '#D9F7E9',
      'contraste': '#57C278'
    },
    {
      'titulo': 'Front End',
      'bgColor': '#E8F8FF',
      'contraste': '#82CFFA'
    },
    {
      'titulo': 'Data Science',
      'bgColor': '#F0F8E2',
      'contraste': '#A6D157'
    },
    {
      'titulo': 'Dev Ops',
      'bgColor': '#FDE7E8',
      'contraste': '#E06B69'
    },
    {
      'titulo': 'UX & Design',
      'bgColor': '#FAE9F5',
      'contraste': '#DVEBEBF'
    },
    {
      'titulo': 'Móvil',
      'bgColor': '#FFF5D9',
      'contraste': '#FFBA05'
    },
    {
      'titulo': 'Inovacion y Gestión',
      'bgColor': '#FFEEDF',
      'contraste': '#FF8A29'
    }
  ]


  return (
    <div >
        <Header />
        {mostrar ? <Formulario
         equipos={equipos.map((equipo) => equipo.titulo)}  
         addColaborador={addColaborador}/> : <></>}

        <MiOrganizacion showForm={mostrarForm}/>
        {
          equipos.map((equipo )=> <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}/> )
        }
        <Footer />
    </div>
  );
}

export default App;
