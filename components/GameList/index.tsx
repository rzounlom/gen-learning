import { Game, games } from '../../data/games';

import GameCard from '../GameCard';
import { GameListContainer } from './styles';
import React from 'react';

const GameList = () => {
  const renderGames = () =>
    games.map((game: any) => {
      const { id, img, title }: Game = game;
      return <GameCard key={id} id={id} title={title} img={img} />;
    });
  return <GameListContainer>{renderGames()}</GameListContainer>;
};

export default GameList;
