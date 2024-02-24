import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { addMatchToFavorites } from '../redux/Match/matchActions';
import { useDispatch } from 'react-redux';

export default function MatchCard(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  /** @type {import("../types").Match} */
  const match = props.match;

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch(addMatchToFavorites(match));
      setIsFavorite(true);
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MatchInfoScreen', { match })}>
      <View key={match.id}>
        <View style={styles.cardContainer}>
          <View style={styles.cardView}>
            <Image style={styles.matchImage} source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.homeTeam.id + '/image' }} />
            <Text style={styles.firstClub}>{match.homeTeam.name}</Text>
          </View>
          <MaterialIcons name="electric-bolt" size={24} color="green" />
          <View style={styles.cardView}>
            <Image style={styles.matchImage} source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.awayTeam.id + '/image' }} />
            <Text style={styles.secondClub}>{match.awayTeam.name}</Text>

          </View>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.timeMatch}>{new Date(match.startTimestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
          <Text style={styles.dateMatch}>{new Date(match.startTimestamp * 1000).toLocaleDateString()}</Text>
          <TouchableOpacity onPress={handleAddToFavorites}>
            <AntDesign
              style={[styles.favouriteMatch, { fontSize: isFavorite ? 26 : 24, color: isFavorite ? '#B90E0A' : 'black' }]}
              name="heart"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  matchesMap: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  },
  timeMatch: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 14
  },
  favouriteMatch: {
    color: 'black',
    fontSize: 18,
    marginRight: 16,
  },
  cardContainer: {
    top: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 20,
    width: 360,
    height: 100,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    alignItems: 'center'
  },
  dateMatch: {
    color: 'gray',
    fontSize: 16,
  },
  matchImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  firstClub: {
    fontSize: 10,
    color: 'black',
  },
  secondClub: {
    fontSize: 10,
    color: 'black',
  },
  cardView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardFooter: {
    backgroundColor: 'white',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    top: 7,
    width: 360,
    height: 40,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    alignItems: 'center'
  },
})
