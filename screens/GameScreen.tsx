import React, { FC } from 'react';

import GameList from '../components/GameList';
import { GameScreens } from '../types';
import { ScrollView } from 'react-native';

const GameScreen: FC = () => {
  return (
    <ScrollView>
      <GameList screen={GameScreens.GameScreen} />
    </ScrollView>
  );
};

export default GameScreen;
