"use client";
import { notFound } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product details", error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="flex-1 max-w-md mx-auto md:mx-0">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-[300px] h-[400px] object-contain mx-auto"
            />
          </div>
        </div>


        {/* Product Details Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          <p className="text-sm font-medium text-gray-600 mt-2">
            Category: <span className="text-gray-800">{product.category}</span>
          </p>

          {/* Additional Call-to-Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
