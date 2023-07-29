import React from 'react';

const BotCollection = ({ bots, enlistedBots, enlistBot, likeBot }) => {
  const isBotEnlisted = (bot) => enlistedBots.some(enlistedBot => enlistedBot.id === bot.id);

  return (
    <div className="container">
      <div className="grid-container">
        {bots.map(bot => (
          <div key={bot.id} className="bot-card">
            <h2>{bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.health}</h2>
            {isBotEnlisted(bot) ? (
              <button disabled>Enlisted</button>
            ) : (
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            )}
            <button onClick={() => likeBot(bot)} className={bot.liked ? 'liked' : ''}>
              {bot.liked ? 'Liked ❤️' : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
