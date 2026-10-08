// Components
import ActionButton from '../../utils/actionbutton/ActionButton';
import ProductsCard from '../products-card/ProductsCard';

// Assets
import { newarrival_image_1 } from '../../staticdata/ImageData';

// Data
import NewArrivalsList from '../../staticdata/NewArrivals';

// React Router Hooks
import { useNavigate } from 'react-router-dom';






const NewArrivals = () => {


    const navigate = useNavigate();

    const goToCategory = (category: string) => {
        navigate(`/products/${category}`)
    }

    const viewProduct = (category: string, id: string) => {
        navigate(`view-product/${category}/${id}`)
    }



    return (
        <section id='newArrivals' className='product_list_section'>

            <h1 className='product_list_header'>NEW ARRIVALS</h1>

            <div className='product_images_div'>

                {
                    NewArrivalsList.slice(0, 4).map(arrivals => 
                    <ProductsCard 
                    id={arrivals.id} 
                    image={arrivals.image} 
                    name={arrivals.name} 
                    star_rating={arrivals.star_rating} 
                    rating={arrivals.rating} 
                    old_price={arrivals.old_price} 
                    price={arrivals.price} 
                    discount={arrivals.discount}
                    viewProduct={() => viewProduct("new-arrivals", arrivals.id)}
                    /> )
                }

            </div>

            <ActionButton func={() => goToCategory("new-arrivals")} value='View All' />
            <hr className='line' />
        </section>
    )
}

export default NewArrivals;