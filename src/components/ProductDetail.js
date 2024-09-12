import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import axios from 'axios';

function ProductDetail() {
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
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/books/${id}`)
      .then(response => {
        setProduct(response.data);
        setSelectedImage(response.data.images[0]?.large_url || 'default_image.jpg');
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="-ml-48 ">
      <button
        className="mb-4 text-xs w-12 h-6 bg-blue-500 text-white rounded"
        onClick={() => navigate('/')}
      >
        Back
      </button>
      <div className="flex">
        <section className="w-4/12 mx-2 bg-white h-2/3 rounded">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full mb-2 border border-gray-300 rounded"
          />
          <div className="flex flex-wrap">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(img.medium_url)}
                className="w-1/4 p-1"
              >
                <img
                  src={img.medium_url}
                  alt={`Thumbnail ${index}`}
                  className="size-14 h-auto border border-gray-200 rounded cursor-pointer"
                />
              </button>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 ml-4">Đặc điểm nổi bật</h3>
            <ul className='flex flex-col'>
              <li className='flex text-black text-sm ml-4'><img src="../../icon/v.svg" alt="Logo" className='mr-2 -mt-3' />Kích thước lớn và bìa cứng, tạo cảm giác sang trọng
              và bền bỉ.</li>
              <li className='flex text-black text-sm ml-4'><img src="../../icon/v.svg" alt="Logo" className='mr-2 -mt-3'/>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút
              sự chú ý của trẻ em.</li>
              <li className='flex text-black text-sm ml-4 mb-4'><img src="../../icon/v.svg" alt="Logo" className='mr-2 -mt-3'/>Cung cấp thông tin tổng quát về diện tích, dân số
              và ngôn ngữ của các quốc gia.</li>
            </ul>
          </div>
        </section>

        <section className="w-5/12 mx-2 ">
          <div className=' bg-white h-auto rounded-md'>
            <div className='ml-4'>
              {product.current_seller && (
                <div className=" flex text-sm">
                  <img src="../../icon/ch.svg" alt="Logo" className='' />
                  <strong className='text-sm'>Tác giả:</strong> {'Không có thông tin'}
                </div>
              )}
              <h2 className="text-xl font-bold mb-2 my-5">{product.name}</h2>
              <div className="flex items-center my-3">
                  {renderStars(product.rating_average)}
                  <span className="ml-2 text-gray-600 text-xs">{product.quantity_sold?.text}</span>
              </div>
              <p className="h-1/4 text-xl flex flex-wrap font-medium">{product.current_seller?.price.toLocaleString()} <p className='text-xs'>₫</p></p>

              {product.specifications.map((spec, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{spec.name}</h4>
                  <ul className="pb-5">
                    {spec.attributes.map((attr, attrIndex) => (
                      <li key={attrIndex} className='border-b-2 mb-2 flex'>
                        <div className='w-1/2'>{attr.name}</div> 
                        <div className='text-black font-medium'>{attr.value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>


          <div className="w-full bg-white">
            <h3 className="text-lg font-semibold  mt-2 ml-4">Mô tả sản phẩm</h3>
            <img
              src={product.images[0]?.large_url || 'default_image.jpg'}
              alt="Product Description"
              className="w-full mb-2"
            />
            <div
              className="product-description py-4 mx-4"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        </section>
        
        <section className="w-3/12 mx-2 ">
          <div className='bg-white h-auto rounded-md'>
            <div className='mx-4'>
              <div className='text-xl font-bold pt-2'>Số lượng</div>
              <div className="flex items-center mb-4 ">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-2 bg-gray-200 border border-gray-300 rounded"
                >
                  -
                </button>
                <span className="mx-4 text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-2 bg-gray-200 border border-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-semibold mb-4 ">
                Tổng tiền: {(product.current_seller?.price * quantity).toLocaleString()} đ
              </p>
              <button className="w-full mb-2 px-4 py-2 bg-red-600 text-white rounded">
                Mua ngay
              </button>
              <button className="w-full mb-2 px-4 py-2   border-2 border-blue-500 text-blue-500  rounded-md">
                Thêm vào giỏ
              </button>
              <button className="w-full px-4 py-2   border-2 border-blue-500 text-blue-500  rounded-md mb-4">
                Mua trước trả sau
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
