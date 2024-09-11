import React, { useState, useEffect } from 'react';
import ProductList from '../pages/ProductList';
import ProductDetail from '../components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSellers, setSelectedSellers] = useState([]);

  useEffect(() => {
    
    axios
      .get('https://h5ltj4-8080.csb.app/books')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, selectedSellers);
  };


  const handleFilter = (sellers) => {
    setSelectedSellers(sellers);
    filterProducts(searchTerm, sellers);
  };


  const filterProducts = (term, sellers) => {
    let filtered = products;


    if (term) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }


    if (sellers.length > 0) {
      filtered = filtered.filter((product) =>
        sellers.includes(product.current_seller.name)
      );
    }

    setFilteredProducts(filtered)
  };

  return (
    <div className="home-container bg-slate-100">
      <Header onSearch={handleSearch} /> {}
      <h1 className="ml-32 my-5">trang chủ {'>'} Nhà Sách Tiki</h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row basis-10/12">
          <div className="basis-1/6">
            <Navbar onFilter={handleFilter} /> {}
          </div>
          <main className="main-content basis-5/6">
            <Router>
              <Routes>
                <Route path="/" element={<ProductList products={filteredProducts} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </Router>
          </main>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-white ">
        <div className="flex flex-row basis-10/12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
