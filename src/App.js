import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BlogPost from "./Components/BlogPost";
import MediaPost from "./Components/MediaPost";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:uid" element={<BlogPost />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:uid" element={<MediaPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
