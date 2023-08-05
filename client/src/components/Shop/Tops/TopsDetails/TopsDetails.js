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

                    <p style={{ fontWeight: '700' }}>{tops.name}</p>
                    <p style={{ fontSize: '12px' }}>{tops.description}</p>
                    <p style={{ fontWeight: '300' }}>Price: {tops.price}{tops.currency}</p>

                    <div className='add-button'>
                        <button className='cart-button' onClick={alertHandler}>ADD TO CART</button>
                    </div>

                </div>
            </article>
        </>
    )
}