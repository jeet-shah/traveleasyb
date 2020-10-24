import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Catalogue from './screens/Catalogue'

export default function App() {
  return (
    <View style={styles.container}>
      <Catalogue />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
