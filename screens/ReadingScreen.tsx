import { ScrollView, Text } from 'react-native';

import GameList from '../components/GameList';
import { GameScreens } from '../types';
import React from 'react';

const ReadingScreen = () => {
  return (
    <ScrollView>
      <GameList screen={GameScreens.ReadingScreen} />
    </ScrollView>
  );
};

export default ReadingScreen;
