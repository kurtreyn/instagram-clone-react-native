import { Image } from 'react-native';
import { USERS } from './users';
import friendsPic from '../assets/friends.jpg';
import jsPic from '../assets/js.jpg';
import krcltPic from '../assets/kr-clt.jpg';
import krPosePic from '../assets/kr-pose.jpg';
import krSmPic from '../assets/kr-sm.jpg';
import otPic from '../assets/ot.jpg';
import scarPic1 from '../assets/sc1.jpg';

const friendsPicUri = Image.resolveAssetSource(friendsPic).uri;
const jsPicUri = Image.resolveAssetSource(jsPic).uri;
const krcltPicUri = Image.resolveAssetSource(krcltPic).uri;
const krPosePicUri = Image.resolveAssetSource(krPosePic).uri;
const krSmPicUri = Image.resolveAssetSource(krSmPic).uri;
const otPicUri = Image.resolveAssetSource(otPic).uri;
const scarPic1Uri = Image.resolveAssetSource(scarPic1).uri;

export const POSTS = [
  {
    id: 1,
    imageUrl: krPosePicUri,
    user: USERS[0].user,
    likes: 7870,
    caption:
      'Wow! This build looks awesome. So flippin awesome. Did you build this?',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Skube',
        comment:
          'Wow! This build looks awesome. So flippin awesome. Did you build this?',
      },
      {
        user: 'Skube',
        comment: 'Double posting',
      },
    ],
  },
  {
    id: 2,
    imageUrl: otPicUri,
    user: USERS[1].user,
    likes: 7865,
    caption: 'Plane time',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'myself',
        comment: 'Far out, bruh',
      },
    ],
  },
];
