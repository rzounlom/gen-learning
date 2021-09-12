import React, { FC } from 'react';
import { ScrollView, Text } from 'native-base';

import { useNavigationState } from '@react-navigation/native';

const SingleGameScreen: FC = () => {
  const navState = useNavigationState((state) => state.routes[1]);

  // console.log('navState: ', navState);
  return (
    <ScrollView>
      <Text>Single Game Screen</Text>
    </ScrollView>
  );
};

export default SingleGameScreen;
