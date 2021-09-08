import { GameCardContainer, styles } from './styles';
import { ImageBackground, Text } from 'react-native';

import { Game } from '../../data/games';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GameCard = ({ id, title, navLink, img }: Game) => {
  const navigation = useNavigation();
  return (
    <GameCardContainer onPress={() => navigation.navigate('MathScreen')}>
      <ImageBackground
        source={img ? img : ''}
        resizeMode='cover'
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Text style={styles.cardTitle}>{title}</Text>
      </ImageBackground>
    </GameCardContainer>
  );
};

export default GameCard;
