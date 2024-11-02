// ProductCard.js
import { FaEye, FaCog } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";
function ProductCard({ product, onSettingsClick, onViewClick }) {
  return (
    <div className="relative  flex flex-col items-center bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="w-44 h-44 absolute top-[-10%]">
        <img
          src={product.image}
          alt={product.name}
          className=" w-full h-full object-contain"
        />
      </div>
      {product.vegan && (
        <FaLeaf className="absolute right-6 text-2xl text-green-500" />
      )}

      {/* Product Info */}
      <div className="mt-32 w-full">
        <div className="flex flex-col items-center ">
          <h3 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.weight}g</p>
          <p className="text-sm text-center text-gray-600">{product.tags}</p>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between w-full mt-4">
          <span className="text-xl font-semibold text-gray-800">
            ${product.price}
          </span>
          <div className="flex space-x-2">
            <button
              className="text-gray-600 text-xl hover:text-green-600 p-2 rounded-md border-2"
              onClick={() => onViewClick(product)}
            >
              <FaEye />
            </button>
            <button
              className="text-gray-600 text-xl hover:text-green-600 p-2 rounded-md border-2"
              onClick={() => onSettingsClick(product)}
            >
              <FaCog />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
