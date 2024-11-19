// pages/annual.js

import React from "react";
import "../../queuehelper.css"
import { useState } from "react";

function QueueHelper(){
    const [Count, setCount] = useState(0);
    const [, forceRender] = useState(undefined);
    const handleClick = () => {
        forceRender((prev) => !prev);
    };
    return (
        <div className= "Queue-Helper">
            <header className="QueueHelper-header">
                <h1 class = "title">Twitch Checkpoint Bot Queue Helper </h1>
            </header>
            
            <p class="bungie-name">Bungie Name: <input type="text" id="bungiename" onkeyup="bungienamevalidator()" placeholder="bungiename#0000"/>
                <a class = "help" href="https://discord.gg/kbBbxaeAAy" ><img class = "help" src ="https://cdn-icons-png.flaticon.com/512/4945/4945973.png" ></img></a>
            </p>
            <div class="flex-parent selectorButtons">
            <button id="raidsSelect" class="activitytype" type="button" onclick="selectRaids()">Raids</button>
            <button id="dungeonsSelect" class="activitytype" type="button" onclick="selectDungeons()">Dungeons</button>
            <button id="storySelect" class="activitytype" type="button" onclick="selectOtherActivity()">Stories/Other</button>
            </div>
            <div class="mainButtons">
                <div class="actContainer">
                    <div id="raidsContainer" class="column33" style={{display: 'block'}}>
                        <div id="raidsButtonContainer" class="column50">
                            <p class="typeText">Raid:</p>
                            <button class="activity" type="button" onclick="selectActivity('Salvation\'s Edge')">Salvation's Edge</button>
                            <button class="activity" type="button" onclick="selectActivity('Crota\'s End')">Crota's End</button>
                            <button class="activity" type="button" onclick="selectActivity('Root of Nightmares')">Root of Nightmares</button>
                            <button class="activity" type="button" onclick="selectActivity('King\'s Fall')">King's Fall</button>
                            <button class="activity" type="button" onclick="selectActivity('Vow of the Disciple')">Vow of the Disciple</button>
                            <button class="activity" type="button" onclick="selectActivity('Vault of Glass')">Vault of Glass</button>
                            <button class="activity" type="button" onclick="selectActivity('Deep Stone Crypt')">Deep Stone Crypt</button>
                            <button class="activity" type="button" onclick="selectActivity('Garden of Salvation')">Garden of Salvation</button>
                            <button class="activity" type="button" onclick="selectActivity('Last Wish')">Last Wish</button>
                        </div>
                    </div>
                    <div id="dungeonsContainer" class="column33" style={{display:'none'}}>
                        <div id="dungeonsButtonContainer" class="column50">
                            <p class="typeText">Dungeon:</p>
                            <button class="activity" type="button" onclick="selectActivity('Warlord\'s Ruin')">Warlord's Ruin</button>
                            <button class="activity" type="button" onclick="selectActivity('Ghosts of the Deep')">Ghosts of the Deep</button>
                            <button class="activity" type="button" onclick="selectActivity('Spire of the Watcher')">Spire of the Watcher</button>
                            <button class="activity" type="button" onclick="selectActivity('Duality')">Duality</button>
                            <button class="activity" type="button" onclick="selectActivity('Grasp of Avarice')">Grasp of Avarice</button>
                            <button class="activity" type="button" onclick="selectActivity('Prophecy')">Prophecy</button>
                            <button class="activity" type="button" onclick="selectActivity('Pit of Heresy')">Pit of Heresy</button>
                            <button class="activity" type="button" onclick="selectActivity('Shattered Throne')">Shattered Throne</button>
                            <button class="activity" type="button" onclick="selectActivity('Vesper\'s Host')">Vesper's Host</button>
                        </div>
                    </div>
                    <div id="otherActivityContainer" class="column33" style={{display:'none'}}>
                        <div id="otherActivityButtonContainer" class="column50">
                            <p class="typeText">Other Activites:</p>
                            <button class="activity" type="button" onclick="selectActivity('The Final Shape')">The Final Shape</button>
                            <button class="activity" type="button" onclick="selectActivity('Lightfall')">Lightfall</button>
                            <button class="activity" type="button" onclick="selectActivity('Witch Queen')">Witch Queen</button>
                            <button class="activity" type="button" onclick="selectActivity('Shared Wisdom')">Shared Wisdom</button>
                        </div>    
                    </div>

                </div>
        </div>
        <div class="encContainer">
                <div id="encounterContainer" class="column33">
                    <div class="column50">
                        <p class="typeText" id="encountertext">Encounter:</p>
                        <button id="encounter0button" class="encounter" type="button" onclick="selectEncounter('encounter0button')" style={{display:'none'}}>Chest 1</button>
                        <button id="encounter1button" class="encounter" type="button" onclick="selectEncounter('encounter1button')" style={{display:'none'}}>1: Substratum</button>
                        <button id="encounter1hbutton" class="encounter" type="button" onclick="selectEncounter('encounter1hbutton')" style={{display:'none'}}>Chest 1</button>
                        <button id="encounter2button" class="encounter" type="button" onclick="selectEncounter('encounter2button')" style={{display:'none'}}>2: Dissipation</button>
                        <button id="encounter2hbutton" class="encounter" type="button" onclick="selectEncounter('encounter2hbutton')" style={{display:'none'}}>Chest 1</button>
                        <button id="encounter3button" class="encounter" type="button" onclick="selectEncounter('encounter3button')" style={{display:'none'}}>3: Repository</button>
                        <button id="encounter3hbutton" class="encounter" type="button" onclick="selectEncounter('encounter3hbutton')" style={{display:'none'}}>Wall / Chest 4</button>
                        <button id="encounter4button" class="encounter" type="button" onclick="selectEncounter('encounter4button')" style={{display:'none'}}>4: Verity</button>
                        <button id="encounter4hbutton" class="encounter" type="button" onclick="selectEncounter('encounter4hbutton')" style={{display:'none'}}>Chest 2</button>
                        <button id="encounter5button" class="encounter" type="button" onclick="selectEncounter('encounter5button')" style={{display:'none'}}>5: The Witness</button>
                        <button id="otherEncounter1button" class="encounter" type="button" onclick="selectEncounter('otherEncounter1button')" style={{display:'none'}}>1: Transmigration</button>
                        <button id="otherEncounter2button" class="encounter" type="button" onclick="selectEncounter('otherEncounter2button')" style={{display:'none'}}>2: Temptation</button>
                        <button id="otherEncounter3button" class="encounter" type="button" onclick="selectEncounter('otherEncounter3button')" style={{display:'none'}}>3: Exegesis</button>
                        <button id="otherEncounter4button" class="encounter" type="button" onclick="selectEncounter('otherEncounter4button')" style={{display:'none'}}>4: Requiem</button>
                        <button id="otherEncounter5button" class="encounter" type="button" onclick="selectEncounter('otherEncounter5button')" style={{display:'none'}}>5: Ascent</button>
                        <button id="otherEncounter6button" class="encounter" type="button" onclick="selectEncounter('otherEncounter6button')" style={{display:'none'}}>6: Dissent</button>
                        <button id="otherEncounter7button" class="encounter" type="button" onclick="selectEncounter('otherEncounter7button')" style={{display:'none'}}>7: Iconoclasm</button>
                        <button id="otherEncounter8button" class="encounter" type="button" onclick="selectEncounter('otherEncounter8button')" style={{display:'none'}}>8: Desperate Measures</button>
                    </div>
                    </div>
                </div>
                <div class="flex-parent selectorButtons" id="diffButtons" style={{display: 'flex'}}>
                    <button id="difficultyNormalbutton" class="difficulty" type="button" onclick="selectDifficulty(false)">Normal</button>
                    <button id="difficultyMasterbutton" class="difficulty" type="button" onclick="selectDifficulty(true)">Master</button>
                </div>
                <div class="queueOptions">
            <div>
                <p id="queueString" class="queueString">!queue</p>
            </div>
            <button type="button" onclick="copyButton()">Copy to Clipboard</button>
            </div>
            <div class="flex-parent botsdiv">
            <a class = "bots" id ="TCT" href="https://www.twitch.tv/travelerschosenteam"> Travelers Chosen Team </a>
            <a class = "bots" id ="LB9" href="https://www.twitch.tv/luckbot9"> Luckbot9 </a>
            <a class = "bots" id ="GDB" href="https://www.twitch.tv/guardiandownbot"> Guardian Down Bot </a>
            </div>
            <div id="embed1" class="embed"></div>
            <div id="embed2" class="embed"></div>
            <div id="embed3" class="embed"></div>
            </div>
    );
};


