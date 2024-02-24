import { StyleSheet } from "react-native";
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