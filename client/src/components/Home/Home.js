import home_logo from '../../styles/images/fashionmodel.png'
import './Home.css'

import shoes from '../../shoes.jpg'
import glasses from '../../glasses.jpg'
import watch from '../../watch.jpg'
export const Home = () => {
    return (
        <>
            <section className="home-logo">
                <div className="header-content">
                    <h2>TOPS & BOTTOMS</h2>
                    <h1>NEW <strong>ARRIVALS</strong></h1>
                    <button className='home-shop'>
                        SHOP
                    </button>
                </div>
                <div className="img-logo">
                    <img src={home_logo} alt="" />
                </div>

            </section>
            <section className='coming-soon'>
                <h1>COMING SOON</h1>
            </section>
            <section className="home-types">
                <div className="type-men">
                    <div className='type-image-men'>
                        <h5>SUMMER 2023</h5>
                        <h1>Shoes</h1>
                        <img src={shoes} alt="" />
                    </div>
                </div>
                <div className="type-accsess">
                    <div className='type-image-women'>
                        <h5>SUMMER 2023</h5>
                        <h1>Watches</h1>
                       
                        <img src={watch} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}