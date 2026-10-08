import { useRef } from 'react';

// Data
import Reviews from '../../staticdata/Reviews';

// Assets
import { left_arrow, right_arrow, verified_icon } from '../../staticdata/ImageData';

// Css
import './reviews.css';



const ReviewsComponent = () => {

    const DivRef = useRef<HTMLDivElement>(null!);




    const scroll_val = 340;

    const next = () => {
            DivRef.current.scrollLeft += scroll_val;
    }

    const prev = () => {
        DivRef.current.scrollLeft -= scroll_val;
    }



    return (
        <section className='reviews_section'>

            <div className='reviews_header'>

                <h1 className='reviews_header_text'>
                    OUR HAPPY CUSTOMERS
                </h1>


                {
                    window.innerWidth <= 1050 || Reviews.length > 4 ?
                        <div className='reviews_icons'>
                            <img src={left_arrow} alt='left arrow' className='arrow' onClick={prev } />
                            <img src={right_arrow} alt='right arrow' className='arrow' onClick={next} />
                        </div>
                        : ""
                }

            </div>

                
            <div className='blurig'></div>
            <div className='reviews_contents' ref={DivRef}  id='scrollable' >

                
                {
                    Reviews.map((review, ind) =>
                        <div key={ind} className='reviews' >
                            <p className='star'>{review.stars}</p>
                            <div className='review_name_div'>
                                <span className='reviewer_name'>{review.name}</span>
                                <img src={review.verified} alt='verified icon' className='verified_icon' />
                            </div>
                            <p className='review_text'>{review.review}</p>
                        </div>
                    )
                }


            </div>




        </section>
    )
}

export default ReviewsComponent



