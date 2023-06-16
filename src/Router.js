import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './Pages/Inicio';
import Productos from './Pages/Productos';
import Servicios from './Pages/Servicios';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar';
import Producto from './Components/Producto'; 

function Router() {  

  return (
  
    <BrowserRouter>      
      
      <div className="container">
         
            <NavBar/>
            
            <Routes>

                <Route path="/" element={<h2>{<Inicio />}</h2>}/>
                <Route path="/Inicio" element={<h2>{<Inicio />}</h2>}/>
                <Route path="/Productos" element={<h2>{<Productos />}</h2>}/>
                <Route path="/Productos/:id" element={<h2>{<Producto />}</h2>}/>
                <Route path="/Products" element={<h2>{<Productos />}</h2>}/>
                <Route path="/Servicios" element={<h2>{<Servicios />}</h2>}/>
                <Route path="*" element={<h2>{<NotFound />}</h2>}/>

            </Routes>
      
      </div>    
    
    </BrowserRouter>
  );
}

export default Router;
