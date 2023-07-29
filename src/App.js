import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './index.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots(prevEnlistedBots => [...prevEnlistedBots, bot]);
    }
  };


  const releaseBot = (bot) => {
    setEnlistedBots(prevEnlistedBots => prevEnlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots ${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setEnlistedBots(prevEnlistedBots => prevEnlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id));
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  const likeBot = (bot) => {
    setBots(prevBots => prevBots.map(prevBot => (prevBot.id === bot.id ? { ...prevBot, liked: !prevBot.liked, likes: prevBot.liked ? prevBot.likes - 1 : prevBot.likes + 1 } : prevBot)));
  };

  return (
    <div>
      <h1>Bot Collection</h1>

      <BotCollection bots={bots} enlistedBots={enlistedBots} enlistBot={enlistBot} likeBot={likeBot} />
      <h2>Your Bot Army</h2>
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
