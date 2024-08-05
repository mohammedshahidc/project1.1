import React, { useEffect, useState } from 'react'
import { GetAllproducts } from '../Apiservices/Api'

const Women = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getproduct = async () => {
            try {
                const data = await GetAllproducts()
                setProduct(data)
            }
            catch (error) {
                console.error("fetching error", error);
            }
        }
        getproduct()
    }, [])
    return (
        <div className='bg-cover bg-center h-full w-full bg-white'>
            <div className='flex flex-wrap justify-center gap-6 p-6'>

                {product.filter((item) => (item.type === "women")).map((item) => (

                    <div
                        className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden gap-6 p-6" key={item.id}

                    >
                        <img
                            src={item.image}
                            alt='product image'
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h5 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h5>
                            <h5 className="text-xl font-semibold text-gray-900 mb-2"> ₹ {item.price}</h5>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <button className='bg-blue-950 text-white rounded-md py-2 px-4 w-full hover:bg-black'>
                                Add to Cart
                            </button>
                        </div>
                    </div>

                )
                )}

            </div>
        </div>

    )
}

export default Women
