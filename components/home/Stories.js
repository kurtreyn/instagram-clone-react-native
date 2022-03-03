import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { USERS } from '../../data/users';

export default function Stories() {
  return (
    <View style={styles.storyContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index}>
            <Image source={story.image} style={styles.story} />
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
    marginBottom: 13,
    alignItems: 'center',
    color: 'white',
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
    color: 'white',
    alignItems: 'center',
  },
});
