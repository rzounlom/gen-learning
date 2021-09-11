import { Game, gamesScreens } from '../../data/games';
import React, { FC, useEffect, useState } from 'react';

import GameCard from '../GameCard';
import { GameListContainer } from './styles';
import { useNavigationState } from '@react-navigation/native';

const GameList: FC = () => {
  const routeParams = useNavigationState(
    (state: any) => state.routes[1].params
  );

  const [screenList, setScreenList] = useState(gamesScreens);

  useEffect(() => {
    if (routeParams) {
      setScreenList(routeParams.list);
    }
  }, [routeParams]);

  const renderGames = () => {
    return screenList?.map((game: any) => {
      const { id, img, title, navLink }: Game = game;
      return (
        <GameCard key={id} id={id} title={title} img={img} navLink={navLink} />
      );
    });
  };
  return <GameListContainer>{renderGames()}</GameListContainer>;
};

export default GameList;
