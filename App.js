import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
