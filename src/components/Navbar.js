import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';

function Navbar({ onFilter }) {
  const [sellers, setSellers] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/books')
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
    onFilter(updatedSelectedSellers); // Gọi hàm lọc từ props
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedSellers = isExpanded ? sellers : sellers.slice(0, 5);

  return (
    <div className='navbar'>
      <div className='flex box-border navbar'>
        <nav className="w-44 bg-white">
          <ul className="navbar-list flex flex-col">
            <li className="navbar-item text-sm text-black font-medium ml-4">Danh Mục Sản Phẩm</li>
            <li className="navbar-item ml-4 text-sm my-1">English Books</li>
            <li className="navbar-item ml-4 text-sm my-1">Sách tiếng Việt</li>
            <li className="navbar-item ml-4 text-sm my-1">Văn phòng phẩm</li>
            <li className="navbar-item ml-4 text-sm my-1">Quà lưu niệm</li>

            <li className="navbar-item text-sm text-black font-medium ml-4">Nhà cung cấp</li>
            {displayedSellers.map((seller, index) => (
              <label key={index} className='flex flex-row my-1'>
                <input
                  type="checkbox"
                  className="seller-checkbox size-4 ml-4 mr-2 checkbox-custom flex-none"
                  checked={selectedSellers.includes(seller)}
                  onChange={() => handleCheckboxChange(seller)}
                />
                <p className='-mt-1'>{seller}</p>
              </label>
            ))}
            {sellers.length > 5 && (
              <button
                className="ml-4 text-blue-500 hover:underline"
                onClick={handleToggleExpand}
              >
                {isExpanded ? 'Xem ít hơn' : 'Xem thêm'}
              </button>
            )}

            <li className="navbar-item text-sm text-black font-medium ml-4">Đánh giá</li>
            <div className='flex flex-row m-1 ml-4'>
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <p className='-mt-1 ml-1'>từ 5 sao</p>
            </div>
            <div className='flex flex-row m-1 ml-4'>
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/star.svg' className='size-3.5' alt='' />
              <p className='-mt-1 ml-1'>từ 4 sao</p>
            </div>
            <div className='flex flex-row m-1 ml-4'>
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/stary.svg' className='size-3.5' alt='' />
              <img src='../../icon/star.svg' className='size-3.5' alt='' />
              <img src='../../icon/star.svg' className='size-3.5' alt='' />
              <p className='-mt-1 ml-1'>từ 3 sao</p>
            </div>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
