import { Game, gamesScreens } from '../../data/games';
import React, { FC, useEffect, useState } from 'react';

import GameCard from '../GameCard';
import { GameListContainer } from './styles';
import { GameScreens } from '../../types';

interface Props {
  screen?: GameScreens;
}

const GameList: FC<Props> = ({ screen }) => {
  const [screenList, setScreenList] = useState(gamesScreens);

  useEffect(() => {
    const renderScreen = () => {
      switch (screen) {
        case GameScreens.MathScreen:
          setScreenList(gamesScreens);
          break;
        case GameScreens.ReadingScreen:
          setScreenList(gamesScreens);
          break;
        case GameScreens.ScienceScreen:
          setScreenList(gamesScreens);
          break;
        case GameScreens.MoneyScreen:
          setScreenList(gamesScreens);
          break;
        default:
          setScreenList(gamesScreens);
      }
    };

    renderScreen();
  }, []);

  const renderGames = () =>
    screenList?.map((game: any) => {
      const { id, img, title, navLink }: Game = game;
      return (
        <GameCard key={id} id={id} title={title} img={img} navLink={navLink} />
      );
    });
  return <GameListContainer>{renderGames()}</GameListContainer>;
};

export default GameList;
