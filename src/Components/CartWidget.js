import React from 'react';
import cart from './imgenes/Cart.png';
import './CartWidget.css';


export const CartWidget = () => {
    return (
        <div className="cartwidget" >
            <img className="cartwidget-ima" src={cart} alt="" />
        </div>
    )
}

