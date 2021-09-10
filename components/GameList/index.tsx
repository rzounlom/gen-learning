import { Game, games } from '../../data/games';
import React, { FC } from 'react';

import GameCard from '../GameCard';
import { GameListContainer } from './styles';
import { GameScreens } from '../../types';

interface Props {
  screen?: GameScreens;
}

const GameList: FC<Props> = ({ screen }) => {
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
