import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { USERS } from '../../data/users';

export default function Stories() {
  return (
    <View style={styles.storyContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={styles.storyImage}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={styles.textStyle}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLocaleLowerCase() + '...'
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: 'row',
    marginBottom: 13,
    alignItems: 'center',
    color: 'white',
  },
  storyImage: {
    justifyContent: 'space-around',
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#FF8501',
  },
  textStyle: {
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
