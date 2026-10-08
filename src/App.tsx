// React Hooks
import React from 'react';

// React Router Hooks
import { Route, Routes } from 'react-router-dom';

// Css
import './App.css';

// Pages
import Products from './pages/productspage/Products';
import ViewPage from './pages/viewpage/View';
import NoPage from './pages/404page/404Page';

import ScrollToTop from './ScrollToTop';

// React Imported Class
const Home = React.lazy(() => import ('./pages/homepage/HomePage'));



function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={
          <React.Suspense>
            <Home/>
          </React.Suspense>
        }/>

        <Route path='products/:category' element={<Products/>}/>

        <Route path='view-product/:category/:id' element={<ViewPage/>}/>

        <Route path='*' element={<NoPage/>}/>
    
      </Routes>
    </>

  );
}

export default App;
