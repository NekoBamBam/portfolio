import {  BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Me from "./pages/Me";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="me" element={<Me />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
