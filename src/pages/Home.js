import React from 'react';
import ProductList from '../pages/ProductList';
import ProductDetail from '../components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-container">
      <Header />    {}
      <Navbar />    {}
      
      <main className="main-content">
        <h1>Danh sách sản phẩm</h1>
        <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </main>

      <Footer />    {}
    </div>
  );
}

export default Home;
