import { USERS } from './users';

export const POSTS = [
  {
    imageUrl: require('../assets/scar.jpg'),
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train Ride to Hogwarts',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'thequazman',
        comment: 'Wow! This build looks awesome',
      },
    ],
  },
  {
    imageUrl: require('../assets/scar.jpg'),
    user: USERS[1].user,
    likes: 7870,
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
