import React, { useState, useEffect } from 'react';
import ProductList from '../pages/ProductList';
import ProductDetail from '../components/ProductDetail';
import Headerres from '../components/Header-res';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
      .get('http://localhost:3001/books')
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

    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="home-container bg-slate-100">
        <Header onSearch={handleSearch} />
        <Headerres onSearch={handleSearch} />
        <div class="block md:hidden bg-white">
          <ul className='flex flex-row justify-center h-10'>
            <li className='flex basis-1/4 border-b-2 border-gray-200 justify-center pt-1 font-medium text-blue-400'>Phổ biến</li>
            <li className='flex basis-1/4 border-b-2 border-gray-200 justify-center pt-1 text-black font-normal'>Bán chạy</li>
            <li className='flex basis-1/4 border-b-2 border-gray-200 justify-center pt-1 text-black font-normal'>Hàng mới</li>
            <li className='flex basis-1/4 border-b-2 border-gray-200 justify-center pt-1 text-black font-normal'>Giá</li>
          </ul>
          <div className='flex basis-1/4 border-b-2 border-gray-200 ml-5 py-1 text-black font-normal borber-r-2'>
          <svg class="h-8 w-8 text-slate-500 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>Lọc
          <img src="../../icon/now.svg" alt="Logo" className="header-logo ml-4 border-1 rounded-full bg-violet-100"  /></div>
          
        </div>
        <div className='hidden lg:block'>
          <h1 className="ml-32 my-2 flex text-slate-600">
            <p className='mr-2  text-slate-400'>trang chủ </p> {'>'} Nhà Sách Tiki
          </h1>
        </div>
        
        <div className="flex flex-row justify-center">
          <div className="flex flex-row lg:basis-10/12">
            <div className=' lg:basis-1/6'>
              <Routes>
                <Route path="/" element={<Navbar onFilter={handleFilter} />} />
                <Route path="/product/:id" element={null} />
              </Routes>
            </div>
            
            
            <main className="lg:basis-5/6">
              <Routes>
                <Route path="/" element={<ProductList products={filteredProducts} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </main>
          </div>
        </div>
        <div className="flex flex-row justify-center bg-white mt-14">
          <div className="flex flex-row basis-10/12 ">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
