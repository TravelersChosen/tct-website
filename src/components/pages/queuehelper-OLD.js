// pages/annual.js
import TwitchBots from './twitchbots';
import React, { act, useEffect  } from "react";
import "../../queuehelper.css"
import { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'
import "../../twitchbots.css"


let glink = "https://docs.google.com/spreadsheets/d/1JmV-28EMiC9q8hnSbtpTprtVjDcrPKPgE_UDuJQIQ8c/edit?gid="

function QueueHelper(){
    const [visible, setVisible] = useState(false)
    const twitchChannels = ["Luckbot9", "TravelersChosenTeam", "GuardianDownBot","D2Checkpoints","D2Chests","DestinyCheckpoints", "IceBreakerCatty"]; // Add more channels here
    return (
        <div className= "Queue-Helper">
            <header className="QueueHelper-header">
                <h1 class = "title">Twitch Checkpoint Bot Queue Helper </h1>
                <p class="text">This is a Work in Progress, More to be added/changed</p>
            </header>
            <div class = "specific_selectors">
                    <button id = "Chests" type ="button" /*onClick={}*/>Chests</button>
                    <button id = "Pinnicle" /*onClick={}*/>Pinnicle</button>
                    <button id = "Spoils" /*onClick={}*/ >Spoils</button></div>
            <div class ="queuehelpertable" >
                <div  class="Activity_Selector">
                    <button id = "r" type ="button" onClick={selectRaids}>Raids</button>
                    <button id = "d" onClick={selectDungeons}>Dungeons</button>
                    <button id = "sm" onClick={selectStories} >Story Missions</button>
                    <button id = "sw" onClick={selectSW} >Shared Wisdom</button>
                </div>
                <div id="Activities" class="Activities"></div>
                <div id="Encounters" class="Encounters"></div>
                <div id="Difficulty" class="Difficulty"></div>
                <div id="BungieNameAvaliable" class="BungieNameAvaliable"><div id="name-container">
                <p class="bungie-name">Bungie Name: <input type="text" id="bungiename" onKeyUp={bungienamevalidator} placeholder="bungiename#0000"></input></p>
                <p id="queueString">!queue </p>
                <button type="button" class= "copy" id = "copy" onClick={copyButton}>Copy to Clipboard</button>
                </div>
                </div>
            </div>
            
        </div>
            );
};
const abriviations = {
    "Sundered Doctrine": "SD",
    "Salvation's Edge": "SE", 
	"Pantheon":"Pn", 
	"Crota's End":"CE", 
	"Root of Nightmares": "RoN", 
	"King's Fall":"KF", 
	"Vow of the Disciple": "VotD", 
	"Vault of Glass": "VoG", 
	"Deep Stone Crypt":"DSC", 
	"Garden of Salvation": "GoS", 
	"Last Wish":"LW", 
	"Vesper's Host":"VH",
	"Warlord's Ruin":"WR", 
	"Ghosts of the Deep":"GotD", 
	"Spire of the Watcher": "SotW", 
	"Duality": "D", 
	"Grasp of Avarice": "GoA", 
	"Prophecy": "P", 
	"Pit of Heresy": "PoH", 
	"Shattered Throne":"ST",
	"Shared Wisdom": "SW",
	"GrandMaster": "GM",
    "Final Shape": "FS", 
	"Witch Queen": "WQ", 
	"Lightfall": "LF"
}

const AllActivitiesDifficulties = [
	"Sundered Doctrine",
	"Vesper's Host",
	"Salvation's Edge", 
	"Pantheon",
	"Crota's End", 
	"Root of Nightmares",
	"King's Fall", 
	"Vow of the Disciple", 
	"Vault of Glass", 
	"Warlord's Ruin", 
	"Ghosts of the Deep",
	"Spire of the Watcher", 
	"Duality", 
	"Grasp of Avarice",
	"Final Shape", 
	"Lightfall", 
	"Witch Queen"
]

const AllRaids = [
	"Salvation's Edge", 
	"Crota's End", 
	"Root of Nightmares",
	"King's Fall", 
	"Vow of the Disciple", 
	"Vault of Glass", 
	"Deep Stone Crypt", 
	"Garden of Salvation", 
	"Last Wish"
]

const AllDungeons = [
	"Sundered Doctrine",
	"Vesper's Host",
	"Warlord's Ruin",
	"Ghosts of the Deep", 
	"Spire of the Watcher", 
	"Duality", 
	"Grasp of Avarice", 
	"Prophecy", 
	"Pit of Heresy", 
	"Shattered Throne"
]

    const AllStorys = [
	"Final Shape", 
	"Witch Queen", 
	"Lightfall"
]
const allEncounters = {
    "Sundered Doctrine": ["1: Puzzle", "Chest 1", "2:", "Chest 2", "Boss"],
    "Salvation's Edge": ["1: Substratum","2: Dissipation", "Chest 1","3: Repository", "4: Verity", "Chest 2", "5: The Witness"], 
	"Pantheon":["Pn"], 
	"Crota's End":["1: Abyss", "2: Bridge", "Chest 2", "3: Ir Yut / Deathsinger", "4: Crota"], 
	"Root of Nightmares": ["1: Cataclysm", "Chest 1", "2: Scission", "Chest 2", "3: Macrocosm / Explicator", "4: Nezarec"], 
	"King's Fall":["Ships", "1: Totems", "2: Warpriest", "Maze / Chest 3", "3: Golgoroth",  "Wall / Chest 4", "4: Daughters / Deathsingers", "5: Oryx"], 
	"Vow of the Disciple": ["Chest 1","1: Acquisition",  "2: Caretaker", "Chest 2", "3: Exhibition / The Upended", "4: Rhulk"], 
	"Vault of Glass": ["1: Confluxes / Chest 1 & 2", "2: Oracles", "3: Templar", "Post-Templar", "4: Gatekeeper / Chest 4", "5: Atheon"], 
	"Deep Stone Crypt":["1: Security","2: Atraks-1", "Chest 2", "3: Descent", "4: Taniks"], 
	"Garden of Salvation": ["1: Embrace","Chest 1","2: Undergrowth", "3: Consecrated Mind", "Chest 2", "4: Sanctified Mind"], 
	"Last Wish":["1: Kali", "2: Shuro-Chi / Chest 1", "3: Morgeth / Chest 2", "4: Vault", "5: Riven"], 
	"Vesper's Host":["1: Bombs", "Chest 1", "2: Servitor", "Chest 2", "3: Final Boss"],
	"Warlord's Ruin":["1: Rathil / First Boss", "2: Tempest / Second Boss", "Chest", "3: Hefnd / Final Boss"], 
	"Ghosts of the Deep":["1: Ritual", "Chest 1", "2: Ecthar / First Boss", "3: Simmumah / Final Boss / Chest 2"], 
	"Spire of the Watcher": ["Chest 1", "1: Ascent", "2: Akelous / First Boss", "Chest 2", "3: Persys / Final Boss"], 
	"Duality": ["1: Gahlran / First Boss", "Chest 1", "2: Vault", "Chest 2", "3: Caiatl / Final Boss"], 
	"Grasp of Avarice": ["Chest 1", "1: Ogre / First Boss", "Chest 2", "2: Shield", "3: Avarokk / Final Boss"], 
	"Prophecy": ["1: Phalanx / First Boss", "2: Cube", "Chests", "3: Final Boss"], 
	"Pit of Heresy": ["1", "2", "3: Zulmak / Final Boss"],
	"Shattered Throne":["1", "2", "3: Dul Incaru / Final Boss"],
	"Shared Wisdom": "SW",
	"GrandMaster": "GM",
    "Final Shape": ["1: Transmigration", "2: Temptation", "3: Exegesis", "4: Requiem", "5: Ascent", "6: Dissent", "7: Iconoclasm"], 
	"Witch Queen": ["1: Arrival", "2: Investigation", "3: Ghosts", "4: Communion", "5: Mirror", "6: Cunning", "7: Last Chance", "8: Ritual"], 
	"Lightfall": ["1: First Contact", "2: Under Siege", "3: Downfall", "4: Breakneck", "5: On The Verge", "6: No Time Left", "7: Headlong", "8: Desperate Measures"]
}
var ChestCheckpoints = {
	"Salvation's Edge": ["Chest1", "Chest2"],
	"Crota's End": ["Abyss", "Hallway"],
	"Root of Nightmares": ["Chest1", "Chest2"],
	"King's Fall": ["Ships","Wall", "Maze"],
	"Vow of the Disciple": ["Chest1","Chest2"],
	"Vault of Glass": ["Confluxes", "Post-Templar", "Gatekeeper"],
	"Deep Stone Crypt": ["Chest1", "Chest2"],
	"Garden of Salvation": ["Chest1", "Chest2", "Sanctified"],
	"Last Wish": ["Shuro-Chi", "Morgeth"],
	"Warlord's Ruin": ["Chest"],
	"Ghosts of the Deep": ["Chest1", "Boss"],
	"Spire of the Watcher": ["Chest1", "Chest2"],
	"Duality": ["Chest1", "Chest2"],
	"Grasp of Avarice": ["Chest1", "Chest2"],
	"Prophecy": ["Chest1", "Chest2","Chests"],
	"Final Shape": ["Ascent", "Dissent", "Iconoclasm"],
	"Vesper's Host": ["Chest1", "Chest2"],
	"Sundered Doctrine": ["Chest1","Chest2"],
}

var SpoilCheckpoints = {
	"Salvation's Edge": ["Chest1", "Chest2"],
	"Crota's End": ["Abyss", "Hallway"],
	"Root of Nightmares": ["Chest1", "Chest2"],
	"King's Fall": ["Wall", "Maze"],
	"Vow of the Disciple": ["Chest1","Chest2"],
	"Vault of Glass": ["Confluxes", "Post-Templar", "Gatekeeper"]
}

var activity = "activity"
var encounter = "encounter"
var difficulty = "n"
var bungiename = "bungiename#0000"

function copyButton(){
    let queue = document.getElementById("queueString").innerText
    console.log(queue)
    navigator.clipboard.writeText(queue)
    return;
}
function isDigit(str) 
        {
            return /^\d+$/.test(str);
        }
function bungienamevalidator() 
        {
            var testbungiename = document.getElementById('bungiename').value;
            bungiename = testbungiename
            var bungiename_found = true
            var testbungiename_length = testbungiename.length
            if (!isDigit(testbungiename.charAt(testbungiename_length-1)))
            {
                console.log("Invalid Bungie Name: Missing Digit (-1)",testbungiename.charAt(-1))
                bungiename_found = false;
            }
            if (!isDigit(testbungiename.charAt(testbungiename_length-2)))
            {
                console.log("Invalid Bungie Name: Missing Digit (-2)",testbungiename.charAt(-2))
                bungiename_found = false;
            }
            if (!isDigit(testbungiename.charAt(testbungiename_length-3)))
            {
                console.log("Invalid Bungie Name: Missing Digit (-3)",testbungiename.charAt(-3))
                bungiename_found = false;
            }
            if (!isDigit(testbungiename.charAt(testbungiename_length-4)))
            {
                console.log("Invalid Bungie Name: Missing Digit (-4)",testbungiename.charAt(-4))
                bungiename_found = false;
            }
            if (testbungiename.charAt(testbungiename_length-5)!='#')
            {
                console.log("Invalid Bungie Name: Missing #",testbungiename.charAt(-5))
                bungiename_found = false;
            }
            if(bungiename_found && bungiename!= "" && activity != "activity" && encounter != "encounter"){
                valid('green')
            }
            else{
                valid('red')
            }
            createQueueString()
        }

function checkname(){
    var testbungiename = document.getElementById('bungiename').value;
    bungiename = testbungiename
    bungienamevalidator() 
}

function createQueueString(){
    let queue = document.getElementById("queueString");
    queue.innerText = "!queue " + activity + " " + encounter + " " + difficulty + " " + bungiename
}

function removeButtons(element){
    element.innerHTML = ""
}
function selectRaids(){
    let list = AllRaids
    let temp = document.getElementById("Activities")  
    let encounters = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    

    for(let i = 0; i < list.length; i++){
        let acti = document.createElement('button');
        acti.innerText = list[i];
        acti.id = "button"
        acti.onclick = function(){selectEncounters(acti.innerText)}
        temp.appendChild(acti);
    }
    activity = "activity"
    encounter = "encounter"
    difficulty = "n"
    checkname()
    createQueueString()

}
function selectDungeons(){
    let list = AllDungeons
    let temp = document.getElementById("Activities")
    let encounters = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    

    for(let i = 0; i < list.length; i++){
        let acti = document.createElement('button');
        acti.innerText = list[i];
        acti.id = "button"
        acti.onclick = function(){selectEncounters(acti.innerText)}
        temp.appendChild(acti);
    }
    activity = "activity"
    encounter = "encounter"
    difficulty = "n"
    checkname()
    createQueueString()
}
function selectStories(){
    let list = AllStorys
    let temp = document.getElementById("Activities")
    let encounters = document.getElementById("Encounters")
    let diff= document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    
    for(let i = 0; i < list.length; i++){
        let acti = document.createElement('button');
        acti.innerText = list[i];
        acti.id = "button"
        acti.onclick = function(){selectEncounters(acti.innerText)}
        temp.appendChild(acti);
    }
    activity = "activity"
    encounter = "encounter"
    difficulty = "n"
    checkname()
    createQueueString()
}
function selectSW(){

    let temp = document.getElementById("Activities")
    let encounters = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    

    activity = "SW"
    encounter = "1"
    difficulty = "n"
    checkname()
    createQueueString()
}


function selectEncounters(selactivity){
    //console.log(abriviations[selactivity])

    activity = abriviations[selactivity]

    difficulty = "n"
    encounter = "encounter"
    createQueueString()

    let list = allEncounters[selactivity]
    let temp = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(diff)
    removeButtons(temp)
    checkname()

    for(let i = 0; i < list.length; i++){
        let acti = document.createElement('button');
        acti.innerText = list[i];
        acti.id = "button"
        acti.onclick = function(){selectDifficulty(acti.innerText, selactivity)}
        temp.appendChild(acti);
    }

}

function selectDifficulty(selencounter, selactivity){
    let temp = document.getElementById("Difficulty")
    removeButtons(temp)
    if(AllActivitiesDifficulties.includes(selactivity)){

        for(let i = 0; i < 2; i++){
            let acti = document.createElement('button');
            if(i == 0){
                acti.innerText = "Normal";
                acti.onclick = function(){diffic("normal")}
            }
            else{
                if(AllStorys.includes(selactivity))
                    acti.innerText = "Legend";
                else
                    acti.innerText = "Master";
                acti.onclick = function(){diffic("master")}
            }
            acti.id = "button";
            temp.appendChild(acti);
        }
    }
    else {
        checkname()
    }
    
    var enc = selencounter.replaceAll(" ", "").split(":")
    encounter = enc[0].toLowerCase()
    difficulty = "n"
    createQueueString()

}

function diffic(d){
    difficulty = d[0]
    createQueueString()
    checkname()
}

function valid(dcolor){
    var string = document.getElementById("queueString")
    var but = document.getElementById("copy")
    string.style.color = dcolor
    but.style.background = dcolor
}


function data(){
    getData(glink+"822929884", "Discord")

    //getData(glink+"1584931659", "TravelersChosenTeam")
   
    //getData(glink+"876293126", "Luckbot9")
   
   // getData(glink+"272935733", "GuardianDownBot")
   
    //getData(glink+"2090837855", "D2Checkpoints")
   
    //getData(glink+"1882844670", "D2Chests")
  }

function getData(url, botName){
fetch(url)
  .then((response) => response.text())
  .then((data) => process(data, botName));
}

function process(data, botName) {

let rows = [];
let cells = [];
let tempString = "";
let skipHeader = false

for (let i = 0; i < data.length; i++) {
  if (data[i - 3] == "/" && data[i - 2] == "t" && data[i - 1] == "r") {
    if(skipHeader){
      rows.push(cells);
      cells = [];
    }
    skipHeader = true
  }
  if (data[i - 3] == "<" && data[i - 2] == "t" && data[i - 1] == "d") {
    while (data[i] !== ">") {
      i++;
    }
    i++;
    let j = i;
    while (data[j] + data[j + 1] + data[j + 2] + data[j + 3] !== "</td") {
      tempString += data[j];
      j++;
    }
    if(tempString != "")
      cells.push(tempString);
    tempString = "";
  }
}
}

const TwitchEmbed = ({ channel }) => {
  const containerId = `twitch-embed-${channel}`;

  useEffect(() => {
    if (!window.Twitch) {
      const script = document.createElement("script");
      script.src = "https://embed.twitch.tv/embed/v1.js";
      script.async = true;
      script.onload = () => initializeTwitchEmbed();
      document.body.appendChild(script);
    } else {
      initializeTwitchEmbed();
    }

    function initializeTwitchEmbed() {
      if (window.Twitch && window.Twitch.Embed) {
        const embed = new window.Twitch.Embed(containerId, {
          width: "100%",
          height: "300",
          channel: channel,
          layout: "video",
          parent: ["travelerschosen.org", "www.travelerschosen.org"]
        });

        embed.addEventListener(window.Twitch.Embed.VIDEO_READY, () => {
          const player = embed.getPlayer();
          player.setMuted(true); // Ensure it is not muted
          //player.setVolume(0.2); // Set volume to 20%
        });
      }
    }

    return () => {
      const embedContainer = document.getElementById(containerId);
      if (embedContainer) embedContainer.innerHTML = "";
    };
  }, [channel]);

  return <div id={containerId} className="twitch-embed"></div>;
};

const MultiTwitchEmbed = ({ channels }) => {
  return (
    <div className="embed-container">
      {channels.map((channel) => (
        <TwitchEmbed key={channel} channel={channel} />
      ))}
    </div>
  );
};

export default QueueHelper;