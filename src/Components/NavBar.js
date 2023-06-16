import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { CartWidget } from './CartWidget'

const NavBar = () => {
    return (        

        <div className="Todo">
            <div className="Nave-Global">

                <div className="Titulo">
                
                    <h1>CompuShop</h1>                    

                </div>

                
                <div className="Nave">                    
                    
                    <ul className="lista">

                        {/*
                        <li><Link to="/Inicio">Inicio</Link></li>            
                        <li><Link to="/Productos">Productos</Link></li>
                        <li><Link to="/Servicios">Servicios</Link></li>
                        */}
                        
                        <li><NavLink                  
                        className={({isActive}) => (isActive ? "active" : "desactive")}
                        to="/Inicio">Inicio</NavLink></li>
                        
                        <li><NavLink 
                        className={({isActive}) => (isActive ? "active" : "desactive")}
                        to="Productos">Productos</NavLink></li>
                        
                        <li><NavLink 
                        className={({isActive}) => (isActive ? "active" : "desactive")}
                        to="/Servicios">Servicios</NavLink></li>                
                        
                    </ul>
                
                </div>

            </div> 
            
            <div>
                 <CartWidget />       
            </div>
        
        </div>                
    )
}

export default NavBar
