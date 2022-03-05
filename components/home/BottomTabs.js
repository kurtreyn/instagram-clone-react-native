import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { bottomTabIcons } from '../../data/bottomTabIcons';

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
