// filename -App.js
//<Route
//path="/queuehelper"
//element={<QueueHelper />}
///>

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from "./about";
import QueueHelper from "./components/pages/queuehelper";
import Homepage from "./components/pages/homepage";
import CheckpointList from "./components/pages/checkpointlist";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                
                <Route
                    path="/checkpointlist"
                    element={<CheckpointList />}
                />
            </Routes>
        </Router>
    );
}

export default App;