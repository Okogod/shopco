// Components
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Brands from '../../components/brands/Brands';
import NewArrivals from '../../components/newarrivals/NewArrivals';
import TopSelling from '../../components/topselling/TopSelling';
import Browse from '../../components/browse/Browse';
import ReviewsComponent from '../../components/reviewscomponent/ReviewComponent';
import Footer from '../../components/footer/Footer';

import ScrollToTop from '../../ScrollToTop';



const HomePage = () => {

    document.title = "ShopCo - Home"
    

    return (
        <>
            <Nav />.
            <Hero />
            <Brands />
            <NewArrivals />
            <TopSelling />
            <Browse />
            <ReviewsComponent />
            <Footer />
        </>
    )
}

export default HomePage