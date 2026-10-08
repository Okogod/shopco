
type ProductsCardProps = {
    id: string
    image: string,
    name: string,
    star_rating: string,
    rating: string,
    price: string,
    old_price: string,
    discount: string
    viewProduct: () => void
}

const ProductsCard = ( {id, image, name, star_rating, rating, price, old_price, discount, viewProduct}:ProductsCardProps ) => {
    return (
        <div key={id} className='product_image_div' onClick={viewProduct}>
            <img src={image} alt={name} className='product_image' />
            <p className='product_name'>{name}</p>
            <div className='product_ratings_div'>
                <span className='stars_span'>{star_rating}</span>
                <p className='rating_text'>{rating}<span className='max_rating'>5</span></p>
            </div>
            <div className='prices_div'>
                <p className='main_price_'>{price}</p>
                <p className='old_price'>{old_price}</p>
                <p className={discount ? "discount" : ""}>{discount}</p>
            </div>
        </div>
    )
}

export default ProductsCard