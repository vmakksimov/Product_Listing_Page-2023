import './Tops.css'
import { useState } from 'react'
import { TopsDetails } from './TopsDetails/TopsDetails'
import { Checkbox } from '../Sections'

export const Tops = ({ products }) => {

    const [checked, setChecked] = useState([]);
    const gender = ['male', 'female']

    const males = products.filter(x => x.gender == 'male')
    const females = products.filter(x => x.gender == 'female')

    const checkHandler = (e) => {
        let updatedList = [...checked];

        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }

        setChecked(updatedList);
    }


    return (
        <section class="tops-content">
            <div class="div1">
                <div className="checkList">
                    <div className="title">Your CheckList:</div>
                    <div className="list-container">
                        {gender.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" onChange={checkHandler} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="div2">Counter Prodcuts </div>
            <div class="div3">Category Name & Description </div>
            <div class="div4">Sort</div>
            <div class="div5">
                {/* <section className="items-row-1">
                    <article className="product-item">
                        <div className="product-image">
                            <img src={tops.image} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top2} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top3} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top4} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                </section>
                <section className="items-row-2">
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top5} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top6} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top7} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top8} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Black top </p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                </section>
                <section className="items-row-3">
                <article className="product-item">
                        <div className="product-image">
                            <img src={top10} alt="" />
                        </div>
                        <div className="product-info">
                            <p>Bae solid fitted Tee</p>
                            <p>Stars: </p>
                            <p>Price: 20$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top11} alt="" />
                        </div>
                        <div className="product-info">
                            <p>EZwear Solid Drop Shoulder Tee</p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top12} alt="" />
                        </div>
                        <div className="product-info">
                            <p>EZwear Solid Crop Tank</p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                    <article className="product-item">
                        <div className="product-image">
                            <img src={top13} alt="" />
                        </div>
                        <div className="product-info">
                            <p>BASICS Solid Crop Tube Top</p>
                            <p>Price: 50$</p>
                            <p>Price: 50$</p>
                            <p>Men Cartoon Graphic Tee</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                </section>
                <section className="items-row-4">
                    <article className="product-item">
                        <div className="product-image"></div>
                        <div className="product-info"></div>
                    </article>
                    <article className="product-item">
                        <div className="product-image"></div>
                        <div className="product-info"></div>
                    </article>
                    <article className="product-item">
                        <div className="product-image"></div>
                        <div className="product-info"></div>
                    </article>
                    <article className="product-item">
                        <div className="product-image"></div>
                        <div className="product-info"></div>
                    </article>
                </section> */}
                {checked.length > 0
                    ? checked == 'male' ? males.map(x => <TopsDetails key={x._id} tops={x} />) : females.map(x => <TopsDetails key={x._id} tops={x} />)
                    : products.map(x => <TopsDetails key={x._id} tops={x} />)
                }
            </div>
            <div class="div6">Load More </div>
        </section>
    )
}