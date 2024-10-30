import React from 'react'
import TopBar from './TopBar';
import CategoryTabs from './CategoryTabs';
import ProductGrid from './ProductGrid';
const MainContent = () => {
  return (
    <div className="flex flex-col flex-grow bg-gray-100">
    {/* TopBar */}
    <TopBar />

    {/* Category Tabs */}
    <CategoryTabs />

    {/* Product Grid */}
    <ProductGrid />
  </div>
  )
}

export default MainContent