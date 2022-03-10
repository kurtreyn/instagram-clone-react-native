import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import blank_profile_pic from '../assets/profile-avatar.png';
import icon_home_active from '../assets/icon-home-active.png';
import icon_home_inactive from '../assets/icon-home-inactive.png';
import icon_reels_active from '../assets/icon-reels-active.png';
import icon_reels_inactive from '../assets/icon-reels-inactive.png';
import icon_seach_active from '../assets/icon-search-active.png';
import icon_seach_inactive from '../assets/icon-search-inactive.png';
import icon_shop_active from '../assets/icon-shop-active.png';
import icon_shop_inactive from '../assets/icon-shop-inactive.png';

const blankProfilePic = Image.resolveAssetSource(blank_profile_pic).uri;
const iconHomeActive = Image.resolveAssetSource(icon_home_active).uri;
const iconHomeInactive = Image.resolveAssetSource(icon_home_inactive).uri;
const iconReelsActive = Image.resolveAssetSource(icon_reels_active).uri;
const iconReelsInactive = Image.resolveAssetSource(icon_reels_inactive).uri;
const iconSearchActive = Image.resolveAssetSource(icon_seach_active).uri;
const iconSearchInactive = Image.resolveAssetSource(icon_seach_inactive).uri;
const iconShopActive = Image.resolveAssetSource(icon_shop_active).uri;
const iconShopInactive = Image.resolveAssetSource(icon_shop_inactive).uri;

const bottomTabIcons = [
  {
    name: 'Home',
    active: iconHomeActive,
    inactive: iconHomeInactive,
  },
  {
    name: 'Search',
    active: iconSearchActive,
    inactive: iconSearchInactive,
  },
  {
    name: 'Reels',
    active: iconReelsActive,
    inactive: iconReelsInactive,
  },
  {
    name: 'Shop',
    active: iconShopActive,
    inactive: iconShopInactive,
  },
  {
    name: 'Profile',
    active: blankProfilePic,
    inactive: blankProfilePic,
  },
];

const BottomTabIcons = ({ bottomTabIcons }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [profilePic, setProfilePic] = useState(null);
  return (
    <TouchableOpacity onPress={() => setActiveTab(bottomTabIcons.name)}>
      <Image
        source={{
          uri:
            activeTab === bottomTabIcons.name
              ? bottomTabIcons.active
              : bottomTabIcons.inactive,
        }}
        style={[
          styles.icon,
          bottomTabIcons.name === 'Profile' ? styles.profilePic() : null,
          activeTab === 'Profile' && bottomTabIcons.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
};

export default BottomTabIcons;

const styles = StyleSheet.create({
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#FFF',
  }),
});
