import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles'
import PlayersDetail from '../screens/PlayersDetailScreen';
import MatchInfoScreen from '../screens/MatchInfoScreen';
import FavorisScreen from '../screens/FavorisScreen';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function MainStackNavigator() {

  return (
   <View>
    <Text >Main</Text>
   </View>
  );
}