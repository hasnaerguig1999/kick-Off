import { StyleSheet } from "react-native";

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