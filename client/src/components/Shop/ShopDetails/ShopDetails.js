import './ShopDetails.css'
import { useState } from 'react';


export const ShopDetails = ({ tops, setItemCount, itemCount }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [clicked, setClick] = useState(false);

    

    const alertHandler = () => {
        window.alert('The product was succesfully added to the cart!')
    }
    return (
        <>
            <article className="product-item">
                <div className="product-image">
                    <img src={tops.image} alt="" />
                </div>
                <div className="product-info">
                    <p style={{ fontWeight: '700', fontSize: '15px' }}>{tops.name}</p>
                    <p style={{ fontSize: '12px' }}>{tops.description}</p>
                    <div className="stars">
                        {[...Array(5)].map((star, i) => {
                            i += 1;
                            return (
                                <button
                                    type="button"
                                    key={i}
                                    className={i <= (hover || rating) ? "on" : "off"}
                                    onClick={() => setRating(i)}
                                    onMouseEnter={() => setHover(i)}
                                    onMouseLeave={() => setHover(rating)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                            );
                        })}
                    </div>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Price: {tops.price}{tops.currency}</p>
                    <div className='add-button'>
                        {tops.added_to_cart 
                        ? <button className='cart-button' onClick={() => {
                            tops.added_to_cart = false
                            setItemCount(itemCount + 1);
                        }}>ADD TO CART</button>
                        :
                        <button className='cart-button-remove'
                        onClick={() => {
                            tops.added_to_cart = true
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}>
                            REMOVE FROM CART</button>
                    }
                        
                    </div>
                </div>
            </article>
        </>
    )
}