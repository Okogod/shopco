// React Hooks
import { useState, useEffect } from 'react';

// Assets
import { menu_icon, close_icon } from '../../staticdata/ImageData';

// Css
import './nav.css';

const Nav = () => {


    const [hideMenu, setHideMenu] = useState(true)

    const [active, setActive] = useState("");

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY >= 790) {
                setActive("newArrivals")
            } else if (window.scrollY < 800) {
                setActive("");
            }

            if (window.scrollY >= 1550) {
                setActive("topSelling");
            }


            if (window.scrollY >= 2380) {
                setActive("browse");
            }

            if(window.scrollY > 3000){
                setActive("");
            }





        }
    }, [window.scrollY])


    return (
        <header>
            <div className='logo'>SHOP.CO</div>

            <nav className={hideMenu ? "hide" : ""}>

                <a href='#newArrivals' onClick={() => setActive("newArrivals")}  className={active === "newArrivals" ? "active" : ""}>New Arrivals</a>
                <a href='#topSelling' onClick={() => setActive("topSelling")}  className={active === "topSelling" ? "active" : ""}>Top Selling</a>
                <a href='#browse' onClick={() => setActive("browse")}  className={active === "browse" ? "active" : ""}>Browse</a>



                <img src={close_icon} alt='close icon' className='close_icon' onClick={() => setHideMenu(true)} />
            </nav>

            <img src={menu_icon} alt='menu icon' className='menu_icon' onClick={() => setHideMenu(false)} />
        </header>
    )
}

export default Nav