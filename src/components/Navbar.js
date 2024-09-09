// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Đảm bảo file CSS tồn tại

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item active">Phổ biến</li>
        <li className="navbar-item">Bán chạy</li>
        <li className="navbar-item">Hàng mới</li>
        <li className="navbar-item">Giá tăng dần</li>
        <li className="navbar-item">Giá giảm dần</li>
        <button className="filter-button">Lọc</button> {/* Nút lọc sản phẩm */}
      </ul>
    </nav>
  );
}

export default Navbar;
