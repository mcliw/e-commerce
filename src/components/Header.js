import React, { useState } from 'react';
import './Header.css';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="hidden lg:block">
      <header className="flex items-center justify-center w-full mt-4 bg-white">
        <div className="basis-1/12 flex justify-center">
          <img src="../../icon/tiki-logo.svg" alt="Logo" className="header-logo" />
        </div>

        <div className="basis-7/12 h-10 flex items-center ml-6 rounded-lg border-2 border-slate-200">
          <svg
            className="size-5 mx-4 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="border-gray-800 flex w-10/12 focus:outline-none"
            placeholder="Freeship đến 30K"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p className="text-slate-200 text-xl mb-1">|</p>
          <button className="ml-3 text-blue-600" onClick={handleSearch}>
            Tìm kiếm
          </button>
        </div>

        <div className="basis-3/12 flex justify-around flex-row h-6 ml-5">
          <div className="flex flex-row ml-5">
            <img src="../../icon/tc.svg" alt="Logo" />
            <button>Trang chủ</button>
          </div>
          <div className="flex flex-row">
            <img src="../../icon/tk.svg" alt="Logo" />
            <button>Tài khoản</button>
          </div>
          <p className="text-slate-200 text-2xl mb-2 -mt-2">|</p>
          <div className="-mt-3">
            <p className="bg-red-600 rounded-full w-3 h-3 flex items-center text-xs ml-7 text-white justify-center">
              0
            </p>
            <svg
              className="size-6 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
