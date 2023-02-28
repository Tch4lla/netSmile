import img from '../assets/logo.png'
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 

        <nav className='navbar'>
            <h1>
                <NavLink to="/" className='navbar-logo'>
                    <img src={img} alt="Net Smile Logo" />
                </NavLink>
            </h1>
            
                
                    <NavLink to="https://aiocr.ai/lp_en/" className='navbar-menu-item'>
                    Ai Scan Robot
                    </NavLink>
                
                
                    <NavLink to="/automation" className='navbar-menu-item'>
                    Ai Automation Robot
                    </NavLink>
                
                    <NavLink to="/company" className='navbar-menu-item'>
                    Company Information
                    </NavLink>
                
                    <NavLink to="/business" className='navbar-menu-item'>
                    Business
                    </NavLink>
                
                    <NavLink to="/recruit" className='navbar-menu-item'>
                    Recruit
                    </NavLink>
                
                    <NavLink to="/contact" className='navbar-menu-item'
                    style={{
                        color:'white',
                        backgroundColor: '#1282A1',
                        borderRadius: '3px',
                        padding: '10px'
                    }}>Contact
                    </NavLink>
                
            
            <p className='navbar-menu-item'>
                <img src="" alt="" />
                <NavLink to="">EN</NavLink>
                /
                <NavLink to="">JA</NavLink>
            </p>
        </nav>
        
        
     );
}
 
export default Navbar;