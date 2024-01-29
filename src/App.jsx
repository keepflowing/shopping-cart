import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

import fetchProducts from './services/productService';

export default function App() {
  const [products, setProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNSetProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        // Lucky number
        const luckyNumber = Math.floor(Math.random() * fetchedProducts.length);
        fetchedProducts[luckyNumber] = {
          ...fetchedProducts[luckyNumber],
          specialPrice: (Math.round(fetchedProducts[luckyNumber].price * 0.7)),
        };
        setFeaturedProduct(fetchedProducts[luckyNumber]);
        // --
        setProducts(fetchedProducts);
      } catch (fetchError) {
        setError(fetchError);
      }
    };

    fetchNSetProducts();
  }, []);

  if (error) {
    return (
      <div>
        <h1>
          Error loading products.
          {error.message}
        </h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar title="My Store" />
      <Routes>
        <Route path="/" element={<Home featuredItem={featuredProduct} />} />
        <Route path="/store" element={<Store items={products} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
