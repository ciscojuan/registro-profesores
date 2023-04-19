import './equipo.css'
const Equipo = (props) =>{
    //Destructuring
    const {titulo, bgColor, contraste} = props.datos
    const objColor = {
        backgroundColor : bgColor
    }
    return <section className='equipo' style={objColor}>
        <h3 style={{borderColor: contraste  }}>{titulo}</h3>
        <div className='colaboradores'></div>
    </section>
}

export default Equipo;