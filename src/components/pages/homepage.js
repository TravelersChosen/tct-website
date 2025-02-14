import logo from '../../logo.png';
import GDB from '../../GDB Logo.png';
import D2Ch from'../../d2chests.png';
import LB9 from '../../LB9.png';
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
        <div>
          <img src = {logo} width="45px" height="45px"/>
          <a
            className="travelersChosen-link"
            href="https://twitch.tv/TravelersChosenTeam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Traveler's Chosen 
          </a>
        </div>
        <div>
          <img src = {LB9} width="45px" height="45px"/>
          <a
            className="luckbot9-link"
            href="https://twitch.tv/luckbot9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luckbot9
          </a>
        </div>
        <div>
          <img src = {GDB} width="45px" height="45px"/>
          <a
            className="guardiandownbot-link"
            href="https://twitch.tv/guardiandownbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guardian Down Bot
          </a>
          
        </div>
        
        <div>
          <img src = {logo} width="45px" height="45px"/>
          <a
            className="d2checkpoints-link"
            href="https://twitch.tv/d2checkpoints"
            target="_blank"
            rel="noopener noreferrer"
          >
            D2Checkpoints
          </a>
          
        </div>
        <div>
          <img src = {D2Ch} width="45px" height="45px"/>
        <a
          className="d2chests-link"
          href="https://twitch.tv/d2chests"
          target="_blank"
          rel="noopener noreferrer"
        >
          D2Chests
        </a>
        </div>
      </header>
      
    </div>
  );
}

export default Homepage;
