import { ScrollView, Text } from 'react-native';

import GameList from '../components/GameList';
import React from 'react';

const ReadingScreen = () => {
  return (
    <ScrollView>
      <GameList />
    </ScrollView>
  );
};

export default ReadingScreen;
