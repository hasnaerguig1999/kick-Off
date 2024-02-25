import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers } from '../redux/Player/playerActions';


export default function PlayersScreen({ navigation }) {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players.players);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  const filteredPlayers = players.filter(player => 
    (`${player.firstname} ${player.lastname}`.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Search players..."
      />
      <ScrollView>
        {filteredPlayers.map(player => (
          <TouchableOpacity key={player.id} style={styles.playerContainer} onPress={() => navigation.navigate('PlayersDetail', { player: player })}>
            <Image style={styles.playerImage} source={{ uri: player.image_path }} />
            <Text style={styles.playerName}>{player.firstname} {player.lastname}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  searchInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#FFF',
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});