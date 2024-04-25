import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function WelcomeScreen() {

  const[fetchedMessage, setFetchedMessage] = useState('');

  useEffect(() => {
      axios.get('https://reactnative-expense-app-default-rtdb.firebaseio.com/message.json').then((response) => {
        console.log(response.data);
      });
  }, [ ]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});