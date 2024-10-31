// TopBar.js
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useProductStore from "../productStore";

function TopBar() {
  const [query, setQuery] = useState("");
  const setFilteredProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);
  const allproducts = useProductStore((state) => state.allProducts);
  // Function to handle the search
  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim() === '') {
      // Reset to the full product list when the search query is empty
      setFilteredProducts(allproducts);
    } else {
      // Filter products based on the search query
      const filtered = products.filter((product) => {
        const nameMatches = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const tagsMatch =
          product.tags &&
          Array.isArray(product.tags) &&
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );

        return nameMatches || tagsMatch;
      });
      setFilteredProducts(filtered);
    }
  };
  return (
    <div className="flex items-center justify-start p-4 ">
      <div className=" relative w-full max-w-lg">
        <input
          value={query}
          onChange={handleSearch}
          type="text"
          className=" w-full pl-10 pr-4 py-2 focus:outline-none bg-transparent border-b-2 border-gray-300 "
        />
        <p className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 font-semibold">
          Search
        </p>
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600" />
      </div>
    </div>
  );
}

export default TopBar;
