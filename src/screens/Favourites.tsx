import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.txt}> Favourites Screen </Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
