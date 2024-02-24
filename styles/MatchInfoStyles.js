import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    matchesMap: {
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
      marginTop: 10
    },
    cardContainer: {
      top: 14,
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
      marginRight: 230,
      bottom: 11
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
      top: 5,
      backgroundColor: 'white',
      width: 360,
      height: 90,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 15,
      alignItems: 'center'
    },
    cardViewSlug: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    matchImageFlug: {
      width: 30,
      height: 30,
      borderRadius: 10,
      marginVertical: 10,
      top: 20
    },
    matchName: {
      fontSize: 14,
      color: 'black',
      bottom: 18,
  
    },
    matchCategoryName: {
      fontSize: 10,
      color: 'black',
      bottom: 34,
      left: 138
    },
    cardViewFlug: {
      flexDirection: 'row',
      alignItems: 'center',
      left: 40,
      bottom: 20
      
    },
    timeMatch: {
      color: 'gray',
      fontSize: 16,
      marginLeft: 150,
      bottom: 34
  
    },
    root: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
   cardScore:{
    top: -4,
    backgroundColor: 'white',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: 360,
    height: 70,
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
   awayScoreText: {
    color: 'black',
    fontSize: 30,
    right: 40
  },
  homeScoreText: {
    color: 'black',
    fontSize: 30,
    left: 40
  },
  
  });