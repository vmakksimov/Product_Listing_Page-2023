import './Tops.css'
import { useState } from 'react'
import { TopsDetails } from './TopsDetails/TopsDetails'
import { Checkbox } from '../Sections'

export const Tops = ({ products }) => {

    const [checked, setChecked] = useState([]);
    const [colored, setColor] = useState([]);
    const gender = ['male', 'female']
    const colors = ['Black', 'White', 'Khaki', 'Light Grey', 'Dark Grey', 'Brown']

    const genders = products.filter(x => checked.includes(x.gender))
    const color = products.filter(x => colored.includes(x.color))
    const allMatch = products.filter(x => colored.includes(x.color) && checked.includes(x.gender))

    console.log(allMatch)


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
                        <li><a class="dropdown-item" href="#">Alphabetical a-z</a></li>
                        <li><a class="dropdown-item" href="#">Alphabetical z-a</a></li>
                        <li><a class="dropdown-item" href="#">Lowest price</a></li>
                        <li><a class="dropdown-item" href="#">Highest price</a></li>
                    </ul>
                </div>
            </div>
            <div class="div5">

                {checked.length == 0 && colored.length > 0
                    ? color.map(x => <TopsDetails key={x._id} tops={x} />)
                    : allMatch.length > 0
                        ? allMatch.map(x => <TopsDetails key={x._id} tops={x} />)
                        : checked.length == 1

                            ? genders.map(x => <TopsDetails key={x._id} tops={x} />)
                            : products.map(x => <TopsDetails key={x._id} tops={x} />)
                }

                {/* {allMatch.length > 0
                ? allMatch.map(x => <TopsDetails key={x._id} tops={x} />)
                :   checked.length == 1

                ? genders.map(x => <TopsDetails key={x._id} tops={x} />)
                : products.map(x => <TopsDetails key={x._id} tops={x} />)
            } */}

                {/* {checked.length == 1
                    ? genders.map(x => <TopsDetails key={x._id} tops={x} />)
                    : products.map(x => <TopsDetails key={x._id} tops={x} />)
                } */}
                {/* {colored.length > 0 &&
                     color.map(x => <TopsDetails key={x._id} tops={x} />)
                 
                } */}
            </div>
            <div class="div6">Load More </div>
        </section>
    )
}