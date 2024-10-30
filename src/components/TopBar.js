// TopBar.js
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
// import useProductStore from '../productStore';
// import ProductGrid from './ProductGrid';

function TopBar() {
  const [searchTerm, setSearchTerm] = useState('');
  // const products = useProductStore((state) => state.products);

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  // );
  return (
    <div className="flex items-center justify-start p-4 ">
      {/* Center-aligned Search Bar */}
      <div className=" relative w-full max-w-lg">
        <input
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className=" w-full pl-10 pr-4 py-2 focus:outline-none bg-transparent border-b-2 border-gray-300 "
        />
        <p className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 font-semibold">Search</p>
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600" />
      </div>
      {/* <ProductGrid products={filteredProducts} /> */}
    </div>
  );
}

export default TopBar;
