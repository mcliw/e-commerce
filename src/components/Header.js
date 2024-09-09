// src/components/Header.js
import React from 'react';
import './Header.css'; // Đảm bảo file CSS tồn tại

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="logo.png" alt="Logo" /> {/* Đảm bảo có ảnh logo */}
      </div>
      <div className="header-search">
        <input type="text" placeholder="Bạn đang tìm kiếm gì?" />
        <button className="search-button">Tìm kiếm</button>
        <button className="cart-button">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">3</span> {/* Đếm số lượng sản phẩm trong giỏ hàng */}
        </button>
      </div>
    </header>
  );
}

export default Header;
