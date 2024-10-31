// ProductGrid.js
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import AddProductModal from "./AddProductModal";
import { useCategory } from "../context/CategoryContext";
import useProductStore from "../productStore";

function ProductGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedCategory } = useCategory();

  const products = useProductStore((state) => state.products);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleAddProductClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* Add New Product Button */}
        <div
          onClick={handleAddProductClick}
          className="flex flex-col items-center justify-center h-58 p-4 rounded-lg border-dotted border-2 border-gray-300 hover:shadow-md transition-shadow cursor-pointer"
        >
          <span className="text-3xl text-gray-400">+</span>
          <p className="text-sm text-gray-500 mt-2">Add new product</p>
        </div>
      </div>

      {/* Modal */}
      <AddProductModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default ProductGrid;
