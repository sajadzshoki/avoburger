import { createContext, useState, useContext } from 'react';

// Create the Category Context
const CategoryContext = createContext();

// Provide selectedCategory and setSelectedCategory as context values
export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('Main courses');

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

// Custom hook to access the Category Context
export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
