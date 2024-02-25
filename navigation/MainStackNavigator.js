import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles'
import PlayersDetail from '../screens/PlayersDetailScreen';
import MatchInfoScreen from '../screens/MatchInfoScreen';
import FavorisScreen from '../screens/FavorisScreen';
import LeagueInfoScreen from '../screens/LeagueInfoScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {

  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    
       <Stack.Screen name="PlayersDetail" component={PlayersDetail}
        options={{
          headerStyle: {
            backgroundColor: '#6624A0',
          },
          headerTintColor: '#fff',
        }}
      />
       <Stack.Screen name="MatchInfoScreen" component={MatchInfoScreen}
        options={{
          headerStyle: {
            backgroundColor: '#6624A0',
          },
          headerTintColor: '#fff',
        }}
      />  
      <Stack.Screen name="FavorisScreen" component={FavorisScreen}
      options={{
        headerStyle: {
          backgroundColor: '#6624A0',
        },
        headerTintColor: '#fff',
      }}
    />
     <Stack.Screen name="LeagueInfo" component={LeagueInfoScreen}
      options={{
        headerStyle: {
          backgroundColor: '#6624A0',
        },
        headerTintColor: '#fff',
      }}
    />


    </Stack.Navigator>
  );
}