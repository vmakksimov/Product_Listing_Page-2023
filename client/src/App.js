
// import './App.css';
import './styles/index.css'
import './styles/responsive.css'
import products from './local-json/products.json'
import { useState } from 'react'
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Shop } from './components/Shop/Shop';
import { ProductsContext } from './context/productContext';
import { About } from './components/About/About';


function App() {

    const [gender, setName] = useState(localStorage.getItem("gender") || undefined)
    const [itemCount, setItemCount] = useState(1);

    const handleFormChange = (event) => {
        setName(event)
        localStorage.setItem("gender", event);
    }


    return (
        <div className="App">
            <section className="App-header">
                <Header handleFormChange={handleFormChange} itemCount={itemCount}/>
            </section>
            <ProductsContext.Provider value={{ products, gender, itemCount, setItemCount }}>
                <section className="home-section">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </section>
            </ProductsContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
