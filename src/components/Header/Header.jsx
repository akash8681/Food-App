import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
class Header extends  React.Component{
    render() {
        return (
           <header>
                <div className='logo'>
                    <h1>feane</h1>
                </div>
                <div className="menus">
                <div className='navbar'>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Book">Book Table</Link></li>
                </ul>
                </div>
                <div className='logoicon'>
                <ul>
                    <li><a href="#"> <FaUser /></a></li>
                    <li><a href="#"> <FaShoppingCart /></a></li>
                    <li><a href="#"> <FaSearch /></a></li>
                    <li className='order'><a href="#">Order Online</a></li>
                </ul>
                </div>
                </div>
           </header>
        );
    }
};

export default Header;