{
    const urlParams = new URLSearchParams(window.location.search);
    const runtest = urlParams.get('embed1');

    //var h = window.innerHeight/2.7;
    var h = window.innerHeight*.27
    var w = window.innerWidth
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    console.log(h)
    
    /*var options1 = {
        width: "33%",
        height: h,
        channel: "TravelersChosenTeam",
        allowfullscreen: false,
        layout: 'video',
        parent: ["travelerschosen.github.io", "github.io", "www.travelerschosen.github.io"]
        };
        console.log(options1.height)
        var player = new Twitch.Embed("embed1", options1);

        var options2 = {
        width: "33%",
        height: h,
        channel: "LuckBot9",
        allowfullscreen: false,
        layout: 'video',
        parent: ["travelerschosen.github.io", "github.io", "www.travelerschosen.github.io"]
        };
        var player = new Twitch.Embed("embed2", options2);

        var options3 = {
        width: "33%",
        height: h,
        channel: "GuardianDownBot",
        allowfullscreen: false,
        layout: 'video',
        parent: ["travelerschosen.github.io", "github.io", "www.travelerschosen.github.io"]
        };
        var player = new Twitch.Embed("embed3", options3);*/
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

    function isDigit(str) 
        {
            return /^\d+$/.test(str);
        }

        function bungienamevalidator() 
        {
            bungiename_found = true;
            var testbungiename = document.getElementById('bungiename').value;
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

            if (!bungiename_found)
            {
                return;
            }
            console.log("Bungie Name Found")
            bungiename_found = true;
            bungiename = testbungiename;
            updateQueueString();
            return;
        }
        function hideButton_encounters()
        {
            encounter="";
            document.getElementById("encounter0button").style.display = "none";
            document.getElementById("encounter1button").style.display = "none";
            document.getElementById("encounter1hbutton").style.display = "none";
            document.getElementById("encounter2button").style.display = "none";
            document.getElementById("encounter2hbutton").style.display = "none";
            document.getElementById("encounter3button").style.display = "none";
            document.getElementById("encounter3hbutton").style.display = "none";
            document.getElementById("encounter4button").style.display = "none";
            document.getElementById("encounter4hbutton").style.display = "none";
            document.getElementById("encounter5button").style.display = "none";
            document.getElementById("otherEncounter1button").style.display = "none";
            document.getElementById("otherEncounter2button").style.display = "none";
            document.getElementById("otherEncounter3button").style.display = "none";
            document.getElementById("otherEncounter4button").style.display = "none";
            document.getElementById("otherEncounter5button").style.display = "none";
            document.getElementById("otherEncounter6button").style.display = "none";
            document.getElementById("otherEncounter7button").style.display = "none";
            document.getElementById("otherEncounter8button").style.display = "none";
            
        }

        function showButton(buttonId, buttonLabel)
        {
            var htmlbutton = document.getElementById(buttonId);
            htmlbutton.style.display = "block";
            htmlbutton.innerHTML = buttonLabel;
            return;
        }

        function selectRaids()
        {
            activitytype = 1;
            document.getElementById("raidsContainer").style.display = "block";
            document.getElementById("dungeonsContainer").style.display = "none";
            document.getElementById("otherActivityContainer").style.display = "none";
            hideButton_encounters();
            updateQueueString();
            return;
        }

        function selectDungeons()
        {
            activitytype = 2;
            document.getElementById("dungeonsContainer").style.display = "block";
            document.getElementById("raidsContainer").style.display = "none";
            document.getElementById("otherActivityContainer").style.display = "none";
            hideButton_encounters();
            updateQueueString();
            return;
        }

        function selectOtherActivity()
        {
            activitytype = 3;
            document.getElementById("otherActivityContainer").style.display = "block";
            document.getElementById("dungeonsContainer").style.display = "none";
            document.getElementById("raidsContainer").style.display = "none";
            hideButton_encounters();
            updateQueueString();
            return;
        }

        function selectActivity(activityname)
        {
            encounter_found = false;
            hideButton_encounters();
            if (activityname=="Salvation's Edge")
            {
                enableDifficultybuttons()
                activity="se";
                showButton("encounter1button", "1: Substratum");
                showButton("encounter2button", "2: Dissipation");
                showButton("encounter2hbutton", "Chest 1");
                showButton("encounter3button", "3: Repository");
                showButton("encounter4button", "4: Verity");
                showButton("encounter4hbutton", "Chest 2");
                showButton("encounter5button", "5: The Witness");
            }
            if (activityname=="Crota's End")
            {
                enableDifficultybuttons()
                activity="ce";
                showButton("encounter1button", "1: Abyss");
                showButton("encounter2button", "2: Bridge");
                showButton("encounter2hbutton", "Chest 2");
                showButton("encounter3button", "3: Ir Yut / Deathsinger");
                showButton("encounter4button", "4: Crota");
            }
            if (activityname=="Root of Nightmares")
            {
                enableDifficultybuttons()
                activity="ron";
                showButton("encounter1button", "1: Cataclysm");
                showButton("encounter1hbutton", "Chest 1");
                showButton("encounter2button", "2: Scission");
                showButton("encounter2hbutton", "Chest 2");
                showButton("encounter3button", "3: Macrocosm / Explicator");
                showButton("encounter4button", "4: Nezarec");
            }
            if (activityname=="King's Fall")
            {
                enableDifficultybuttons()
                activity="kf";
                showButton("encounter1button", "1: Totems");
                showButton("encounter2button", "2: Warpriest");
                showButton("encounter2hbutton", "Maze / Chest 3");
                showButton("encounter3button", "3: Golgoroth");
                showButton("encounter3hbutton", "Wall / Chest 4");
                showButton("encounter4button", "4: Daughters / Deathsingers");
                showButton("encounter5button", "5: Oryx");
            }
            if (activityname=="Vow of the Disciple")
            {
                enableDifficultybuttons()
                activity="votd";
                showButton("encounter0button", "Chest 1");
                showButton("encounter1button", "1: Acquisition");
                showButton("encounter2button", "2: Caretaker");
                showButton("encounter2hbutton", "Chest2");
                showButton("encounter3button", "3: Exhibition / The Upended");
                showButton("encounter4button", "4: Rhulk");
            }
            if (activityname=="Vault of Glass")
            {
                enableDifficultybuttons()
                activity="vog";
                showButton("encounter1button", "1: Confluxes / Chest 1 & 2");
                showButton("encounter2button", "2: Oracles");
                showButton("encounter3button", "3: Templar");
                showButton("encounter3hbutton", "Post-Templar");
                showButton("encounter4button", "4: Gatekeeper / Chest 4");
                showButton("encounter5button", "5: Atheon");
            }
            if (activityname=="Deep Stone Crypt")
            {
                disableDifficultybuttons()
                activity="dsc";
                showButton("encounter1button", "1: Security");
                showButton("encounter2button", "2: Atraks-1");
                showButton("encounter2hbutton", "Chest 2");
                showButton("encounter3button", "3: Descent");
                showButton("encounter4button", "4: Taniks");
            }
            if (activityname=="Garden of Salvation")
            {
                disableDifficultybuttons()
                activity="gos";
                showButton("encounter1button", "1: Embrace");
                showButton("encounter1hbutton", "Chest 1");
                showButton("encounter2button", "2: Undergrowth");
                showButton("encounter3button", "3: Consecrated Mind");
                showButton("encounter3hbutton", "Chest 2");
                showButton("encounter4button", "4: Sanctified Mind");
            }
            if (activityname=="Last Wish")
            {
                disableDifficultybuttons()
                activity="lw";
                showButton("encounter1button", "1: Kali");
                showButton("encounter2button", "2: Shuro-Chi / Chest 1");
                showButton("encounter3button", "3: Morgeth / Chest 2");
                showButton("encounter3hbutton", "Chest 2");
                showButton("encounter4button", "4: Vault");
                showButton("encounter5button", "5: Riven");
            }
            if (activityname=="Warlord's Ruin")
            {
                enableDifficultybuttons()
                activity="wr";
                showButton("encounter1button", "1: Rathil / First Boss");
                showButton("encounter2button", "2: Tempest / Second Boss");
                showButton("encounter2hbutton", "Chest");
                showButton("encounter3button", "3: Hefnd / Final Boss");
            }
            if (activityname=="Ghosts of the Deep")
            {
                enableDifficultybuttons()
                activity="gotd";
                showButton("encounter1button", "1: Ritual");
                showButton("encounter1hbutton", "Chest 1");
                showButton("encounter2button", "2: Ecthar / First Boss");
                showButton("encounter3button", "3: Simmumah / Final Boss / Chest 2");
            }
            if (activityname=="Spire of the Watcher")
            {
                enableDifficultybuttons()
                activity="sotw";
                showButton("encounter0button", "Chest 1");
                showButton("encounter1button", "1: Ascent");
                showButton("encounter2button", "2: Akelous / First Boss");
                showButton("encounter2hbutton", "Chest 2");
                showButton("encounter3button", "3: Persys / Final Boss");
            }
            if (activityname=="Duality")
            {
                enableDifficultybuttons()
                activity="duality";
                showButton("encounter1button", "1: Gahlran / First Boss");
                showButton("encounter1hbutton", "Chest 1");
                showButton("encounter2button", "2: Vault");
                showButton("encounter2hbutton", "Chest 2");
                showButton("encounter3button", "3: Caiatl / Final Boss");
            }
            if (activityname=="Grasp of Avarice")
            {
                enableDifficultybuttons()
                activity="goa";
                showButton("encounter0button", "Chest 1");
                showButton("encounter1button", "1: Ogre / First Boss");
                showButton("encounter1hbutton", "Chest 2");
                showButton("encounter2button", "2: Shield");
                showButton("encounter3button", "3: Avarokk / Final Boss");
            }
            if (activityname=="Prophecy")
            {
                disableDifficultybuttons()
                activity="prophecy";
                showButton("encounter1button", "1: Phalanx / First Boss");
                showButton("encounter1hbutton", "Chest 1");
                showButton("encounter2button", "2: Cube");
                showButton("encounter2hbutton", "Chest 2");
                showButton("encounter3button", "3: Zulmak / Final Boss");
            }
            if (activityname=="Pit of Heresy")
            {
                disableDifficultybuttons()
                activity="poh";
                showButton("encounter1button", "1");
                showButton("encounter2button", "2");
                showButton("encounter3button", "3: Zulmak / Final Boss");
            }
            if (activityname=="Shattered Throne")
            {
                disableDifficultybuttons()
                activity="st";
                showButton("encounter1button", "1");
                showButton("encounter2button", "2");
                showButton("encounter3button", "3: Simmumah / Final Boss");
            }
            if (activityname=="Vesper's Host")
            {
                enableDifficultybuttons()
                activity="vh";
                showButton("encounter1button", "1");
                showButton("encounter2button", "Chest1");
                showButton("encounter3button", "2");
                showButton("encounter4button", "Chest2");
                showButton("encounter5button", "3: Final Boss");
            }
            if (activityname=="The Final Shape")
            {
                enableDifficultybuttons();
                activity="fs"
                showButton("otherEncounter1button", "1: Transmigration")
                showButton("otherEncounter2button", "2: Temptation")
                showButton("otherEncounter3button", "3: Exegesis")
                showButton("otherEncounter4button", "4: Requiem")
                showButton("otherEncounter5button", "5: Ascent")
                showButton("otherEncounter6button", "6: Dissent")
                showButton("otherEncounter7button", "7: Iconoclasm")
            }
            if (activityname=="Lightfall")
            {
                enableDifficultybuttons();
                activity="lf"
                showButton("otherEncounter1button", "1: First Contact")
                showButton("otherEncounter2button", "2: Under Siege")
                showButton("otherEncounter3button", "3: Downfall")
                showButton("otherEncounter4button", "4: Breakneck")
                showButton("otherEncounter5button", "5: On The Verge")
                showButton("otherEncounter6button", "6: No Time Left")
                showButton("otherEncounter7button", "7: Headlong")
                showButton("otherEncounter8button", "8: Desperate Measures")
            }
            if (activityname=="Witch Queen")
            {
                enableDifficultybuttons();
                activity="wq"
                showButton("otherEncounter1button", "1: The Arrival")
                showButton("otherEncounter2button", "2: The Investigation")
                showButton("otherEncounter3button", "3: The Ghosts")
                showButton("otherEncounter4button", "4: The Communion")
                showButton("otherEncounter5button", "5: The Mirror")
                showButton("otherEncounter6button", "6: The Cunning")
                showButton("otherEncounter7button", "7: The Last Chance")
                showButton("otherEncounter8button", "8: The Ritual")
            }
            if (activityname=="Shared Wisdom")
            {
                disableDifficultybuttons();
                activity="sw"
                encounter = 1
                //showButton("otherEncounter1button", "1: The Last City")
            }
            updateQueueString();
            return;
        }

        function selectEncounter(encounterbutton)
        {
            var encountername = document.getElementById(encounterbutton).innerHTML;
            if (isDigit(encountername.charAt(0)))
            {
                encounter = encountername.charAt(0);
            }
            else
            {
                encounter = encountername.replace(/\s/g, '');
            }
            encounter_found = true;
            updateQueueString();
            return;
        }

        function disableDifficultybuttons()
        {
            difficulty=false;
            difficulty_found=true;
            document.getElementById("difficultyNormalbutton").disabled = true;
            document.getElementById("difficultyMasterbutton").disabled = true;
            document.getElementById("diffButtons").style.visibility = "hidden";
            updateQueueString()
        }

        function enableDifficultybuttons()
        {
            difficulty_found=false;
            document.getElementById("difficultyNormalbutton").disabled = false;
            document.getElementById("difficultyMasterbutton").disabled = false;
            document.getElementById("diffButtons").style.visibility = "visible";
            
        }

        function selectDifficulty(difficultyname)
        {
            if (difficultyname)
            {
                difficulty = true;
            }
            else
            {
                difficulty = false;
            }
            difficulty_found = true;
            updateQueueString();
            return;
        }

        function updateQueueString()
        {
            queueString = "!queue "+activity+" "+encounter+" ";
            if (!difficulty)
            {
                queueString += "n ";
            }
            else
            {
                queueString += "m "
            }
            queueString += bungiename;
            document.getElementById("queueString").innerHTML = queueString;
            return;
        }

        function copyButton()
        {
            navigator.clipboard.writeText(queueString)
            return;
        }

export default QueueHelper;