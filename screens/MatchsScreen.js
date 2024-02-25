import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatches, fetchleagues } from '../redux/Match/matchActions'; 
import { View, Text, TouchableOpacity, Button, Pressable,Image,StyleSheet } from 'react-native';
import MatchCard from '../components/MatchCard';
import { FlatList } from 'react-native';

export default MatchesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matches.matches);
  const leagues = useSelector(state => state.matches.leagues);
  const [selectedLeagueId, setSelectedLeagueId] = useState('');
  const [filteredMatches, setFilteredMatches] = useState(null);

  useEffect(() => {
    dispatch(fetchMatches());
    dispatch(fetchleagues());
  }, []);

  const selectLeague = (leagueId) => {
    setSelectedLeagueId(leagueId);
    
  };

  useEffect(() => {
    if(matches){
      if (selectedLeagueId) {
        setFilteredMatches(matches.filter(match => match.tournament.uniqueTournament.id === selectedLeagueId));
        
      } else {
        setFilteredMatches(matches);
      }
    }
  }, [selectedLeagueId, matches]);

  return (
    <View style={styles.container}>
      <View style={styles.leagueContainer}>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedLeagueId('')}>
  <Text style={styles.buttonText}>All</Text>
</TouchableOpacity>   
     <FlatList
          data={leagues}
          keyExtractor={league => league.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <Pressable onPress={() => {
              selectLeague(item.id);
            
            }}>
              <View >

                <Image style={{width:50,height:50,margin:5,borderRadius:50,bottom:12,shadowColor: '#000',}}
                  source={{ uri: 'https://api.sofascore.app/api/v1/unique-tournament/'+ item.id +'/image' }} /> 
           
            </View>
            </Pressable>
          )}
        />
      </View>
      {(filteredMatches && filteredMatches.length > 0) ? ( 
        <FlatList
          data={filteredMatches} 
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leagueContainer: {
    height: 100, 
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

