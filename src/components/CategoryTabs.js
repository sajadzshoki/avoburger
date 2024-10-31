// CategoryTabs.js
import {
  FaHamburger,
  FaPepperHot,
  FaGlassMartiniAlt,
  FaEllipsisH,
  FaEllipsisV,
} from "react-icons/fa";


import { useCategory } from "../context/CategoryContext";

function CategoryTabs() {

  const { selectedCategory, setSelectedCategory } = useCategory();
  const categories  = [
    { id: "main", category: "Main courses", icon: <FaHamburger /> },
    { id: "sides", category: "Side dishes", icon: <FaPepperHot /> },
    { id: "drinks", category: "Drinks", icon: <FaGlassMartiniAlt /> },
    { id: "other", category: "Other", icon: <FaEllipsisH /> },
  ];

  return (
    <section className="relative">
    <div className="flex items-center justify-start space-x-20 m-4 rounded-xl  bg-white ">
      {categories.map((category) => (
        <button
        key={category.id}
        onClick={() => setSelectedCategory(category.category)}
        className={`flex items-center gap-2 text-sm font-semibold p-4 mx-6 ${
          selectedCategory === category.category && "border-b-4  border-black"
        }`}
        >
          <div className={`text-2xl  `}>{category.icon}</div>
          <span>{category.category}</span>
        </button>
      ))}
      <button className="absolute right-8 "><FaEllipsisV/></button>
    </div>
      </section>
  );
}

export default CategoryTabs;
