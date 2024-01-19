import { useState } from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Cards from "./components/allcourses/Cards";
import BlogPage from "./components/home/BlogPage";
import Register from "./components/home/hero/Register";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Router>
        <Header />
      <Register/>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home showPopup={showPopup} setShowPopup={setShowPopup} />}
          />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/courses"
            element={<CourseHome setShowPopup={setShowPopup} />}
          />
        </Routes>
        <Routes>
          <Route exact path="/team" element={<Team />} />
        </Routes>
        <Routes>
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
        <Routes>
          <Route exact path="/blog/:id" element={<BlogPage/>} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route exact path="/cards" element={<Cards />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
