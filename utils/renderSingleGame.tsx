import { ScrollView, Text } from 'react-native';

import Counting from '../components/MathGames/Counting';
import React from 'react';
import { SingleGames } from '../types';

export const renderSingleGame = (game: SingleGames) => {
  switch (game) {
    case SingleGames.counting:
      return <Counting />;
    default:
      <ScrollView>
        <Text>Single Game Screen</Text>
      </ScrollView>;
  }
};
