import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});