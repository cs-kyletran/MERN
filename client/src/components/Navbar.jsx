import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className='navbar-content'>
                <ul className="nav-links">
                    <li><NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/crochets" className={({ isActive }) => isActive ? 'active' : ''}>Crochets</NavLink></li>
                    <li><NavLink to="/jewelry" className={({ isActive }) => isActive ? 'active' : ''}>Jewelry</NavLink></li>
                </ul>
                <hr className="nav-divider" />
            </div>
        </nav>
    )
};