// Css
import './herosectionright.css';

// components
import Testimonial from '../testimonialcomponent/Testimonial';

// Utils
import ActionButton from '../../utils/actionbutton/ActionButton';


const HeroSectionRight = () => {

    const buttonFunc = () => {

    }

    return(
        <div className='hero_right'>

            <div className='first_part'>
                <h1 className='first_part_header'>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className='first_part_text'>
                    Browse through our diverse range of meticuluosly crafted germents, 
                    designed to bring out your individuality and cater to your sense of style.
                </p>
            </div>
            <div className='testimonial'>
                <Testimonial/>
            </div>

        </div>
    )
}
export default HeroSectionRight