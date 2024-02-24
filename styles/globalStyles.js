import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    top: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 350,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  matchName: {
    marginLeft: 90,
    fontSize: 20,
    fontWeight: 'bold',
  },
  matchCode: {
    marginLeft: 90,
    fontSize: 16,
    color: 'gray',
  },
  matchImage: {
    width: 200, 
    height: 200,
    marginLeft: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  matchDate: {
    marginLeft: 90,
    fontSize: 14,
    color: 'gray',
  },
});