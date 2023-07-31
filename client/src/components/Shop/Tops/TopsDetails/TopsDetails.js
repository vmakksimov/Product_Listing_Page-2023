import './TopsDetails.css'


export const TopsDetails = ({ tops }) => {
    console.log(tops)
    return (
        <>

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


        </>
    )
}