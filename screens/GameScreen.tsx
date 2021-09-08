import React, { FC } from 'react';

import GameList from '../components/GameList';
import { ScrollView } from 'react-native';

const GameScreen: FC = () => {
  return (
    <ScrollView>
      <GameList />
    </ScrollView>
  );
};

export default GameScreen;
