import './equipo.css'
import Colaborador from './colaborador'

const Equipo = (props) =>{
    //Destructuring
    const {titulo, bgColor, contraste} = props.datos;
    const {colaboradores} = props
    
    const objColor = {
        backgroundColor : bgColor
    }
    return <>
    { colaboradores.length > 0 &&
        <section className='equipo' style={objColor}>
        <h3 style={{borderColor: contraste  }}>{titulo}</h3>
        <div className='colaboradores'>
            {
            colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} borderColor={contraste}/>)
            }
        </div>
    </section>
    }
    </>
}
export default Equipo;