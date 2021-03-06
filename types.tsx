/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  MathScreen: undefined;
  ReadingScreen: undefined;
  ScienceScreen: undefined;
  MoneyScreen: undefined;
  GameScreen: undefined;
  SingleGameScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export enum GameScreens {
  GameScreen = 'GameScreen',
  MathScreen = 'MathScreen',
  ReadingScreen = 'ReadingScreen',
  ScienceScreen = 'ScienceScreen',
  MoneyScreen = 'MoneyScreen',
  SingleGameScreen = 'SingleGameScreen',
}

export enum SingleGames {
  counting = 'counting',
}
