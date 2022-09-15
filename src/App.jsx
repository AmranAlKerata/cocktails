import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Sharedlayout from "./Sharedlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
