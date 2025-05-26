import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/about";
import QueueHelper from "./components/pages/queuehelper";
import Homepage from "./components/pages/homepage";
import CheckpointList from "./components/pages/checkpointlist";
import TwitchBots from "./components/pages/twitchbots";
import FAQ from "./components/pages/FAQ"
import NEW from "./components/pages/queuehelperNEW"

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/queuehelper" element={<QueueHelper />} />
                {/*<Route path="/queuehelperNEW" element={<NEW />} />*/}
                {/* Wrap CheckpointList in a component to force a refresh */}
                {<Route path="/checkpointlist" element={<CheckpointListWrapper />} />}
                <Route path="/twitchbots" element={<TwitchBots />} />
                <Route path="/faq" element={<FAQ />} />
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