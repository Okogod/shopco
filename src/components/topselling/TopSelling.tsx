// Data
import TopSellingList from '../../staticdata/TopSelling';


// Component
import ActionButton from '../../utils/actionbutton/ActionButton';
import ProductsCard from '../products-card/ProductsCard';

// React Router Hooks
import { useNavigate } from 'react-router-dom';





const TopSelling = () => {


    
    
    const navigate = useNavigate();
    
    const goToProducts = (category: string) => {
        navigate(`/products/${category}`)
    }
    
    const viewProduct = (category: string, id: string) => {
        navigate(`view-product/${category}/${id}`)
    }

    return (
        <section id="topSelling" className='product_list_section'>

            <h1 className='product_list_header'>TOP SELLING</h1>

            <div className='product_images_div'>

                {
                    TopSellingList.slice(0, 4).map(topselling =>
                  <ProductsCard 
                    id={topselling.id} 
                    image={topselling.image} 
                    name={topselling.name} 
                    star_rating={topselling.star_rating} 
                    rating={topselling.rating} 
                    old_price={topselling.old_price} 
                    price={topselling.price} 
                    discount={topselling.discount}
                    viewProduct={() => viewProduct("top-selling", topselling.id)}
                    />
                    )
                }

            </div>

            <ActionButton  func={() => goToProducts("top-selling")} value='View All' />        

            <hr className='line' />

        </section>
    )
}

export default TopSelling