// React Hooks
import { useEffect, useState } from 'react';

// Css 
import './testimonial.css';


const Testimonial = () => {

    const [brandsCount, setBrandsCount] = useState(0);
    const [productsCount, setProductsCount] = useState(0);
    const [customersCount, setCustomersCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (brandsCount !== 200) setBrandsCount(prev => prev + 1);
            if (productsCount !== 2000) setProductsCount(prev => prev + 1);
            if (customersCount !== 5000) setCustomersCount(prev => prev + 1);
        }, 1)
    }, [brandsCount, productsCount, customersCount])


    return (
        <div className='testimonial_div'>

            <div className='first_section'>

                <div className=' testimonials'>
                    <h3 className='count'>{brandsCount}+</h3>
                    <p className='success_region'>
                        International Brands
                    </p>
                </div>

                <div className='second_part testimonials'>
                    <h3 className='count'>{productsCount === 2000 ? "2,000" : productsCount}+</h3>
                    <p className='success_region'>
                        High-Quality Products
                    </p>
                </div>
                
            </div>

            <div className='third_part testimonials'>
                <h3 className='count'>{customersCount === 5000 ? "5,000" : customersCount}+</h3>
                <p className='success_region'>
                    Happy Customers
                </p>
            </div>

        </div>
    )
}

export default Testimonial