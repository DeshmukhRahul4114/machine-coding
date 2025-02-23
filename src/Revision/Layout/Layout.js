import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideDrawer from './SideDrawer';
import Chatbot from './Chatbot';

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=10&page=${page}`);
      setProducts(prevProducts => [...prevProducts, ...response.data]);
    };

    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPage(prevPage => prevPage + 1); // Load next page of products when scrolled to the bottom
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDescriptionClick = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h4>{product.title}</h4>
              <p onClick={() => handleDescriptionClick(product)} className="description">
                {product.description.substring(0, 50)}...
              </p>
              <p><strong>Price: </strong>${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <SideDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        {selectedProduct && <Chatbot />}
      </SideDrawer>
    </div>
  );
};

export default Layout;
