
import { create } from 'zustand';
import sampleProducts from "./utils/sampleProducts"

const useProductStore = create((set) => ({
  allProducts: sampleProducts,
  products: sampleProducts,

  setProducts: (newProducts) => set({ products: newProducts }),
  
  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),
  updateProduct: (updatedProduct) => set((state) => ({
    products: state.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ),
    allProducts: state.allProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ),
  })),
}));

export default useProductStore;
