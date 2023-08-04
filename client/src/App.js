
// import './App.css';
import './styles/index.css'
import products from './local-json/products.json'
import { useState } from 'react'
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Tops } from './components/Shop/Tops/Tops';
import { ProductsContext } from './context/productContext';


function App() {

    const [name, setName] = useState(localStorage.getItem("name") || undefined)

    const handleFormChange = (event) => {
        setName(event)
        localStorage.setItem("name", event);
    }

    const [data, setData] = useState([]);


    // const optionHandler = (option) => {
    //     console.log(option)
    //     setData(option)
    // }

    return (
        <div className="App">
            <section className="App-header">
                <Header handleFormChange={handleFormChange} />
            </section>
            <ProductsContext.Provider value={{ products, name }}>
                <section className="home-section">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/tops' element={<Tops />} />
                    </Routes>
                </section>
            </ProductsContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
