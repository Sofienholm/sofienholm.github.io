import { Route, Routes } from "react-router"; // <- vigtigt
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import BurgerMenu from "./Components/BurgerMenu.jsx"; // vi bruger samme filnavn som før


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
