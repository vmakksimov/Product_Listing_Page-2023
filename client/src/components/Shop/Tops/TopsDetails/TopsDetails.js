import './TopsDetails.css'


export const TopsDetails = ({ tops }) => {
    
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
                    <p>{tops.name}</p>
                    <p>{tops.description}</p>
                    <p>Price: {tops.price}{tops.currency}</p>
                    <button className='cart-button' onClick={alertHandler}>Add to cart</button>
                </div>
            </article>
        </>
    )
}