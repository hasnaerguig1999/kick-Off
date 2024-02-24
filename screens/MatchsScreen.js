import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatches } from '../redux/Match/matchActions'; 
import { View, Text, StyleSheet } from 'react-native';
import MatchCard from '../components/MatchCard';
import LeagueComponent from '../components/LeagueComponent';
import { FlatList } from 'react-native';
import styles from '../styles/MatchesStyles';

export default MatchesScreen = () => {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matches.matches);
  console.log('may', matches.events)
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leagueContainer}>
        <LeagueComponent />
      </View>
      {(matches.events && matches.events.length > 0) ? (
        <FlatList
          data={matches.events}
          keyExtractor={match => match.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.matchCard}>
              <MatchCard match={item} />
            </View>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

