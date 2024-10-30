// AddProductModal.js
import React, { useState } from 'react';
import { FaBurger } from "react-icons/fa6";
import useProductStore from '../productStore';


function AddProductModal({ isOpen, onClose }) {
  const addProduct = useProductStore((state) => state.addProduct);
  
  const [newProduct, setNewProduct] = useState({
    id: Date.now(),
    name: '',
    category: '',
    price: '',
    // ... other fields
  });
  
  const handleAddProduct = () => {
    addProduct(newProduct);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-end z-50">
    {/* <div className="fixed right-0 bg-gray-800 bg-opacity-50 "> */}
      <div className="bg-white w-96 h-screen p-6 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

        {/* Form Fields */}
        <form className='flex flex-col h-screen'>
          <label className="block mb-2">
            Name of the product
            <input type="text" className="w-full p-2 border rounded mt-1" />
          </label>

          <label className="block mb-2">
            Ingredients
            <input type="text" placeholder="e.g., Wheat bun, Veggie Patty" className="w-full p-2 border rounded mt-1" />
          </label>

          <label className="block mb-2 flex items-center">
            <input type="checkbox" className="mr-2 text-xl" />
            Suitable for vegans
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label>
              Weight in grams
              <input type="number" className="w-full p-2 border rounded mt-1" />
            </label>
            <label>
              Calories
              <input type="number" className="w-full p-2 border rounded mt-1" />
            </label>
          </div>

          <label className="block mt-2">
            Price of the product
            <input type="number" className="w-full p-2 border rounded mt-1" />
          </label>

          <label className="block mt-2">
            Upload photo
            <input type="file" className="w-full p-2 border rounded mt-1" />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleAddProduct}
            className="flex items-center justify-center w-full bg-gray-800 text-white p-2 rounded mt-4"
          >
            + 
            <FaBurger />
            Add product to the menu
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
