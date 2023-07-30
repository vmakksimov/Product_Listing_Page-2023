import home_logo from '../../styles/images/fashionmodel.png'
import women_model_logo from '../../styles/images/womenmodel.png'

import men_model from '../../styles/images/menmodel.png'

import './Home.css'
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
            <section className="home-types">
                <div className="type-men">
                    <div className='type-content'>
                        <h1>Men</h1>
                        <p>Summer 2023</p>
                    </div>
                    <div className='type-image-men'>
                        <img src={men_model} alt="" />
                    </div>
                </div>
                <div className="type-women">
                <div className='type-content'>
                        <h1>Women</h1>
                        <p>Summer 2023</p>
                    </div>
                    <div className='type-image-women'>
                        <img src={women_model_logo} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}