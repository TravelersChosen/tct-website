// pages/about.js
import '../../checkpointlist.css';

const CheckpointList = () => {
    return (
    <div className= "CheckpointList" style={{backgroundColor: '#282c34' }}>
            <header className="App-header">
        <h1>
          CheckpointList
        </h1>
        <div class="row">
          <div class="column">
            <p>Discord Bot</p>
            <ul id = "DiscordList"></ul>
          </div>
          <div class="column">
            <p>TCT Bot</p>
            <ul id = "TcTList"></ul>
          </div>
          <div class="column">
            <p>LB9 Bot</p>
            <ul id = "LB9List"></ul>
          </div>
          <div class="column">
            <p>GDB Bot</p>
            <ul id = "GDBList"></ul>
          </div>
          <div class="column">
            <p>D2Checkpoints Bot</p>
            <ul id = "D2CPList"></ul>
          </div>
          <div class="column">
            <p>D2Chests Bot</p>
            <ul id = "D2CList"></ul>
          </div>
        </div>
        
      </header>
    </div>
    );
};

  fetch(
  "https://docs.google.com/spreadsheets/d/1JmV-28EMiC9q8hnSbtpTprtVjDcrPKPgE_UDuJQIQ8c/edit?gid=822929884#gid=822929884"
)
  .then((response) => response.text())
  .then((data) => process(data));

function process(data) {
  const AllDungeons = [
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
  console.log("rows" + rows);
  let tempTest = ""
  let temp = ""
  let names = ""
  //const list = document.createElement("p")
  //document.getElementById("text").appendChild(list)
  /*for (let i = 1 ; i < rows.length; i++){
    temp = rows[i][0]
    //console.log(temp)
    tempTest = ""
    if(typeof temp !== 'undefined' && (AllDungeons.includes(temp) || AllRaids.includes(temp) || AllCampaigns.includes(temp))){
      tempTest += rows[i][0] + ": " + rows[i][1] + "\n"
      if(!names.includes(rows[i][0]))
        names += rows[i][0] + "\n"
      const t = document.createElement('BUTTON')
      t.innerHTML = temp
      t.onclick = function(){
        //console.log("test")
        this.innerHTML = "Creating Queue"
      }
     // console.log(tempTest)
      document.getElementById("text").innerHTML = tempTest
      //list.appendChild(t) //having issues appending to this, seems to be loading this page and fetch when homepage is loaded
      //list.appendChild(document.createElement('br'))
    }
  }*/
  let usedencounters = ""
  let dlist = document.getElementById("DiscordList");
  for (let i = 0; i < rows.length; ++i){
    if(typeof rows[i][0] !== 'undefined' && (AllDungeons.includes(rows[i][0]) || AllRaids.includes(rows[i][0]) || AllCampaigns.includes(rows[i][0])) && !usedencounters.includes(rows[i][0])){
      let li = document.createElement('li');
      li.innerText = rows[i][0];
      dlist.appendChild(li);
      usedencounters +=rows[i][0] + " "
    }
  }
  //console.log(tempTest.includes("Vault of Glass"))
  //console.log(tempTest)
  //document.getElementById("text").innerHTML = names.replace(/\n/g, "<br>");

  
}


export default CheckpointList;