import React from 'react'
import TopBar from './TopBar';
import CategoryTabs from './CategoryTabs';
import ProductGrid from './ProductGrid';
const MainContent = () => {
  return (
    <div className="flex flex-col flex-grow bg-gray-100">
    <TopBar />
    <CategoryTabs />
    <ProductGrid />
  </div>
  )
}

export default MainContent