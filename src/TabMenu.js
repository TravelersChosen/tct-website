import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./about";
import QueueHelper from "./components/pages/queuehelper";
import Homepage from "./components/pages/homepage";
import CheckpointList from "./components/pages/checkpointlist";
import TwitchBots from "./components/pages/twitchbots";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/queuehelper" element={<QueueHelper />} />
                {/* Wrap CheckpointList in a component to force a refresh */}
                {<Route path="/checkpointlist" element={<CheckpointListWrapper />} />}
                <Route path="/twitchbots" element={<TwitchBots />} />
            </Routes>
        </HashRouter>
    );
};

// Wrapper to force re-render on path clicks
const CheckpointListWrapper = () => {
    const location = useLocation();
    return <CheckpointList key={location.key} />;
};

export default App;