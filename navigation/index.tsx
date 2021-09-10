import * as React from 'react';

import { ColorSchemeName, Pressable } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';

import Colors from '../constants/Colors';
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import GameScreen from '../screens/GameScreen';
import { GameScreens } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MathScreen from '../screens/MathScreen';
import ModalScreen from '../screens/ModalScreen';
import MoneyScreen from '../screens/MoneyScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ReadingScreen from '../screens/ReadingScreen';
import ScienceScreen from '../screens/ScienceScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useColorScheme from '../hooks/useColorScheme';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen name={GameScreens.GameScreen} component={GameScreen} />
      <Stack.Screen name={GameScreens.MathScreen} component={MathScreen} />
      <Stack.Screen
        name={GameScreens.ReadingScreen}
        component={ReadingScreen}
      />
      <Stack.Screen
        name={GameScreens.ScienceScreen}
        component={ScienceScreen}
      />
      <Stack.Screen name={GameScreens.MoneyScreen} component={MoneyScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: '#2f95dc',
        },
      }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={GameScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Games',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='gamepad' color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='TabThree'
        component={TabTwoScreen}
        options={{
          title: 'Donate',
          tabBarIcon: ({ color }) => <TabBarIcon name='heart' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
