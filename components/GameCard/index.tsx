import { GameCardContainer, styles } from './styles';
import { ImageBackground, Text } from 'react-native';

import { Game } from '../../data/games';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GameCard = ({ id, title, img, navLink }: Game) => {
  const navigation = useNavigation();

  return (
    <GameCardContainer onPress={() => navigation.navigate(navLink)}>
      <ImageBackground
        source={img ? img : ''}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <Text style={styles.cardTitle}>{title}</Text>
      </ImageBackground>
    </GameCardContainer>
  );
};

export default GameCard;
