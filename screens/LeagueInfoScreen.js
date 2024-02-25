import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MatchCard from '../components/MatchCard';

export default function LeagueInfoScreen({ route }) {
  const { league, matches } = route.params;

  // Filtrer les matchs par ligue
  const filteredMatches = matches ? matches.filter(match => match.league.id === league.id) : [];

  return (
    <View>
      <Text>League Info</Text>
      {/* <Text>{league.name}</Text> */}
      <FlatList
        data={filteredMatches}
        keyExtractor={match => match.id.toString()}
        renderItem={({ item }) => (
          <MatchCard match={item} />
        )}
      />
    </View>
  );
}