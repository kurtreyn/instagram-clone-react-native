import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Divider } from 'react-native-elements';

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      {/* <Divider width={1} orientation='vertical'/> */}
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={styles.postHeader}>
      <View style={styles.userContainer}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={styles.textStyle}>{post.user}</Text>
      </View>

      <Text style={styles.elipsesText}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={styles.postImageContainer}>
      <Image source={post.imageUrl} style={styles.postImage} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#FF8501',
  },
  textStyle: {
    color: 'white',
    marginLeft: 5,
    fontWeight: '500',
  },
  elipsesText: {
    color: 'white',
    fontWeight: '900',
  },
  postImageContainer: {
    width: '100%',
    height: 450,
  },
  postImage: {
    height: '100%',
    resizeMode: 'cover',
  },
});
