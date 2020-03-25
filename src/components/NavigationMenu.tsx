import React from 'react';
import './App';
import { Link } from 'react-router-dom';

class NavigationMenu extends React.Component {
render() {
    return (
    <nav>
        <ul className="nav-links">
            <Link to='/'>
            <li>StartScreen</li>
            </Link>
            <Link to='/ProductScreen'>
            <li>ProductScreen</li>
            </Link>
            <Link to='/CheckoutScreen'>
            <li>CheckoutScreen</li>
            </Link>
            </ul> 
        </nav>
    );
}
}

export default NavigationMenu;