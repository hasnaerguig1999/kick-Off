import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome6,AntDesign } from '@expo/vector-icons';
import Matchs from '../screens/MatchsScreen';
import PlayersScreen from '../screens/PlayersScreen';
import FavorisScreen from '../screens/FavorisScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Matchs"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6624A0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Matchs"
        component={Matchs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="football-outline" color={'black'} size={size} />
          ),
        }}
      />
      
       <Drawer.Screen
        name="Players"
        component={PlayersScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome6 name="person" size={24} color="black" />
          ),
        }}
      />
        <Drawer.Screen
        name="Favoris"
        component={FavorisScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="heart" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}