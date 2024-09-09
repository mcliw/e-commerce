import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); // Lấy ID sản phẩm từ URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details from API based on the ID
    axios.get(`https://h5ltj4-8080.csb.app/books/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        Quay về trang chủ
      </button>
      <div className="product-detail-content">
        <img src={product.images[0]?.thumbnail_url || 'default_image.jpg'} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="product-price">{product.current_seller?.price.toLocaleString()} đ</p>
          <p className="product-description">{product.short_description || 'Mô tả chi tiết sản phẩm...'}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
