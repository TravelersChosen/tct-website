// pages/about.js


/* 
TODO: Add cross save checker?


*/ 
import React from "react";
import '../../css/FAQ.css'

const FAQ = () => {
    return (
    <div className= "FAQ" style={{backgroundColor: '#282c34'}}>
        <h1>
          Frequently Asked Questions
        </h1>
      <iframe className = "FAQ-Video" width="560" height="315" src="https://www.youtube.com/embed/lkN3h__csgw?si=IUpli50wUAcsrL6p" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      <p>Please Watch This Video</p>
      <p>
        <h1>Basic</h1>
          How to Join Queue For A Checkpoint
          To Queue for a Checkpoint, type '!Queue activity encounter Normal/Master Bungie Name' <br></br><br></br>

          For Example To Queue For Shuro-Chi<br></br>
          !Queue LW Shuro-Chi Normal Bungiename#1234<br></br><br></br>

          Do note that the activity, encounter, and difficulty must each be only one word.<br></br><br></br>

          If you have problems, you can also utilize the Prompt Form Helper Website<br></br>
          http://travelerschosen.org/#/queuehelper<br></br><br></br>


          </p>

          <p>
          <h1>Complex</h1>
          I Am Not Receiving Invites From Bot<br></br>
          1.Ensure that your fireteam invites are Open/Public<br></br>
          2.Ensure that You have Cross-Save Enabled<br></br>
          -- Activate Cross-Save at https://www.bungie.net/7/en/CrossSave<br></br>
          -- Recommendation if you are only one platform, can create a free account from EpicGames (https://store.epicgames.com/) or from Steam (https://store.steampowered.com/) and you can link the accounts<br></br>
          Make Sure you Authenticate all accounts, and complete all 3 steps<br></br><br></br>

          If You Are Still Not Recieving Invites<br></br>
          Ensure that your NAT type is Open. If it is not here is information on how to set it to open.<br></br>
          https://help.bungie.net/hc/en-us/articles/360049496751-Advanced-Troubleshooting-UPnP-Port-Forwarding-and-NAT-Types<br></br>
          You will need to restart router after opening NAT.<br></br><br></br>

          <h1>Other Known Fixes</h1>
          Ensure your date and time is syncd properly.<br></br>
      </p>
    </div>
    );
};

export default FAQ;