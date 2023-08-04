
// import './App.css';
import './styles/index.css'
import products from './local-json/products.json'
import { useState } from 'react'
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Tops } from './components/Shop/Tops/Tops';


function App() {
    const [data, setData] = useState([]);

    const setProducts = () => {
        setData(products)
    }

    const optionHandler = (option) => {
        console.log(option)
        setData(option)
    }

    return (
        <div className="App">
            <section className="App-header">
                <Header optionHandler={optionHandler} />
            </section>
            <section className="home-section">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tops' element={<Tops products={products} optionHandler={optionHandler} data={data} />} />
                </Routes>
            </section>
            <Footer />
        </div>
    );
}

export default App;
