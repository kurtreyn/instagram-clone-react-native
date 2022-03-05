import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Divider } from 'react-native-elements';

import likeIcon from '../../assets/icons8-heart-50.png';
import likedIcon from '../../assets/icons8-heart-filled-60.png';
import commentIcon from '../../assets/icons8-comment-50.png';
import shareIcon from '../../assets/icons8-email-send-60.png';
import saveIcon from '../../assets/icons8-bookmark-50.png';

const likedIconUri = Image.resolveAssetSource(likedIcon).uri;
const likeIconUri = Image.resolveAssetSource(likeIcon).uri;
const commentIconUri = Image.resolveAssetSource(commentIcon).uri;
const shareIconUri = Image.resolveAssetSource(shareIcon).uri;
const saveIconUri = Image.resolveAssetSource(saveIcon).uri;

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: likeIconUri,
    likedImageUrl: likedIconUri,
  },
  {
    name: 'Comment',
    imageUrl: commentIconUri,
  },
  {
    name: 'Share',
    imageUrl: shareIconUri,
  },
  {
    name: 'Save',
    imageUrl: saveIconUri,
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={styles.postFooterContainer}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
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
    <View style={styles.postImageContainer} key={post.id}>
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
    </View>
  );
};

const PostFooter = () => {
  return (
    <View style={styles.postFooter}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[0].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[1].imageUrl}
        />
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[2].imageUrl}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Icon
          imgStyle={styles.footerIcon}
          imageUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imageUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imageUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={styles.likesContainer}>
    <Text style={styles.likesStyle}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={styles.camptionText}>
      <Text style={{ fontWeight: '600' }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: 'grey' }}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
          <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

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
  footerIcon: {
    width: 33,
    height: 33,
  },
  postFooterContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  postFooter: {
    flexDirection: 'row',
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
  likesStyle: {
    color: 'white',
    fontWeight: '600',
  },
  likesContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  camptionText: {
    color: 'white',
  },
});
