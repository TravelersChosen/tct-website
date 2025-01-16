// pages/annual.js

import React from "react";
import "../../queuehelper.css"
import { useState } from "react";

{
    const urlParams = new URLSearchParams(window.location.search);
    const runtest = urlParams.get('embed1');

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
            <div class="flex-parent selectorButtons">
            <button id="raidsSelect" class="activitytype" type="button" onClick={selectRaids}>Raids</button>
            <button id="dungeonsSelect" class="activitytype" type="button" onClick={selectDungeons}>Dungeons</button>
            <button id="storySelect" class="activitytype" type="button" onClick={selectOtherActivity}>Stories/Other</button>
            </div>
            <div class="mainButtons">
                <div class="actContainer">
                    <div id="raidsContainer" class="column33" style={{display: 'block'}}>
                        <div id="raidsButtonContainer" class="column50">
                            <p class="typeText">Raid:</p>
                            <button class="activity" type="button" onClick="selectActivity('Salvation\'s Edge')">Salvation's Edge</button>
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
        </div>
            );
};

function selectRaids(){
    //alert('You Clicked me!')
    activitytype = 1;
    document.getElementById("raidsContainer").style.display = "block";
    document.getElementById("dungeonsContainer").style.display = "none";
    document.getElementById("otherActivityContainer").style.display = "none";
    //hideButton_encounters();
    //updateQueueString();
    return;
}
function selectDungeons(){
    //alert('You Clicked me!')
    activitytype = 2;
    document.getElementById("dungeonsContainer").style.display = "block";
    document.getElementById("raidsContainer").style.display = "none";
    document.getElementById("otherActivityContainer").style.display = "none";
    //hideButton_encounters();
    //updateQueueString();
    return;
}
function selectOtherActivity(){
    //alert('You Clicked me!')
    activitytype = 3;
    document.getElementById("otherActivityContainer").style.display = "block";
    document.getElementById("dungeonsContainer").style.display = "none";
    document.getElementById("raidsContainer").style.display = "none";
    //hideButton_encounters();
    //updateQueueString();
    return;
}

export default QueueHelper;