import {
  Game,
  gamesScreens,
  mathGames,
  moneyGames,
  readingGames,
  scienceGames,
} from '../../data/games';
import React, { FC, useEffect, useState } from 'react';

import GameCard from '../GameCard';
import { GameListContainer } from './styles';
import { GameScreens } from '../../types';
import { TouchableOpacity } from 'react-native';
import { handleGameCard } from '../../state/gameSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useNavigationState } from '@react-navigation/native';

const GameList: FC = () => {
  const dispatch = useDispatch();
  const routeParams = useNavigationState(
    (state: any) => state.routes[1].params
  );
  const navigation = useNavigation();

  const [screenList, setScreenList] = useState(gamesScreens);

  useEffect(() => {
    if (routeParams) {
      setScreenList(routeParams.list);
    }
  }, [routeParams]);

  const renderGames = () => {
    return screenList?.map((game: Game) => {
      const { id, img, title, navLink, component }: Game = game;
      const renderList = () => {
        switch (navLink) {
          case GameScreens.MathScreen:
            return mathGames;
          case GameScreens.ReadingScreen:
            return readingGames;
          case GameScreens.ScienceScreen:
            return scienceGames;
          case GameScreens.MoneyScreen:
            return moneyGames;
          default:
            return gamesScreens;
        }
      };

      const navigateToScreen = () => {
        dispatch(handleGameCard({ id, img, title, navLink, component }));
        navigation.navigate(navLink, {
          list: renderList(),
        });
      };

      return (
        <TouchableOpacity
          key={id}
          style={{ width: '48%' }}
          onPress={navigateToScreen}
        >
          <GameCard
            key={id}
            id={id}
            title={title}
            img={img}
            navLink={navLink}
            component={component}
          />
        </TouchableOpacity>
      );
    });
  };
  return <GameListContainer>{renderGames()}</GameListContainer>;
};

export default GameList;
