// Css
import './view.css';

// Components
import Footer from '../../components/footer/Footer';
import ProductsCard from '../../components/products-card/ProductsCard';

// React Router Hooks
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import NewArrivalsList from '../../staticdata/NewArrivals';
import TopSellingList from '../../staticdata/TopSelling';

import { newarrival_image_1 } from '../../staticdata/ImageData';


const ViewPage = () => {

    document.title = "ShopCo - View Products"

    const { category, id } = useParams();

    const navigate = useNavigate();

    const viewProduct = (category: string, id: string) => {
        navigate(`/view-product/${category}/${id}`)
    }

    const data = category === "new-arrivals" ? NewArrivalsList : TopSellingList;


    return (
        <section className='view_section'>


            <div className='top'>
                {

                    category == "new-arrivals" ?
                        NewArrivalsList.filter(item => item.id == id).map(item =>
                            <div className='view_section_top'>
                                <img src={item.image} alt={item.name} className='view_image' />

                                <div className='top_right'>
                                    <h1 className='top_right_header'>{item.name}</h1>

                                    <div className='product_ratings_div'>
                                        <span className='stars_span'>{item.star_rating}</span>
                                        <p className='rating_text'>{item.rating}<span className='max_rating'>5</span></p>
                                    </div>

                                    <div className='prices_div'>
                                        <span className='curr_price'>{item.price}</span>
                                        <span className='old_price'>{item.old_price}</span>
                                        <span className={item.discount ? "discount" : ""}>{item.discount}</span>
                                    </div>

                                    <p className='description'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        )

                        :
                        TopSellingList.filter(item => item.id == id).map(item =>
                            <div className='view_section_top'>
                                <img src={item.image} alt={item.name} className='view_image' />

                                <div className='top_right'>
                                    <h1 className='top_right_header'>{item.name}</h1>

                                    <div className='product_ratings_div'>
                                        <span className='stars_span'>{item.star_rating}</span>
                                        <p className='rating_text'>{item.rating}<span className='max_rating'>5</span></p>
                                    </div>

                                    <div className='prices_div'>
                                        <span className='curr_price'>{item.price}</span>
                                        <span className='old_price'>{item.old_price}</span>
                                        <span className={item.discount ? "discount" : ""}>{item.discount}</span>
                                    </div>

                                    <p className='description'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )

                }

                <hr className='line'/>

                <div className='view_section_bottom'>
                    <h1 className='bottom_header'>You Might Also Like</h1>

                    <div className='product_images_div'>


                        {
                            category == "new-arrivals" ?

                                NewArrivalsList.filter(item => item.id !== id).slice(0, 4).map(item =>
                                <ProductsCard
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    star_rating={item.star_rating}
                                    rating={item.rating}
                                    old_price={item.old_price}
                                    price={item.price}
                                    discount={item.discount}
                                    viewProduct={() => viewProduct("new-arrivals", item.id)}
                                />
                                )

                                :
                                TopSellingList.filter(item => item.id !== id).slice(0, 4).map(item =>
                                <ProductsCard
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    star_rating={item.star_rating}
                                    rating={item.rating}
                                    old_price={item.old_price}
                                    price={item.price}
                                    discount={item.discount}
                                    viewProduct={() => viewProduct("top-selling", item.id)}
                                />
                                )
                        }








                    </div>


                </div>
            </div>

            <Footer />


        </section >
    )
}

export default ViewPage;