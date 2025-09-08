import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Nav from "./Components/NavLink";
import Header from "./Components/Header";
import { Navigate } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
