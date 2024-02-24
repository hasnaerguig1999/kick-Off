import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/FavorisStyles';

export default function FavorisScreen() {
  const favorites = useSelector((state) => state.matches.favorites) || [];

  const renderItem = ({ item: match }) => (
    <View key={match.id} style={styles.card}>
      <View style={styles.team}>
        <Image style={styles.image} source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.homeTeam.id + '/image' }} />
        <Text style={styles.name}>{match.homeTeam.name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="electric-bolt" size={24} color="green" />
      </View>
      <View style={styles.team}>
        <Image style={styles.image} source={{ uri: 'https://api.sofascore.app/api/v1/team/' + match.awayTeam.id + '/image' }} />
        <Text style={styles.name}>{match.awayTeam.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
