import React from 'react'
import { View ,Text, StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles/PlayersDetailStyles';

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
