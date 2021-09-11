import React, { FC } from 'react';

import GameList from '../components/GameList';
import { ScrollView } from 'react-native';

interface Props {
  navigation: any;
}

const MathScreen: FC<Props> = ({ navigation }) => {
  return (
    <ScrollView>
      <GameList />
    </ScrollView>
  );
};

export default MathScreen;
