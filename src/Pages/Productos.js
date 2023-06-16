import React from 'react';
import {useState, useEffect} from 'react';
import compuApi from './../ApiRest/compuApi';
//import {useParams} from "react-router-dom";
import './pages.css';
import Card from '../Components/Card/Card';

const Productos = () => { 
    
  const [producto, setProducto] = useState([]);  

  const getData = () => {
    setTimeout(() => {
    const dataproducto = compuApi;
    setProducto(dataproducto);
    }, 2000);
  }
    
    useEffect(() => {
      getData();
    }, []);    


    return (

      <div className="principal_container">

          {!producto ? 'cargando...' : 
          producto.map ((producto, index) => (
              
             <Card key = {index}
             
                imagen = {producto.imagen}
                producto = {producto.producto}
                frase = {producto.frase}
                valor = {producto.valor}

             /> 
          ))             
          }       
      
      </div>  
    );
}

export default Productos