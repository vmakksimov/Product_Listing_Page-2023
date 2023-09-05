import './Shop.css'
import Popup from 'reactjs-popup';
import { useState, useContext } from 'react'
import { ShopDetails } from './ShopDetails/ShopDetails'
import { ProductsContext } from '../../context/productContext'

export const Shop = () => {
    const itemsPerRow = 16
    const { products, gender } = useContext(ProductsContext);
    const [next, setNext] = useState(itemsPerRow);
    const [sorted, setSort] = useState([]);
    const [checked, setChecked] = useState([]);
    const [colored, setColor] = useState([]);
    const [show, setShow] = useState(false);
    const type = ['Tops', 'Bottoms']
    const colors = ['Black', 'White', 'Khaki', 'Light Grey', 'Dark Grey', 'Brown', 'Apricot']

    const men = products.filter(x => x.gender == 'male')
    const women = products.filter(x => x.gender == 'female')
    let types;
    let color;
    let allMatch;

    if (gender == 'Men') {
        types = men.filter(x => checked.includes(x.type))
        color = men.filter(x => colored.includes(x.color))
        allMatch = men.filter(x => colored.includes(x.color) && checked.includes(x.type))
    } else {
        types = women.filter(x => checked.includes(x.type))
        color = women.filter(x => colored.includes(x.color))
        allMatch = women.filter(x => colored.includes(x.color) && checked.includes(x.type))
    }


    const typeHandler = (e) => {
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

    const changeFilter = () => {

        if (show == false) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    return (
        <section className="tops-content">
            {/* <Popup trigger={<button className='filter-button'> <i class="fa-solid fa-filter"></i></button>} position="right center">
                <div className="filterList"><h5>Filter by:</h5>
                    <div className="title"><h5>Type</h5></div>
                    <div className="filter-container">
                        {type.map((item, index) => (
                            <div className="checks" key={index}>
                                <input value={item} type="checkbox" onChange={typeHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="title"><h5>Color</h5></div>
                    <div className="filter-container">
                        {colors.map((item, index) => (
                            <div className="checks" key={index}>
                                <input value={item} type="checkbox" onChange={colorHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Popup> */}
            {/* <button className='filter-button' onClick={changeFilter}><i className="fa-solid fa-filter"></i></button> */}

            <div className="filter">
                <div className="filterList"><h5>Filter by:</h5>
                    <div className="title"><h5>Type</h5></div>
                    <div className="filter-container">
                        {type.map((item, index) => (
                            <div className="checks" key={index}>
                                <input value={item} type="checkbox" onChange={typeHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="title"><h5>Color</h5></div>
                    <div className="filter-container">
                        {colors.map((item, index) => (
                            <div className="checks" key={index}>
                                <input value={item} type="checkbox" onChange={colorHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="category">
                <h1>Tops & Bottoms</h1><h3>Mens & Womens collection 2023</h3>

            </div>
            <div className="sort"> <div className="sorting">Sort by
                <select className="sorting-options"
                    onClick={(e) => sortHandler(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="ascending" >Alphabetically, A-Z</option>
                    <option value="descending" >Alphabetically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                </select>
            </div></div>
            <div className="counter">
                {gender == 'Men' ? next > men.length ? men.length : next : next > women.length ? women.length : next} products of {gender == 'Men' ? men.length : women.length}
            </div>
            <div className="product-grid">
                {checked.length === 0 && colored.length > 0 ? color?.slice(0, next)?.map(x => <ShopDetails key={x._id} tops={x} />)
                    : allMatch.length > 0 ? allMatch?.slice(0, next)?.map(x => <ShopDetails key={x._id} tops={x} />)
                        : checked.length === 1
                            ? types?.slice(0, next)?.map(x => <ShopDetails key={x._id} tops={x} />) : gender == 'Men' ? men?.slice(0, next)?.map(x => <ShopDetails key={x._id} tops={x} />)
                                : women?.slice(0, next)?.map(x => <ShopDetails key={x._id} tops={x} />)
                }
            </div>
            <div className="load-items">
                {next < men.length && (
                    <button className='load-more'

                        onClick={loadMoreHandler}
                    >
                        LOAD MORE
                    </button>
                )}
            </div>
        </section >
    )
}