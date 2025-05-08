import React, { act } from "react";
import "../../css/queuehelper.css"
import { useState, useEffect } from 'react'

import TCT from '../../Bot_Icons/logo.png';
import GDB from '../../Bot_Icons/GDB.png';
import D2CH from'../../Bot_Icons/d2chests.png';
import LB9 from '../../Bot_Icons/LB9.png';
import D2CP from '../../Bot_Icons/d2cp.png';
import DCP from '../../Bot_Icons/dcp.png';
import DIS from '../../Bot_Icons/dis.png';


let glink = "https://docs.google.com/spreadsheets/d/1JmV-28EMiC9q8hnSbtpTprtVjDcrPKPgE_UDuJQIQ8c/edit?gid="

function QueueHelper(){
    const [visible, setVisible] = useState(false)
    const twitchChannels =["Luckbot9", "TravelersChosenTeam", "GuardianDownBot","D2Checkpoints","D2Chests","DestinyCheckpoints", "IceBreakerCatty"]; // Add more channels here
    return (
        <div className= "Queue-Helper">
            <header className="QueueHelper-header">
                <h1 class = "title">Twitch Checkpoint Bot Queue Helper </h1>
                <p class="text">This is a Work in Progress, More to be added/changed</p>
                <p id = "temp"/*<button onClick={data}>Refresh Encounters</button>*/></p>
                <div id="overlay" onClick={off}>
                    <MultiTwitchEmbed channels={twitchChannels} />
                </div>
                <div>
                    <button id = "TwitchBotsButton" onClick={on}>Click Here to View the Bots</button>
                </div>

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
                <button type="button" class= "copy" id = "copy" onClick={copyButton} onMouseLeave={resetButton}>Copy to Clipboard</button>
                <div id = "bot-buttons"></div>
                </div>
                </div>
                <footer id = "foot"></footer>
            </div>
        </div>
            );
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

function on() {
    document.getElementById("overlay").style.display = 'block';
  }
  
function off() {
    document.getElementById("overlay").style.display = "none";
  }

const botData = [];

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
const botAbriv = {
    "TravelersChosenTeam": TCT,
    "Luckbot9": LB9,
    "D2Chests": D2CH, 
    "GuardianDownBot": GDB, 
    "Discord": DIS, 
    "D2Checkpoints": D2CP,
    "DestinyCheckpoints": DCP, 
    "IcebreakerCatty": "IBC"

}

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
var difficulty = "difficulty"
var bungiename = "bungiename#0000"

function copyButton(){
    let queue = document.getElementById("queueString").innerText
    var but = document.getElementById("copy")
    but.innerHTML = "Copied"
    navigator.clipboard.writeText(queue)
    return;
}
function resetButton(){
    var but = document.getElementById("copy")
    but.innerHTML = "Copy to Clipboard"
}
function isDigit(str) 
        {
            return /^\d+$/.test(str);
        }
function bungienamevalidator() 
        {
            removeBots()
            var testbungiename = document.getElementById('bungiename').value;
            bungiename = testbungiename
            var bungiename_found = true
            var testbungiename_length = testbungiename.length
            if (!isDigit(testbungiename.charAt(testbungiename_length-1)))
            {
                bungiename_found = false;
            }
            if (!isDigit(testbungiename.charAt(testbungiename_length-2)))
            {
                bungiename_found = false;
            }
            if (!isDigit(testbungiename.charAt(testbungiename_length-3)))
            {
                bungiename_found = false;
            }
            if (!isDigit(testbungiename.charAt(testbungiename_length-4)))
            {
                bungiename_found = false;
            }
            if (testbungiename.charAt(testbungiename_length-5)!='#')
            {
                bungiename_found = false;
            }
            if(bungiename_found && bungiename!= "" && activity != "activity" && encounter != "encounter" && (difficulty == 'n' || difficulty == 'm')){
                valid('green')
                findBots()
            }
            else{
                valid('red')
            }
            createQueueString()
        }
function findBots(){

    let copyBut = document.getElementById('bot-buttons')
    removeBots()
    let botNames = []
    if(activity == "SW"){
        let acti = document.createElement('a');
        let imgicon = document.createElement('img')
        //console.log(botAbriv[botNames['GuardianDownBot']])
        imgicon.src = GDB
        imgicon.width = 90
        acti.id = "BotButtons"  
        acti.href = "https://twitch.tv/GuardianDownBot" 
        acti.appendChild(imgicon)
        copyBut.appendChild(acti)
    }
    else{
        for(let i = 0; i < botData.length; i++)
            {
                //console.log(botData[i])
                // && botData[i][1] == encounter  && botData[i][2].charAt(0).toLowerCase() == difficulty
                
                if(abriviations[botData[i][0]] == activity && (botData[i][1].toLowerCase()) == encounter && (botData[i][2].toLowerCase()).startsWith(difficulty)){
                    //console.log((botData[i][2].toLowerCase()).startsWith(difficulty))
                    botNames = botData[i][3]
                }
            }
           // console.log(botNames)
        for(let k = 0; k < botNames.length; k++){   
            let acti = document.createElement('a');
            let imgicon = document.createElement('img')
           // console.log(botAbriv[botNames[k]])
            let bot = botAbriv[botNames[k]]
            imgicon.src = botAbriv[botNames[k]]
            imgicon.width = 90
            acti.id = "BotButtons" 
            if (botNames[k] != "Discord"){
                acti.href = "https://twitch.tv/" + botNames[k]
            }
            else{
                acti.href = 'https://discordapp.com/channels/900591826975752192/1087216431806021642'
            }
            acti.appendChild(imgicon)
            copyBut.appendChild(acti)
        }
    }

}
function removeBots(){
    let copyBut = document.getElementById('bot-buttons')
    copyBut.innerHTML = ""
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
    data()
    let list = AllRaids
    let temp = document.getElementById("Activities")  
    let encounters = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    let created = []

    for(let i = 0; i < botData.length; i++){ 
        if (list.includes(botData[i][0]) && !created.includes(botData[i][0])){
            let acti = document.createElement('button');
            acti.innerText = botData[i][0];
            acti.id = "button"
            acti.onclick = function(){selectEncounters(acti.innerText); checkname()}
            temp.appendChild(acti);
            created.push(botData[i][0])
            
        }
        activity = "activity"
        encounter = "encounter"
        difficulty = ""
        checkname()
        createQueueString()
    }

}
function selectDungeons(){
    data()
    let list = AllDungeons
    let temp = document.getElementById("Activities")
    let encounters = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    

    let created = []

    for(let i = 0; i < botData.length; i++){ 
        if (list.includes(botData[i][0]) && !created.includes(botData[i][0])){
            //console.log(botData[i][0])
            let acti = document.createElement('button');
            acti.innerText = botData[i][0];
            acti.id = "button"
            acti.onclick = function(){selectEncounters(acti.innerText); checkname()}
            temp.appendChild(acti);
            created.push(botData[i][0])
            
        }
    }
    activity = "activity"
    encounter = "encounter"
    difficulty = ""
    checkname()
    createQueueString()
}
function selectStories(){
    data()
    let list = AllStorys
    let temp = document.getElementById("Activities")
    let encounters = document.getElementById("Encounters")
    let diff= document.getElementById("Difficulty")
    removeButtons(encounters)
    removeButtons(diff)
    removeButtons(temp)
    
    let created = []

    for(let i = 0; i < botData.length; i++){ 
        if (list.includes(botData[i][0]) && !created.includes(botData[i][0])){
            //console.log(botData[i][0])
            let acti = document.createElement('button');
            acti.innerText = botData[i][0];
            acti.id = "button"
            acti.onclick = function(){selectEncounters(acti.innerText); checkname()}
            temp.appendChild(acti);
            created.push(botData[i][0])
            
        }
    }
    activity = "activity"
    encounter = "encounter"
    difficulty = ""
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
    data()

    activity = abriviations[selactivity]

    difficulty = ""
    encounter = "encounter"
    createQueueString()
    let usedenc = []
    let temp = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(diff)
    removeButtons(temp)
    checkname()
    //console.log(botData)
    for(let i = 0; i < botData.length; i++){ 
        if(botData[i][0] == selactivity && !usedenc.includes(botData[i][1])){
            //console.log(botData[i][1])
            let acti = document.createElement('button');
            acti.innerText = botData[i][1];
            acti.id = "button"
            acti.onclick = function(){selectDifficulty(acti.innerText, selactivity); checkname()}
            temp.appendChild(acti);
            usedenc.push(botData[i][1])
        
        }
    }
    checkname()

}

function selectDifficulty(selencounter, selactivity){
    data()
    let temp = document.getElementById("Difficulty")
    removeButtons(temp)
    for(let i = 0; i < botData.length; i++){
        if((botData[i][0] == selactivity && botData[i][1] == selencounter) &&(botData[i][2] == "Master" || botData[i][2] == "Normal" || botData[i][2] == 'Ultimatum')){
            
            let acti = document.createElement('button');
            acti.innerText = botData[i][2]
            acti.onclick = function(){diffic(botData[i][2].toLowerCase()); checkname()}
            acti.id = "button";
            temp.appendChild(acti);
        }
    }
    checkname()
    //var enc = selencounter.replaceAll(" ", "").split(":")
    var enc = selencounter.split(" ")
    //Quick fix for on the verge & no time left Story Missions
    if (enc[0].toLowerCase() == "on" || enc[0].toLowerCase() == "no"){
        encounter = enc[2].toLowerCase()
    }
    else{
        encounter = enc[0].toLowerCase()
    }
    
    difficulty = ""
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
    if (dcolor == 'green'){
        but.style.visibility = 'visible';
    }
    else{
        but.style.visibility = 'hidden';
    }
}


function data(){
    getData(glink+"822929884", "Discord")

    getData(glink+"1584931659", "TravelersChosenTeam")
   
    getData(glink+"876293126", "Luckbot9")
   
    getData(glink+"272935733", "GuardianDownBot")
   
    getData(glink+"2090837855", "D2Checkpoints")
   
    getData(glink+"1882844670", "D2Chests")

    getData(glink+"976579848", "DestinyCheckpoints")
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
      rows.push(cells + "\n");
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
        if(tempString.charAt[0] === ",")
            tempString = tempString.slice(1)
      cells.push(tempString);
    tempString = "";
  }
}
let s = ""

