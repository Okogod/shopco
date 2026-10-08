
// Assets
import { versace, zara, gucci, prada, calvin_klein } from '../../staticdata/ImageData';

// Css
import './brands.css';

const Brands = () => {
     return(
        <div className='brands'>
            <img src={versace} alt='Versace logo' className='brand_img' />
            <img src={zara} alt='Zara logo' className='brand_img zara' />
            <img src={gucci} alt='Gucci logo' className='brand_img' />
            <img src={prada} alt='Prada logo' className='brand_img' />
            <img src={calvin_klein} alt='Calvin Klein logo' className='brand_img' />
        </div>
     )
}

export  default Brands