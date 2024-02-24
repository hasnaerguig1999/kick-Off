import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchleagues } from '../redux/Match/matchActions';
import { View, Image, ScrollView, StyleSheet } from 'react-native';

const LeagueComponent = () => {
  const dispatch = useDispatch();
  const leagues = useSelector(state => state.matches.leagues);

  useEffect(() => {
    dispatch(fetchleagues());
  }, []);

  return (
    <View style={styles.containere} >

      <ScrollView
        horizontal={true}
      >
        {leagues && leagues.map(league => (
          <View key={league.id} style={styles.matchCard}>
            <Image style={styles.matchImageAffichage}
              source={{ uri: 'https://api.sofascore.app/api/v1/unique-tournament/' + league.id + '/image' }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LeagueComponent;

const styles = StyleSheet.create({
  containere: {

    height: 80,
    backgroundColor: '#fff',
  },
  matchImageAffichage: {
    top: 8,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});