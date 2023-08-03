import './TopsDetails.css'


export const TopsDetails = ({ tops }) => {
 
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
                    <button>Add to cart</button>
                </div>
            </article>
        </>
    )
}