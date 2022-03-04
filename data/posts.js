import { USERS } from './users';

export const POSTS = [
  {
    id: 1,
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
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
    id: 2,
    imageUrl:
      'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/269982512_10161453261678098_6139741911884789813_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Za97xdPJV68AX9BC27i&_nc_ht=scontent-lga3-1.xx&oh=00_AT_JE9m2ySv-kot7fV9UCn1_kzms2djyYrURKSWqw1pAvQ&oe=6226FE77',
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
