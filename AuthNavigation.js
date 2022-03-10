import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { firebase } from './firebase';
import { SignedInStack, SignedOutStack } from './screens/navigation';

// import blank_profile_pic from './assets/profile-avatar.png';
// const blankProfilePic = Image.resolveAssetSource(blank_profile_pic).uri;

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [photoURL, setPhotoURL] = useState(blankProfilePic);

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);

  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
