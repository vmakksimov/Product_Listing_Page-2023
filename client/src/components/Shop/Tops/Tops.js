import './Tops.css'
import { useState, useContext } from 'react'
import { TopsDetails } from './TopsDetails/TopsDetails'
import { ProductsContext } from '../../../context/productContext'

export const Tops = () => {
    const itemsPerRow = 16
    const { products, name } = useContext(ProductsContext);
    const [next, setNext] = useState(itemsPerRow);
    const [sorted, setSort] = useState([]);
    const [checked, setChecked] = useState([]);
    const [colored, setColor] = useState([]);
    const gender = ['male', 'female']
    const colors = ['Black', 'White', 'Khaki', 'Light Grey', 'Dark Grey', 'Brown', 'Apricot']
    
    let tops;
    let bottoms;
    let genders;
    let color;
    let allMatch;

    if (name == 'Tops') {
        tops = products.filter(x => x.type == 'Tops')
        genders = tops.filter(x => checked.includes(x.gender))
        color = tops.filter(x => colored.includes(x.color))
        allMatch = tops.filter(x => colored.includes(x.color) && checked.includes(x.gender))
    } else {
        bottoms = products.filter(x => x.type == 'Bottoms')
        genders = bottoms.filter(x => checked.includes(x.gender))
        color = bottoms.filter(x => colored.includes(x.color))
        allMatch = bottoms.filter(x => colored.includes(x.color) && checked.includes(x.gender))
    }



    const genderHandler = (e) => {
        let updatedList = [...checked];

        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }

        setChecked(updatedList);
    }

    const colorHandler = (e) => {
        let updatedList = [...colored];

        if (e.target.checked) {
            updatedList = [...colored, e.target.value];
        } else {
            updatedList.splice(colored.indexOf(e.target.value), 1);
        }

        setColor(updatedList);
    }

    const sortHandler = (value) => {
        if (value === 'low-price') {
            products.sort((a, b) => a.price - b.price)
        } else if (value === 'high-price') {
            products.sort((a, b) => b.price - a.price)
        } else if (value === 'ascending') {
            products.sort((a, b) => a.name.localeCompare(b.name))
        } else if (value === 'descending') {
            products.sort((a, b) => b.name.localeCompare(a.name))
        } else {
            products.sort((a, b) => a._id - b._id)
        }
        setSort(value)
    }

    const loadMoreHandler = () => {
        if (next + itemsPerRow > products.length) {
            setNext(products.length)
        } else {
            setNext(next + itemsPerRow);
        }
    }
    return (
        <section class="tops-content">
            <div class="div1">
                <div className="filterList"><strong>Filter by:</strong>
                    <div className="title"><h5>Gender</h5></div>
                    <div className="filter-container">
                        {gender.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" onChange={genderHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="title"><h5>Color</h5></div>
                    <div className="filter-container">
                        {colors.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" onChange={colorHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="div2">{next} products of {products.length} </div>
            <div class="div3">{name == 'Tops' ? <><h1>Tops, Blouses & Tea</h1><p>Mens & Womens collection 2023</p></> : <><h1>Bottoms, Leggings & Sweatpants</h1><p>Mens & Womens collection 2023</p></>}</div>
            <div class="div4">
                <div className="sorting">Sort by
                    <select className="sorting-options" onClick={(e) => sortHandler(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="ascending" >Alphabetically, A-Z</option>
                        <option value="descending" >Alphabetically, Z-A</option>
                        <option value="high-price">High Price</option>
                        <option value="low-price">Low Price</option>
                    </select>
                </div>
            </div>
            <div class="div5">
                {checked.length === 0 && colored.length > 0 ? color?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) : allMatch.length > 0
                    ? allMatch?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) : checked.length === 1
                        ? genders?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) : name == 'Tops' ? tops?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />)
                            : bottoms?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />)
                }
            </div>
            <div class="div6">
                {next < products?.length && (
                    <button className='load-more'

                        onClick={loadMoreHandler}
                    >
                        Load more
                    </button>
                )}
            </div>
        </section>
    )
}