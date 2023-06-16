import React from 'react';
import {Link} from 'react-router-dom';
import './pages.css';

const Inicio = () => {
    return (
        <div className="inicio">
            
            <h2>Bienvenidos a CompuShop</h2>
            <h4>Recorra nuestro menú de Productos y elija lo esta buscando.</h4>
            <h4>Puede hacerlo desde el menú o bien presionando en el link que le </h4>
            <h4>dejamos aquí abajo:</h4>
            <Link className="linkProductos" to="/Productos">- Productos -</Link>
            
        </div>
    )
}

export default Inicio
