import { useState } from "react";

function Navbar(){

    const [menuOuvert, setMenuOuvert] = useState(false)

    return(
<nav className="navbar">
    <div className="container navbar-inner">
        {/* Logo */}

        <a href="#" className="navbar-logo">
            NovaPro
        </a>

        <ul className={`navbar-links ${menuOuvert ? 'ouvert' : ''}`}>

        <li> <a href="#features" onClick={()=> setMenuOuvert(false)}>Fonctionnalités</a></li>
        <li> <a href="#about" onClick={() => setMenuOuvert(false)}>À propos</a></li>
        <li><a href="#temoignages" onClick={() => setMenuOuvert(false)}>Témoignages</a></li>
        <li><a href="#contact" onClick={() => setMenuOuvert(false)}>Contact</a></li>

        </ul>

        <a href="#contact" className="btn-primary navbar-cta">Démarrer</a>

        <button
            className="navbar-flowers"
            onClick={() => setMenuOuvert(!menuOuvert)}
            aria-label = "Menu">
                <span></span>
                <span></span>
                <span></span>
        </button>
    </div>
</nav>


    )
}
export default Navbar