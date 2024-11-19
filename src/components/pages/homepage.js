import logo from '../../logo.png';
import '../../App.css';


{
var activitytype = 1;
var activity = "";
var activity_found = false;
var encounter = "";
var encounter_found = false;
var difficulty = false;
var difficulty_found = false;

var bungiename = "";
var bungiename_found = false;

var queueString = "";
}
function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Travelers Chosen Team Bots
        </h1>
        <a
          className="luckbot9-link"
          href="https://twitch.tv/luckbot9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luckbot9
        </a>
        <a
          className="travelersChosen-link"
          href="https://twitch.tv/TravelersChosen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Traveler's Chosen 
        </a>
        <a
          className="guardiandownbot-link"
          href="https://twitch.tv/guardiandownbot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guardian Down Bot
        </a>

        <a
          className="d2checkpoints-link"
          href="https://twitch.tv/d2checkpoints"
          target="_blank"
          rel="noopener noreferrer"
        >
          D2Checkpoints
        </a>
      </header>
    </div>
  );
}

export default Homepage;
