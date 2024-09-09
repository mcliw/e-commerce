import React from 'react';
import './ProductCard.css';  // Import CSS for individual card styling
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="product-card">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.images[0]?.thumbnail_url || 'default_image.jpg'}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.current_seller?.price.toLocaleString()} đ</p>
            </div>
          </Link>
        </div>
      );
}

export default ProductCard;
