import React, { useEffect, useState } from 'react';
import { GetAllproducts } from '../Apiservices/Api';
import image from './image.png'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetAllproducts();
        setProducts(data);
      } catch (error) {
       
      }
    };
    fetchProducts();
  }, []);

  return (
    <div
      className="bg-cover bg-center h-full w-full bg-white">
        <img src={image} alt='/images' className='w-full h-[400px]'/>
        
        
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <div
            className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h5>
              <h5 className="text-xl font-semibold text-gray-900 mb-2"> ₹ {product.price}</h5>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button className='bg-blue-950 text-white rounded-md py-2 px-4 w-full hover:bg-black'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
