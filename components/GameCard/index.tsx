import {
  Game,
  gamesScreens,
  mathGames,
  moneyGames,
  readingGames,
  scienceGames,
} from '../../data/games';
import { GameCardContainer, styles } from './styles';
import { ImageBackground, Text } from 'react-native';
import React, { useEffect } from 'react';

import { GameScreens } from '../../types';
import { useNavigation } from '@react-navigation/native';

const GameCard = ({ id, title, img, navLink }: Game) => {
  const navigation = useNavigation();
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

  useEffect(() => {
    renderList();
  }, [renderList, img]);

  return (
    <GameCardContainer
      onPress={() => navigation.navigate(navLink, { list: renderList() })}
    >
      <ImageBackground
        source={img}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.cardTitle}>{title}</Text>
      </ImageBackground>
    </GameCardContainer>
  );
};

export default GameCard;
