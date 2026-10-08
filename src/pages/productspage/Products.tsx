// React Router Hooks
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Css
import './products.css';

// New Arrivals Data
import NewArrivalsList from '../../staticdata/NewArrivals';

// Top Selling Data
import TopSellingList from '../../staticdata/TopSelling';

// Components
import Footer from '../../components/footer/Footer';


const Products = () => {

    document.title = "ShopCo - All Products"

    const { category } = useParams();

    const navigate = useNavigate();

    const viewProduct = (category: string, id: string) => {
        navigate(`/view-product/${category}/${id}`)
    }




    return (
        <section className='products_section'>


            <h1 className='new_arrivals_header'>{`${category?.replace("-", " ")}`}  Category</h1>

            <div className='products_div'>
                {

                    category == "new-arrivals" ?

                        NewArrivalsList.map(arrivals =>
                            <div className='arrival_images' onClick={() => {viewProduct("new-arrivals", arrivals.id)}}>
                                <img src={arrivals.image} alt={arrivals.name} className='products_images' />
                                <p className='product_name'>{arrivals.name}</p>
                                <div className='product_ratings_div'>
                                    <span className='stars_span'>{arrivals.star_rating}</span>
                                    <p className='rating_text'>{arrivals.rating}<span className='max_rating'>5</span></p>
                                </div>
                                <div className='prices_div'>
                                    <p className='main_price_p'>{arrivals.price}</p>
                                    <p className='old_price'>{arrivals.old_price}</p>
                                    <p className={arrivals.discount ? "discount" : ""}>{arrivals.discount}</p>
                                </div>
                            </div>
                        )
                        : TopSellingList.map(topselling =>
                            <div className='arrival_product_image' onClick={() => {viewProduct("top-selling", topselling.id)}}>
                                <img src={topselling.image} alt={topselling.name} className='products_images' />
                                <p className='product_name'>{topselling.name}</p>
                                <div className='product_ratings_div'>
                                    <span className='stars_span'>{topselling.star_rating}</span>
                                    <p className='rating_text'>{topselling.rating}<span className='max_rating'>5</span></p>
                                </div>
                                <div className='prices_div'>
                                    <p className='main_price_p'>{topselling.price}</p>
                                    <p className='old_price'>{topselling.old_price}</p>
                                    <p className={topselling.discount ? "discount" : ""}>{topselling.discount}</p>
                                </div>
                            </div>
                        )
                }
            </div>

            <hr className='lin'/>

            <Footer/>
        </section>
    )
}

export default Products;