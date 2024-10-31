import { useCategory } from "../context/CategoryContext";
// icons
import { FaHamburger, FaEllipsisV } from "react-icons/fa";
import { TbSoupFilled } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { RiCake3Line } from "react-icons/ri";

function CategoryTabs() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const categories = [
    { id: "main", category: "Main courses", icon: <FaHamburger /> },
    { id: "sides", category: "Side dishes", icon: <TbSoupFilled /> },
    { id: "drinks", category: "Drinks", icon: <RiDrinks2Fill /> },
    { id: "other", category: "Other", icon: <RiCake3Line /> },
  ];

  return (
    <section className="relative">
      <div className="flex items-center justify-start space-x-20 m-4 rounded-xl  bg-white ">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.category)}
            className={`flex items-center gap-2 text-sm font-semibold p-4 mx-6 ${
              selectedCategory === category.category &&
              "border-b-4  border-black"
            }`}
          >
            <div className={`text-2xl  `}>{category.icon}</div>
            <span>{category.category}</span>
          </button>
        ))}
        <button className="absolute right-8 ">
          <FaEllipsisV />
        </button>
      </div>
    </section>
  );
}

export default CategoryTabs;
