import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./common/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Success from "./components/Success/Success";
import Work from "./components/Work/Work";
import Blog from "./components/Blog/Blog";
import Softtech from "./components/Softtech/Softtech";

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/softtech" element={<Softtech />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