for(let i = 0; i < rows.length; i++){
    const temprow = rows[i].split(",")
    //Get Rid of header
    if(temprow[2] == "")
        temprow[2] = "Normal"
    temprow[3] = botName
    s+= temprow[2] + "\n"
    addActivity(temprow)
}

let t = document.getElementById("testing")

}
/// Activity, Checkpoint, Difficulty, Character, Bots = {}
/*
0 = Activity
1 = Checkpoint
2 = Difficulty
3 = BLANK / Bot Name
4 = "Character"
*/

function addActivity(rows){//activity, checkpoint, difficulty, botName){
    let activity = rows[0].replace("&#39;", "\'")
    let checkpoint = rows[1]
    let difficulty = rows[2]
    let botName = rows[3]
    let checkitem = [activity, checkpoint, difficulty]
    let item = []
    let exist = activityExists(checkitem)
    if(exist[0]){
        if(!botData[exist[1]][3].includes(botName))
            botData[exist[1]][3].push(botName)
    }
    else{
        item = [activity, checkpoint, difficulty, [botName]]
        botData.push(item)
    }
}

function activityExists(values){
    for(let i = 0; i < botData.length; i++){
        if(botData[i][0] == values[0] && botData[i][1] == values[1] && botData[i][2] == values[2])
            return [true, i];
    }
    return [false, -1]
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