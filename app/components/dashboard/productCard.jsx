"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ChevronLeft, Heart } from "lucide-react"; 

const ProductCard = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false); 

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="border border-gray-200 rounded-md p-4 hover:shadow-lg transition-shadow relative">
        <div className="relative w-full h-48 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-sm font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-sm font-medium text-gray-600 mt-2">${product.price}</p>
        <button
          onClick={(e) => {
            e.preventDefault(); 
            toggleFavorite();
          }}
          className="absolute top-4 right-4"
        >
          <Heart
            size={20}
            className={`transition-colors ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
        <div className="mt-4 border-t pt-2 text-center text-sm text-gray-500">
          <Link href="/" className="text-blue-500 underline">
            Sign in
          </Link>{" "}
          or Create an account to see pricing
        </div>
      </div>
    </Link>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true); 
  const [sortOption, setSortOption] = useState(""); 
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const fetchedProducts = response.data.map((product, index) => ({
          ...product,
          dateAdded: new Date().getTime() - index * 1000000, 
        }));
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });

    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);


  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category) 
      : [...selectedCategories, category]; 

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(
        products.filter((product) =>
          updatedCategories.includes(product.category)
        )
      );
    }
  };


  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedProducts = [...filteredProducts];
    if (option === "newest") {
      sortedProducts.sort((a, b) => b.dateAdded - a.dateAdded); 
    } else if (option === "oldest") {
      sortedProducts.sort((a, b) => a.dateAdded - b.dateAdded); 
    }
    setFilteredProducts(sortedProducts);
  };

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-4">Discover Our Products</h1>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
      </p>

      <div className="flex justify-between items-center border-b border-gray-300 py-4 mb-4">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">{filteredProducts.length} ITEMS</span>
          <button
            className="flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-gray-800"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            <ChevronLeft size={18} />
            <span className={`underline ${isFilterVisible ? "" : "hidden"}`}>
              HIDE FILTER
            </span>
            <span className={`underline ${isFilterVisible ? "hidden" : ""}`}>
              SHOW FILTER
            </span>
          </button>
        </div>
        <div>
          <select
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500 focus:outline-none"
          >
            <option value="">RECOMMENDED</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {isFilterVisible && (
          <div className="md:w-1/4">
            <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`filter-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="rounded text-blue-500 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`filter-${category}`}
                      className="text-gray-700"
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className={`md:w-${isFilterVisible ? "3/4" : "full"} flex-grow`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
