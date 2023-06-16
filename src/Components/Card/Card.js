import React from 'react'
import './Card.css'

const Card = ({imagen, producto, frase, valor}) => {
    return (
        
        <div className="card">        
        
            <img className="ima" src={imagen} alt="pro"/>
            <div>{producto}</div>
            <p>{frase}</p>
            <p>{valor}</p>            
        </div>    
    )    
}
export default Card