
// Data
import BrowseList from '../../staticdata/Browse';

import { casual } from '../../staticdata/ImageData';


// Css
import './browse.css';

const Browse = () => {



    return (
        <section id="browse" className='browse'>
            
            <h1 className='browse_header'> BROWSE BY DRESS STYLE</h1>

            <div className='browse_styles'>

                {
                    BrowseList.map(browse =>

                        <div key={browse.title} className='style'>
                            <h2 className='style_name'>{browse.title}</h2>
                            <img src={browse.image} alt={browse.title} className='style_image' />
                        </div>
                    )
                }



            </div>
        </section>
    )
}

export default Browse;