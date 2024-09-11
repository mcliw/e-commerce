import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';

function Navbar({ onFilter }) {
  const [sellers, setSellers] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState([]);

  useEffect(() => {
    axios.get('https://h5ltj4-8080.csb.app/books')
      .then((response) => {
        const sellerNames = Array.from(
          new Set(response.data.map((item) => item.current_seller.name))
        );
        setSellers(sellerNames);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleCheckboxChange = (sellerName) => {
    const updatedSelectedSellers = selectedSellers.includes(sellerName)
      ? selectedSellers.filter((name) => name !== sellerName)
      : [...selectedSellers, sellerName];
    setSelectedSellers(updatedSelectedSellers); 
    onFilter(updatedSelectedSellers);
  };

  return (
    <div className='box-border'>
      <nav className="navbar bg-white mr-2">
        <ul className="navbar-list flex flex-col">
          <li className="navbar-item text-base font-semibold ml-4">Danh Mục Sản Phẩm</li>
          <li className="navbar-item ml-4 text-sm my-1">English Books</li>
          <li className="navbar-item ml-4 text-sm my-1">Sách tiếng Việt</li>
          <li className="navbar-item ml-4 text-sm my-1">Văn phòng phẩm</li>
          <li className="navbar-item ml-4 text-sm my-1">Quà lưu niệm</li>

          <li className="navbar-item text-base font-semibold ml-4">Nhà cung cấp</li>
          {sellers.map((seller, index) => (
            <label key={index} className='flex flex-row my-1'>
              <input
                type="checkbox"
                className="seller-checkbox size-4 ml-4 mr-3 checkbox-custom flex-none "
                checked={selectedSellers.includes(seller)}
                onChange={() => handleCheckboxChange(seller)}
              />
              <p className='-mt-1'>{seller}</p>
            </label>
          ))}

          <li className="navbar-item text-base font-semibold ml-4">Đánh giá</li>
          <div className='flex flex-row m-1 ml-4'>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <p className='-mt-1 ml-1'>từ 5 sao</p>
          </div>
          <div className='flex flex-row m-1 ml-4'>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/star.svg' className='size-3.5' alt=''></img>
            <p className='-mt-1 ml-1'>từ 4 sao</p>
          </div>
          <div className='flex flex-row m-1 ml-4'>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/stary.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/star.svg' className='size-3.5' alt=''></img>
            <img src='../../icon/star.svg' className='size-3.5' alt=''></img>
            <p className='-mt-1 ml-1'>từ 3 sao</p>
          </div>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
