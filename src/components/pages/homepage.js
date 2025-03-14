import logo from '../../Bot_Icons/logo.png';
import GDB from '../../Bot_Icons/GDB.png';
import D2Ch from'../../Bot_Icons/d2chests.png';
import LB9 from '../../Bot_Icons/LB9.png';
import '../../App.css';


function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CmMLaFfdsCY?si=G55AY9A-kpjuBCnc" title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>

        <h1 >
        <a id = "bots" href= "http://travelerschosen.org/#/twitchbots">Travelers Chosen Team Bots</a>
        </h1>
        
        {/*<div>
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
        <div>
          <img src = {logo} width="45px" height="45px"/>
        <a
          className="destinycheckpoints-link"
          href="https://twitch.tv/destinycheckpoints"
          target="_blank"
          rel="noopener noreferrer"
        >
          DestinyCheckpoints
        </a>
        </div>*/}
      </header>
      
    </div>
  );
}

export default Homepage;
