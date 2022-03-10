import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import NewPostScreen from './NewPostScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import CameraComponent from '../components/features/CameraComponent';
import CameraGallery from '../components/features/CameraGallery';
import { bottomTabIcons } from '../data/bottomTabIcons';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const SignedInStack = ({ currentUser, photoURL, setPhotoURL }) => {
  // console.log(currentUser.email);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="CameraComponent" component={CameraComponent} />
        <Stack.Screen name="CameraGallery" component={CameraGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({});
