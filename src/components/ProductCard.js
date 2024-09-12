import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ProductCard({ product }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex items-center ">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="lg:basis-1/5  w-1/2 flex rounded-sm box-border ">
      <div className="m-2 bg-white product-card rounded-md">
        <Link to={`/product/${product.id}`}>
          <div className='flex justify-center lg:size-48'>
            <img
              src={product.images[0]?.thumbnail_url || 'default_image.jpg'}
              alt={product.name}
              className=""
            />
          </div>
          
          <div className=" flex flex-col p-2.5">
            <div className='h-24 flex flex-col flex-wrap'>
              <h3 className="text-xs font-medium">{product.name}</h3>
              <div className="flex items-center lg:size-5 size-1 mt-2">
                {renderStars(product.rating_average)}
                <span className="ml-2 text-gray-600 text-xs">{product.quantity_sold?.text}</span>
              </div>
            </div>
            <p className="h-1/4 text-base flex flex-wrap font-medium">{product.current_seller?.price.toLocaleString()} <p className='text-xs'>₫</p></p>
            <div className='flex justify-center text-sm mt-4 pt-2 border-t-2 h-8 text-gray-600'>Giao siêu tốc 2h</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
