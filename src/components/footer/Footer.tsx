
// Assets
import { mail_icon, visa_card, master_card, paypal_card, apple_card, google_card } from '../../staticdata/ImageData'

// Css
import './footer.css'



const Footer = () => {
    return (
        <section className='footer_section'>

            <div className='newsletter_div'>
                <h1 className='newsletter_header'>
                    STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h1>
                <div className='newletter_right'>
                    <div className='newsletter_input_div'>
                        <img src={mail_icon} alt='mail icon' className='mail_icon'/>
                        <input type='email' placeholder='Enter your email address' className='newsletter_input'/>
                    </div>
                    <button className='subscribe_btn'>Subscribe to Newsletter</button>
                </div>
            </div>

            <div className='main_footer_content'>
                <h1 className='footer_logo'>SHOP.CO</h1>
                <p className='main_footer_p'>
                    We have clothes that suits your style and which you're
                    proud to wear. From  women to men.
                </p>
                <hr className='footer_line'/>
                
                <div className='copyright_div'>
                    <p className='copyright_text'>
                        Shop.co &copy; 2000-2023. All Rights Reserved
                    </p>
                    <div className='cards'>
                        <img src={visa_card} alt='visa card'/>
                        <img src={master_card} alt='visa card'/>
                        <img src={paypal_card} alt='visa card'/>
                        <img src={apple_card} alt='visa card'/>
                        <img src={google_card} alt='visa card'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer
























