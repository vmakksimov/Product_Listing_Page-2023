import './Tops.css'
import { useState } from 'react'
import { TopsDetails } from './TopsDetails/TopsDetails'

export const Tops = ({ products, data }) => {
    const itemsPerRow = 16
    const [next, setNext] = useState(itemsPerRow);

    const [sorted, setSort] = useState([]);
    const [checked, setChecked] = useState([]);
    const [colored, setColor] = useState([]);


    const gender = ['male', 'female']
    const colors = ['Black', 'White', 'Khaki', 'Light Grey', 'Dark Grey', 'Brown', 'Apricot']

    if (data == 'Tops') {
        products.filter(x => x.type == data)
    }

    let genders = products.filter(x => checked.includes(x.gender))
    let color = products.filter(x => colored.includes(x.color))
    let allMatch = products.filter(x => colored.includes(x.color) && checked.includes(x.gender))
  


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

    const sortHandler = (e) => {
        setSort(e.target.innerText)

        if (e.target.innerText === 'Low price') {
            products.sort((a, b) => a.price - b.price)
        } else if (e.target.innerText === 'High price') {
            products.sort((a, b) => b.price - a.price)
        } else if (e.target.innerText === 'Alphabetical a-z') {
            products.sort((a, b) => a.name.localeCompare(b.name))
        } else if (e.target.innerText === 'Alphabetical z-a') {
            products.sort((a, b) => b.name.localeCompare(a.name))
        }
    }

    const loadMoreHandler = () => {
        setNext(next + itemsPerRow);
        // products = products?.slice(0, next)?.map(x => x)
       
    }


    return (
        <section class="tops-content">
            <div class="div1">
                <div className="filterList">Filter by:
                    <div className="title">Gender</div>
                    <div className="filter-container">
                        {gender.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" onChange={genderHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="title">Color</div>
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
            <div class="div2">Counter Prodcuts </div>
            <div class="div3">Category Name & Description</div>
            <div class="div4">
                <div class="dropdown">Sort by
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Recommended
                    </button>
                    <ul class="dropdown-menu">
                        <li><button className="dropdown-item" onClick={(e) => sortHandler(e)}>Alphabetical a-z</button></li>
                        <li><button className="dropdown-item" onClick={(e) => sortHandler(e)}>Alphabetical z-a</button></li>
                        <li><button className="dropdown-item" onClick={(e) => sortHandler(e)}>Low price</button></li>
                        <li><button className="dropdown-item" onClick={(e) => sortHandler(e)}>High price</button></li>
                    </ul>
                </div>
            </div>
            <div class="div5">
                {/* {products?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) } */}
                {checked.length === 0 && colored.length > 0
                    ? color?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) : allMatch.length > 0
                        ? allMatch?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) : checked.length === 1
                            ? genders?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />) : products?.slice(0, next)?.map(x => <TopsDetails key={x._id} tops={x} />)
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