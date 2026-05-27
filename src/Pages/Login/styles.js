import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#7ED957',
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 35,
  },

  input: {
    backgroundColor: '#ffffff',
    height: 55,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#14532d',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

});

export default styles;