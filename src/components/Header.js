import React from 'react';

const Header = () => {
    
    
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <span>Pokedex</span>
                </div>
            </a>
            <p className="inicio"><a href="#">Inicio</a></p>
            <form>
                <input className="buscador" name="buscar" type="text" placeholder="Buscar..."></input>
            </form>
        </header>
    )
}

export default Header;