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

const GameCard = ({ id, title, img, navLink, component }: Game) => {
  console.log('component in GameCard: ', component);

  //   console.log('card data', { id, title, navLink, component });
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

  const navigateToScreen = () => {
    console.log('card data', { id, title, navLink, component });
    navigation.navigate(navLink, {
      list: renderList(),
      component,
      id,
    });
  };

  useEffect(() => {
    renderList();
  }, [renderList, img]);

  return (
    <GameCardContainer onPress={navigateToScreen}>
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
