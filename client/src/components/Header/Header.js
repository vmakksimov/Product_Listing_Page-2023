import { Link } from "react-router-dom"
import './Header.css'
import logo from '../../styles/images/logo.png'
export const Header = ({handleFormChange}) => {

    return (

        <div className="header-nav">
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <ul className="header-elements">
                <li className='header-buttons'><Link to='/'>Home</Link></li>
                <li className='header-buttons'><Link to='/shop' onClick={(e) => handleFormChange(e.target.innerText)}>Men</Link></li>
                <li className='header-buttons'><Link to='/shop' onClick={(e) => handleFormChange(e.target.innerText)}>Women</Link></li>
            </ul>
        </div>
    )
}