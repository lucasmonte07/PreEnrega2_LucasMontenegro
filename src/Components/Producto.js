/* Este componente se usa para hacer busquedas 
tanto en bases de datos como para por ej 
con un fetch buscar en una url.

El id sería el parámetro a buscar y en dentro de los paréntesis 
de useParams se ubicaría lo que se quiere buscar.*/


import React from 'react'
import {useParams} from 'react-router-dom'

const Producto = () => {

    const {id} = useParams()

    return (
        <div>
            Producto <h2>{id}</h2>
        </div>
    )
}

export default Producto