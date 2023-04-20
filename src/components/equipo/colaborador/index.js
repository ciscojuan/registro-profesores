import './colaborador.css';
 import { AiFillCloseCircle } from "react-icons/ai"; 

const Colaborador = (props) => {
    const {nombre, foto, ocupacion} = props.datos
    const{borderColor, removeColaborador} = props
return <div className='colaborador'>
    
    <AiFillCloseCircle className='eliminar' onClick={removeColaborador} />
    <div className='encabezado' style={{backgroundColor: borderColor}}>
        <img src={foto} alt={nombre}/>
    </div>
    <div className='info'>
        <h4>{nombre}</h4>
        <h5>{ocupacion}</h5>
    </div>
</div>
}
export default Colaborador;