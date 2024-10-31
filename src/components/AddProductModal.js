import React, { useEffect, useState } from "react";
import { FaBurger } from "react-icons/fa6";
import useProductStore from "../productStore";

function AddProductModal({ isOpen, onClose, product }) {
  const addProduct = useProductStore((state) => state.addProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Main courses");
  const [tags, setTags] = useState("");
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setCategory(product.category || "Main courses");
      setTags(product.tags);
      setWeight(product.weight);
      setCalories(product.calories);
      setPrice(product.price);
    } else {
      setName("");
      setCategory("Main courses");
      setTags("");
      setWeight("");
      setCalories("");
      setPrice("");
    }
  }, [product]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product ? product.id : Date.now(),
      name,
      category,
      tags,
      weight,
      calories,
      price,
      image,
    };

    if (product) {
      updateProduct(newProduct);
    } else {
      addProduct(newProduct);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-96 h-screen p-6 shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl">
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {product ? "Edit Product" : "Add New Product"}
        </h2>

        <form className="flex flex-col h-screen" onSubmit={handleFormSubmit}>
          <label className="block mb-2">
            Name of the product
            <input
              type="text"
              value={name}
              className="w-full p-2 border rounded mt-1"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="block mb-2">
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded mt-1"
              required
            >
              <option value="Main courses">Main courses</option>
              <option value="Drinks">Drinks</option>
              <option value="Side dishes">Side dishes</option>
              <option value="Others">Others</option>
            </select>
          </label>

          <label className="block mb-2">
            Ingredients
            <input
              type="text"
              value={tags}
              placeholder="e.g., Wheat bun, Veggie Patty"
              className="w-full p-2 border rounded mt-1"
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </label>

          <label className="block mb-2 items-center">
            <input type="checkbox" className="mr-2 text-xl" />
            Suitable for vegans
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label>
              Weight in grams
              <input
                type="number"
                value={weight}
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </label>
            <label>
              Calories
              <input
                value={calories}
                type="number"
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setCalories(e.target.value)}
                required
              />
            </label>
          </div>

          <label className="block mt-2">
            Price of the product
            <input
              value={price}
              type="number"
              className="w-full p-2 border rounded mt-1"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>

          <label className="block mt-2">
            Upload photo
            <input
              type="file"
              className="w-full p-2 border rounded mt-1"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          <button
            type="submit"
            className="flex items-center justify-center w-full bg-gray-800 text-white p-2 rounded mt-4"
          >
            <FaBurger className="mr-2" />
            {product ? "Submit Changes" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
