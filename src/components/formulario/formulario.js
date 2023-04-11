import './formulario.css'
import TextInput from '../formulario__textInput/index'

const Formulario = () => {
    return<section className='formulario'>
        <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextInput />
        <TextInput />
        <TextInput />
        </form>
    </section>
}
export default Formulario