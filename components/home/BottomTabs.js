import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { bottomTabIcons } from '../../data/bottomTabIcons';

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const icon = ({ icon }) => (
    <TouchableOpacity>
      <Image />
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
