import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(https://www.figma.com/design/g0lPfF6MnBImDq7ube3STz/Intro-a-React-Org?node-id=196-1397&t=omXOZA39KmYsgiBl-4)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer