import React, { FC } from 'react';

import GameList from '../components/GameList';
import { GameScreens } from '../types';
import { ScrollView } from 'react-native';

interface Props {
  navigation: any;
}

const MathScreen: FC<Props> = ({ navigation }) => {
  return (
    <ScrollView>
      <GameList screen={GameScreens.MathScreen} />
    </ScrollView>
  );
};

export default MathScreen;
