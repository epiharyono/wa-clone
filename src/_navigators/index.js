import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import {HomeScreen, About} from '../screens'

const inistialRouteName  = "HomeScreen"

const AppNavigator = createStackNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'testing',
      }),
    },
    About: {
      screen: About,
    },
}, {
  inistialRouteName
});

export default AppNavigator;
