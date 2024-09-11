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
      <div className="flex items-center size-12">
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
    <div className="basis-1/5 flex rounded-sm box-border">
      <div className="m-1 bg-white product-card rounded">
        <Link to={`/product/${product.id}`}>
          <div className='flex justify-center size-48'>
            <img
              src={product.images[0]?.thumbnail_url || 'default_image.jpg'}
              alt={product.name}
              className=""
            />
          </div>
          
          <div className="product-info flex flex-col p-2.5">
            <div className='h-24 flex flex-col flex-wrap'>
              <h3 className="text-xs font-medium">{product.name}</h3>
              <div className="flex items-center">
                {renderStars(product.rating_average)}
                <span className="ml-2 text-gray-600 text-xs">{product.quantity_sold?.text}</span>
              </div>
            </div>
            <p className="h-1/4 text-base flex flex-wrap justify-center text-gray-600">{product.current_seller?.price.toLocaleString()} đ</p>
            <div>Giao siêu tốc 2h</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
