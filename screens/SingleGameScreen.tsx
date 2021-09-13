import React, { FC, useEffect } from 'react';

import { ScrollView } from 'native-base';
import { renderSingleGame } from '../utils/renderSingleGame';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const SingleGameScreen: FC = () => {
  const navigation = useNavigation();

  const selectedGame = useSelector((state: any) => state.games?.selectedCard);

  useEffect(() => {
    if (!selectedGame.component) {
      navigation.goBack();
    }
  }, [selectedGame]);
  return <ScrollView>{renderSingleGame(selectedGame.component)}</ScrollView>;
};

export default SingleGameScreen;
