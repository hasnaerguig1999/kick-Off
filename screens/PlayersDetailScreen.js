import React from 'react'
import { View ,Text, StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function PlayersDetailScreen({route}) {
    const navigation = useNavigation();
    const { player } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.card}>
        <Image style={styles.playerDetailImage} source={{ uri: player.image_path }} />
        <Text style={styles.title}>{player.firstname} {player.lastname}</Text>
        <View style={styles.SousCard}>
            <Text style={styles.text}>{player.firstname} {player.lastname}</Text>
            <Text style={styles.text}>Date of Birth: {player.date_of_birth}</Text>
            <Text style={styles.text}>Gender: {player.gender}</Text>
            <Text style={styles.text}>weight: {player.weight}</Text>
            <Text style={styles.text}>height: {player.height}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  SousCard: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#666',
  },
  playerDetailImage:{
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 20,
  }
});
