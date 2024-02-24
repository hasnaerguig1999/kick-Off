import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers } from '../redux/Player/playerActions';
import { styles } from '../styles/PlayersStyles';

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