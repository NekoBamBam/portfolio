import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
/* import Contact from "./pages/Contact"; */
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import NotFound from "./pages/notfound";
import Me from "./pages/Me";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="me" element={<Me />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
