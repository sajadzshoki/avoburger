// CategoryTabs.js
import {
  FaHamburger,
  FaPepperHot,
  FaGlassMartiniAlt,
  FaEllipsisH,
  FaEllipsisV,
} from "react-icons/fa";
import { useState } from "react";

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("main");

  const tabs = [
    { id: "main", label: "Main courses", icon: <FaHamburger /> },
    { id: "sides", label: "Side dishes", icon: <FaPepperHot /> },
    { id: "drinks", label: "Drinks", icon: <FaGlassMartiniAlt /> },
    { id: "other", label: "Other", icon: <FaEllipsisH /> },
  ];

  return (
    <section className="relative">
    <div className="flex items-center justify-start space-x-20 m-4 rounded-xl  bg-white ">
      {tabs.map((tab) => (
        <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`flex items-center gap-2 text-sm font-semibold p-4 mx-6 ${
          activeTab === tab.id && "border-b-4  border-black"
        }`}
        >
          <div className={`text-2xl  `}>{tab.icon}</div>
          <span>{tab.label}</span>
        </button>
      ))}
      <button className="absolute right-8 "><FaEllipsisV/></button>
    </div>
      </section>
  );
}

export default CategoryTabs;
