// ProductGrid.js
import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import AddProductModal from "./AddProductModal";
import { useCategory } from "../context/CategoryContext";
import useProductStore from "../productStore";

function ProductGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedCategory } = useCategory();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [readOnly, setReadOnly] = useState(false);
  const products = useProductStore((state) => state.products);


  const filteredProducts = useMemo( ()=>selectedCategory === "All Products"
    ? products
    : products.filter((product) => product.category === selectedCategory),[products, selectedCategory]);

  const handleAddProductClick = () => {
    setIsModalOpen(true);
    setReadOnly(false);
  };
  const handleSettingsClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setReadOnly(false);
  };
  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setReadOnly(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSettingsClick={handleSettingsClick}
            onViewClick={handleViewClick}
          />
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
      <AddProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        readOnly={readOnly}
      />
    </>
  );
}

export default ProductGrid;
