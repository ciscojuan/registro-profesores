import './select.css';

const Select = () => {
    const equipos = [
        'programación',
        'Front End',
        'Data Science',
        'Dev Ops',
        'UX y Diseño',
        'Móvil',
        'Inovación y Gestión']
    
    return (
    <div className="input">
        <label>Equipos:</label>
        <select>
            {equipos.map((item, index) =>  <option key={index}>{item}</option> )}
        </select>
    </div>)
}
export default Select