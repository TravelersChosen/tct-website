// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./components/pages/about";
import QueueHelper from "./components/pages/queuehelper";
import Homepage from "./components/pages/homepage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/queuehelper"
                    element={<QueueHelper />}
                />
            </Routes>
        </Router>
    );
}

export default App;