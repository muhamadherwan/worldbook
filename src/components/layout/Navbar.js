import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
//import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';   
import NightsStayIcon from '@material-ui/icons/NightsStay';

const Navbar = ( {icon, title} ) => {
    
        return (
            <nav className="navbar bg-primary"> 
                <h1>
                    {icon} {title}
                </h1>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li> */}
                    <li>
                    <NightsStayIcon />
                        Dark Mode
                    </li>
                </ul>

            </nav>
        )
    
}

// set default props
Navbar.defaultProps = {
    title: 'Where in the world?',
    icon: <LanguageIcon />
};

// set props type
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar