
// Assets
import { hero_img } from '../../staticdata/ImageData';

// Component
import HeroSectionRight from '../heroright/HeroSectionRight';

// Css
import './hero.css';

const Hero = () => {



    return (
        <section className='hero_section'>
            <HeroSectionRight/>
            <img src={hero_img} alt="" className='hero_img'/>
        </section>
    )
}

export default Hero