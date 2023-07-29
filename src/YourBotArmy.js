import React from 'react';

const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div className="container">
      <div className="grid-container">
        {enlistedBots.map(bot => (
          <div key={bot.id} className="bot-card">
            <h2>{bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name} />
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
            <span>Likes: {bot.likes}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
