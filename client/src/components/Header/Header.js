import { Link } from "react-router-dom"
import './Header.css'
import logo from '../../styles/images/logo.png'
export const Header = ({optionHandler}) => {

    const optionsHandler = (e) => {
        optionHandler(e.target.innerText)
    }
    return (

        <div className="header-nav">
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <ul className="header-elements">
                <li className='header-buttons'><Link to='/'>Home</Link></li>
                <li className='header-buttons'><Link to='/tops' onClick={(e) => optionsHandler(e)}>Tops</Link></li>
                <li className='header-buttons'><Link to=''>Bottoms</Link></li>
            </ul>
        </div>
    )
}