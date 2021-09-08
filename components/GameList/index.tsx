import { Game, games } from '../../data/games';

import GameCard from '../GameCard';
import { GameListContainer } from './styles';
import React from 'react';

const GameList = () => {
  const renderGames = () =>
    games.map((game: any) => {
      const { id, img, title, navLink }: Game = game;
      return (
        <GameCard key={id} id={id} title={title} img={img} navLink={navLink} />
      );
    });
  return <GameListContainer>{renderGames()}</GameListContainer>;
};

export default GameList;
