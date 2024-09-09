// src/App.js
import React from 'react';
import ProductList from './pages/ProductList';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    
  );
}

export default App;
