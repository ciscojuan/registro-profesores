import './footer.css'

const Footer = () => {
    return <footer className='footer' style={{background: "url('/img/rodapé.png')"}}>
    <div classname="redes">
        <a href="www.aluracursos.com">
            <img src="/img/facebook.png" alt="facebook" />
        </a>
        <a href="www.aluracursos.com">
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        <a href="www.aluracursos.com">
            <img src="/img/twitter.png" alt="twitter" />
        </a>
    </div>
    <img src="/img/Logo.png" alt="" />
    </footer>
}

export default Footer;