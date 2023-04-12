import './select.css';

const Select = (props) => {
    const equipos = [
        'programación',
        'Front End',
        'Data Science',
        'Dev Ops',
        'UX y Diseño',
        'Móvil',
        'Inovación y Gestión']
        
        const onChange = (e) => {
            props.setValor(e.target.value)
        }
    return (
    <div className="input">
        <label>Equipos:</label>
        <select value={props.valor} onChange={onChange}>
            <option value='' disabled defaultValue='' hidden>Seleccione una opcion:</option>
            {equipos.map((item, index) =>  <option key={index} >{item}</option> )}
        </select>
    </div>)
}
export default Select