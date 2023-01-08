import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addnewrecipe from "./Addnewrecipe/Addnewrecipe";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";

import Recipes from "./Recipes/Recipes";
import SeeMoreRecipeDetails from "./SeeMoreRecipeDetails/SeeMoreRecipeDetails";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="addnewrecipes" element={<Addnewrecipe />} />
          <Route path="/recipes/:id" element={<SeeMoreRecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
