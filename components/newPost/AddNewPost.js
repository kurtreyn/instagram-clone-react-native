import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <PostForm/> */}
    </View>
  );
};

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png',
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
  </View>
);

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 27.5,
  },
});
