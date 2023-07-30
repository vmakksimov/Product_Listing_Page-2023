
// import './App.css';
import './styles/index.css'
import products from './local-json/products.json'
import { useState, useEffect } from 'react'
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Routes, Route} from 'react-router-dom';


function App() {
    const [data, setData] = useState([]);

    const setProducts = () => {
        setData(products)
    }



    // useEffect(() => {
    //   productService.getProducts()
    //     .then(res => console.log(res))
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }, [])

    return (
        <div className="App">
            <section className="App-header">
                <Header />
            </section>

            <section className="home-section">

                <Routes>
                <Route path='/' element={<Home />} />
                {products && products.map(res => (
                    // <div key={_id} className='row'>
                    //     <strong>{title}</strong>
                    // </div>
                    console.log(res)
                ))}
                </Routes>
            </section>


        </div>
    );
}

export default App;
