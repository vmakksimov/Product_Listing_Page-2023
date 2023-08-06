import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <section className="footer-shop">
            <article className='footer-title'>
                <h4>Project Listing Page by Viktor Maksimov 2023</h4>
            </article>
            <ul className='footer-links'>
                <li><Link to=''>Contact Us</Link></li>
                <li><Link to=''>Terms & Conditions</Link></li>
                <li><Link to=''>Help Center</Link></li>
            </ul>
        </section>
    )
}