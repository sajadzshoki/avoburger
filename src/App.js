import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    
      <CategoryProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </CategoryProvider>
    
  );
}

export default App;
