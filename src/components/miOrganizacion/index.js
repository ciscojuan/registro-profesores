import './miorganizacion.css';

const MiOrganizacion = (props) => {

    return <section className='organization'>
        <h3 className='title'>Mi Organizacion</h3>
        <img src='/img/add.png' alt="Agregar profesor" onClick={props.showForm}/>
    </section>
}
export default MiOrganizacion