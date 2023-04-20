import './equipo.css'
import Colaborador from './colaborador'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //Destructuring
    const {titulo, bgColor, contraste} = props.datos;
    const {colaboradores, removeColaborador, actualizarColor} = props
    
    const objColor = {
        backgroundColor : hexToRgba(contraste,0.6)
    }
    return <>
    { colaboradores.length > 0 &&
        <section className='equipo' style={objColor}>
            <input
            type="color" 
            className='colorInput' 
            value={contraste}
            onChange={
                (e) =>{
                    console.log(e.target.value)
                    actualizarColor(e.target.value, titulo)
                }
            }
            />
        <h3 style={{borderColor: contraste  }}>{titulo}</h3>
        <div className='colaboradores'>
            {
            colaboradores.map((colaborador,index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    borderColor={hexToRgba(contraste,0.6)}
                    removeColaborador={removeColaborador}/>)
            }
        </div>
    </section>
    }
    </>
}
export default Equipo;