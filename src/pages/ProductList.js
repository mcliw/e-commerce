import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('https://h5ltj4-8080.csb.app/books')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }, []);
  
    return (
      <div className="flex flex-row flex-wrap basis-5/6">       
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    );
  }
  

export default ProductList;
