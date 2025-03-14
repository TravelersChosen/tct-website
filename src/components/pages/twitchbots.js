import React, { useEffect } from "react";
import "../../twitchbots.css"

function TwitchBots() {
  const twitchChannels = ["Luckbot9", "TravelersChosenTeam", "GuardianDownBot","D2Checkpoints","D2Chests","DestinyCheckpoints", "IceBreakerCatty"]; // Add more channels here

  return (
    <div>
      <h1 id= "head">Twitch Bots</h1>
      <MultiTwitchEmbed channels={twitchChannels} />
    </div>
  );
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

export default TwitchBots;
