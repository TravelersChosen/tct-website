// pages/annual.js

import React, { act } from "react";
import "../../queuehelper.css"


let glink = "https://docs.google.com/spreadsheets/d/1JmV-28EMiC9q8hnSbtpTprtVjDcrPKPgE_UDuJQIQ8c/edit?gid="

function QueueHelper(){
    return (
        <div className= "Queue-Helper">
            <header className="QueueHelper-header">
                <h1 class = "title">Twitch Checkpoint Bot Queue Helper </h1>
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
                <button type="button" onClick={copyButton}>Copy to Clipboard</button>
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
	"Duality": "Duality", 
	"Grasp of Avarice": "GoA", 
	"Prophecy": "Prophecy", 
	"Pit of Heresy": "PoH", 
	"Shattered Throne":"ST",
	"Shared Wisdom": "SW",
	"GrandMaster": "GM",
    "Final Shape": "FS", 
	"Witch Queen": "WQ", 
	"Lightfall": "LF"
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
	"Last Wish"]

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
	"Shattered Throne"]

    const AllStorys = [
	"Final Shape", 
	"Witch Queen", 
	"Lightfall"
]
const allEncounters = {
    "Sundered Doctrine": ["1", "Chest1 ❗", "2", "Chest2 ❗", "boss"],
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
	"Duality": "Duality", 
	"Grasp of Avarice": "GoA", 
	"Prophecy": "Prophecy", 
	"Pit of Heresy": "PoH", 
	"Shattered Throne":"ST",
	"Shared Wisdom": "SW",
	"GrandMaster": "GM",
    "Final Shape": "FS", 
	"Witch Queen": "WQ", 
	"Lightfall": "LF"
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
function bungienamevalidator() 
        {
            var testbungiename = document.getElementById('bungiename').value;
            bungiename = testbungiename
            createQueueString()
            return;
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
    createQueueString()
}


function selectEncounters(selactivity){
    //console.log(abriviations[selactivity])

    activity = abriviations[selactivity]

    createQueueString()

    let list = allEncounters[selactivity]
    let temp = document.getElementById("Encounters")
    let diff = document.getElementById("Difficulty")
    removeButtons(diff)
    removeButtons(temp)

    for(let i = 0; i < list.length; i++){
        let acti = document.createElement('button');
        acti.innerText = list[i];
        acti.id = "button"
        acti.onclick = function(){selectDifficulty(acti.innerText)}
        temp.appendChild(acti);
    }
    

}

function selectDifficulty(selencounter){
    let temp = document.getElementById("Difficulty")
    removeButtons(temp)
    for(let i = 0; i < 2; i++){
        let acti = document.createElement('button');
        if(i == 0){
            acti.innerText = "Normal";
            acti.onclick = function(){diffic("normal")}
        }
        else{
            acti.innerText = "Master";
            acti.onclick = function(){diffic("master")}
        }
        acti.id = "button";
        temp.appendChild(acti);
    }
    var enc = selencounter.split(" ")
    encounter = enc[0]
    difficulty = "n"
    createQueueString()

}

function diffic(d){
    difficulty = d[0]
    createQueueString()
}


function data(){
    getData(glink+"822929884", "Discord")

    getData(glink+"1584931659", "TravelersChosenTeam")
   
    getData(glink+"876293126", "Luckbot9")
   
    getData(glink+"272935733", "GuardianDownBot")
   
    getData(glink+"2090837855", "D2Checkpoints")
   
    getData(glink+"1882844670", "D2Chests")
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

export default QueueHelper;