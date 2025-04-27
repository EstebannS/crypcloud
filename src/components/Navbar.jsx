import logo from '../img/logo.jpg'; // O la imagen que prefieras

function Navbar() {
return (
    <nav className="navbar">
        <div className="navbar-left">
            <img 
                src={logo} 
                alt="CrypCloud Logo" 
                className="logo" 
                style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginRight: '10px'
                }} 
            />
            <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '2px' }}>
                    CrypCloud StartUp
                </div>
                <div className="lema" style={{ fontSize: '14px' }}>
                    Protege tu futuro, cifra tus datos.
                </div>
            </div>
        </div>
        <div className="nav-links">
            <a href="/">Inicio</a>
            <a href="/sobre-nosotros">Sobre Nosotros</a>
            <a href="/propuesta">Propuesta</a>
            <a href="/demo-cifrado">Demo Cifrado</a>
        </div>
    </nav>
);
}

export default Navbar;
