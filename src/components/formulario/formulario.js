import './formulario.css'
import TextInput from './formulario__textInput'
import Select from './formulario__select'
import Boton from './formulario__boton'

const Formulario = () => {
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log('mensaje enviado')
    }
    return<section className='formulario'>
        <form onSubmit={onSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextInput label="Nombre" type="text"  placeholder="Enter you Name" required/>
        <TextInput label="Puesto" type="text" placeholder="Enter your ocupation" required/>
        <TextInput label="Foto" type="text" placeholder="Entre your github profile photo" required/>
        <Select />
        <Boton/>
        </form>
    </section>
}
export default Formulario