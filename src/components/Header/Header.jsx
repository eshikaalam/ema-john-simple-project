import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
           <a href="/shop">Shop</a>
           <a href="/order">order</a>
           <a href="/inventory">inventory</a>
           <a href="/login">Login</a>
           </div>
        </nav>
    );
};

export default Header;<h1>This is Header</h1>