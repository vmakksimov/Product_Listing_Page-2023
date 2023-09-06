import { Link } from "react-router-dom"
import './Header.css'
import logo from '../../styles/images/logo.png'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";
export const Header = ({ handleFormChange, itemCount }) => {
   

    return (
        <>
            <div id="nav-container">
                <div class="bg"></div>
                <div class="button" tabindex="0">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
                <div id="nav-content" tabindex="0">

                    <ul className="header-elements">
                        <li className='header-buttons'><Link to='/'>Home</Link></li>
                        <li className='header-buttons'><Link to='/shop' onClick={(e) => handleFormChange(e.target.innerText)}>Men</Link></li>
                        <li className='header-buttons'><Link to='/shop' onClick={(e) => handleFormChange(e.target.innerText)}>Women</Link></li>
                    </ul>

                </div>
            </div>


            <div className="header-nav">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <ul className="header-elements">
                    <li className='header-buttons'><Link to='/'>Home</Link></li>
                    <li className='header-buttons'><Link to='/shop' onClick={(e) => handleFormChange(e.target.innerText)}>Men</Link></li>
                    <li className='header-buttons'><Link to='/shop' onClick={(e) => handleFormChange(e.target.innerText)}>Women</Link></li>
                </ul>
                <div>
                    <Badge color="secondary" badgeContent={itemCount}>
                        <ShoppingCartIcon />{" "}
                    </Badge>
                    
                </div>
            </div>

        </>
    )
}