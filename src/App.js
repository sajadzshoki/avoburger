import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CategoryProvider } from "./context/CategoryContext";

function App() {
  return (
    <Router>
      <CategoryProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </CategoryProvider>
    </Router>
  );
}

export default App;
