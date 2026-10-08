// React Router Hooks
import { useLocation } from "react-router-dom";

// React Hooks
import { useEffect } from 'react';

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return <></>

}

export default ScrollToTop;