// pages/about.js
import '../../checkpointlist.css';
import logo from '../../logo.png';
import GDB from '../../GDB Logo.png';
import D2Ch from'../../d2chests.png';
import LB9 from '../../LB9.png';
import { useLocation, useEffect, useState } from 'react';

const CheckpointList = () => {
    return (
    <div id = "List" className= "CheckpointList" style={{backgroundColor: '#282c34' }}>
            <header className="App-header">
        <h1>
          CheckpointList
        </h1>
        <div className="row">
          <div className="column">
            <p className='name'>Discord Bot</p>
            <a id = "Discord"></a>
          </div>
          <div className="column">
            <p className='name'>TCT Bot</p>
            <ul id = "TravelersChosenTeam"></ul>
          </div>
          <div className="column">
          
            <p className='name'>LB9 Bot</p>
            <ul id = "Luckbot9"></ul>
          </div>
          <div className="column">
            <p className='name'>GDB Bot</p>
            <ul id = "GuardianDownBot"></ul>
          </div>
          <div className="column">
            <p className='name'>D2Checkpoints Bot</p>
            <ul id = "D2Checkpoints"></ul>
          </div>
          <div className="column">
            <p className='name'>D2Chests Bot</p>
            <ul id = "D2Chests"></ul>
          </div>
        </div>
      </header>
    </div>
    );
};
let glink = "https://docs.google.com/spreadsheets/d/1JmV-28EMiC9q8hnSbtpTprtVjDcrPKPgE_UDuJQIQ8c/edit?gid="


waitForElm('.CheckpointList').then((elm) => {
  data()
});

  const AllDungeons = [
    "Sundered Doctirine",
		"Vesper's Host",
		"Warlord's Ruin",
		"Ghosts of the Deep", 
		"Spire of the Watcher", 
		"Duality", 
		"Grasp of Avarice", 
		"Prophecy", 
		"Pit of Heresy", 
		"Shattered Throne"]
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
      const AllCampaigns = [
      "Final Shape",
      "Lightfall",
      "Witch Queen"
    ]

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
  let usedencounters = ""
  let link = "https://www.twitch.tv/"+ botName
    let dlist = document.getElementById(botName);
    for (let i = 0; i < rows.length; ++i){
      if(typeof rows[i][0] !== 'undefined' && (AllDungeons.includes(rows[i][0]) || AllRaids.includes(rows[i][0]) || AllCampaigns.includes(rows[i][0])) && !usedencounters.includes(rows[i][0])){
        let li = document.createElement('a');
        if(rows[i][2] == "Master")
        {
          li.innerText = rows[i][0] + " - " + rows[i][1] + "(M)"
        }
        else{
          li.innerText = rows[i][0] + " - " + rows[i][1]
        }
        for(let k = i+1; k< rows.length; k++){
          if(rows[k][0] == rows[i][0]){
            if(rows[k][2] == "Master"){
              li.innerText += ", " + rows[k][1] + "(M)"
            }
            else{
              li.innerText += ", " + rows[k][1]  
            }
          }
        }
        /*li.onclick = function(){
          window.location.href = link
        }*/
        li.innerText += "\n"
        if(botName != "Discord")
          li.href = link
        dlist.appendChild(li);
        usedencounters +=rows[i][0] + " "
      }
      
    }
}


function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              observer.disconnect();
              resolve(document.querySelector(selector));
          }
      });

      // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

export default CheckpointList;