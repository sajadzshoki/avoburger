
import { create } from 'zustand';
import sampleProducts from "./utils/sampleProducts"

const useProductStore = create((set) => ({
  products: sampleProducts,

  setProducts: (newProducts) => set({ products: newProducts }),
  
  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),
  
  // updateProduct: (updatedProduct) => set((state) => ({
  //   products: state.products.map((product) =>
  //     product.id === updatedProduct.id ? updatedProduct : product
  //   ),
  // })),
  
  // filterProductsByCategory: (category) =>
    
  //   set((state) => ({
  //     selectedCategory: 'Main courses',

  //     setSelectedCategory: (category) => set({ selectedCategory: category }),
  //     filteredProducts: state.products.filter(
  //       (product) => product.category === category
  //     ),
  //   })),
}));

export default useProductStore;
