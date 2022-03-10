import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase, db } from '../firebase';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import BottomTabs from '../components/home/BottomTabs';
import { POSTS } from '../data/posts';
import { bottomTabIcons } from '../data/bottomTabIcons';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [userPic, setUserPic] = useState(null);

  const userHandler = (post) => {
    post.map((post) => {
      setUserPic(post.profile_picture);
    });
  };

  // useEffect(() => {
  //   userHandler();
  // }, []);

  useEffect(() => {
    db.collectionGroup('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
    });
  }, []);

  console.log(`Active user is ${userPic}`);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} posts={posts} />
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
