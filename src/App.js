import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { DetailsPages } from "../src/components/details"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "bootstrap/dist/css/bootstrap.min.css";



const activeChainId = ChainId.Goerli;
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

    return (
        <ThirdwebProvider desiredChainId={activeChainId}>
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path='/details/:id' element={<DetailsPages/>} />
        </Routes>
        <Footer />
      </div>
            </Router>
        </ThirdwebProvider>
  );
}

export default App;
