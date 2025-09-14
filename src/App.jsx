import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import BurgerMenu from "./Components/BurgerMenu.jsx";

function App() {
  return (
    <div id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
