import React, { useState } from 'react';
import './Header.css';

function Headerres() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div class="block md:hidden bg-blue-500">
      <header className="flex items-center justify-center w-full py-3">
        <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>

        <svg class="h-8 w-8 text-white ml-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>

        <div className="basis-7/12 h-10 flex items-center ml-6 rounded-lg border-2 bg-white border-slate-200">
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
            className="border-gray-800 flex w-10/12 focus:outline-none "
            placeholder="Bạn đang tìm kiếm gì"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <svg
              className="size-8 ml-2 text-white"
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

      </header>
    </div>
  );
}

export default Headerres;
