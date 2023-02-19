import { timeSwitch } from './timeSwitch'

const friends = [
  {
    id: 'XUIASGASD99091',
    name: 'Gerald',
    age: '25',
    avatar:
      'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid. Hop flop de nop sop. Hitchie witchie banda wah, eaux sluh.',
        status: 'unread',
      },
    ],
    unread: '0',
  },
  {
    id: 'XUIASGASD99092',
    name: 'Jenny',
    age: '32',
    avatar: 'https://cdn.costumewall.com/wp-content/uploads/2018/10/leela.webp',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
    ],
    unread: '0',
  },
  {
    id: 'XUIASGASD99094',
    name: 'Orlando',
    age: '22',
    avatar:
      'https://w7.pngwing.com/pngs/33/224/png-transparent-animation-imgur-gfycat-futurama-heroes-vertebrate-fauna-thumbnail.png',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
    ],
    unread: '0',
  },
  {
    id: 'XUIASGASD99093',
    name: 'Rikky',
    age: '31',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKI8iGWTBZHO0cgmeZEMPb7vA7ND1gwsj9FUaN1Er9lkgtlVfEbO6pulyyvR80Ujbycs&usqp=CAU.png',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
    ],
    unread: '0',
  },
  {
    id: 'XUIASGASD99095',
    name: 'Curt',
    age: '33',
    avatar:
      'https://w7.pngwing.com/pngs/192/682/png-transparent-richard-nixon-futurama-united-states-zapp-brannigan-professor-farnsworth-futurama-television-heroes-cartoon-thumbnail.png',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
    ],
    unread: '0',
  },
  {
    id: 'XUIASGASD99096',
    name: 'Bob',
    age: '42',
    avatar:
      'https://w7.pngwing.com/pngs/277/626/png-transparent-red-futurama-character-wearing-green-clothes-futurama-zoidberg-leela-bender-professor-farnsworth-futurama-food-heroes-hand-thumbnail.png',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Chiefs will win the super bowl.',
        status: 'unread',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
    ],
    unread: '0',
  },
  {
    id: 'XUIASGASD99097',
    name: 'Chris',
    age: '26',
    avatar:
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/d/d5/AmyWong.jpg?width=640',
    messages: [
      {
        id: 'ieruasdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'aosdiugaos',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'oauofauosdf',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'ppasfabsd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'oisuais',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'pasldjkahyis',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'asdacda',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'afbdgnjadsfg',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'asdfasvd',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'holyhklhj',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'unread',
      },
      {
        id: 'mfmfhnfgif',
        message: 'Lorem ipsum pueoa potreop nutromger retom yerid.',
        status: 'read',
      },
    ],
    unread: '0',
  },
]

function getRandomTime(i) {
  const hour = i === 0 ? timeSwitch(i) : i > 12 ? timeSwitch(i) : i
  const meridiem = i > 12 ? 'pm' : 'am'
  const minute = Math.floor(Math.random() * 60)
  return minute.toString().length < 2
    ? `${hour}:0${minute} ${meridiem}`
    : `${hour}:${minute} ${meridiem}`
}

const updatedFriendsList = (friends) => {
  friends.forEach((friend) => {
    friend.messages.forEach((message, i) => {
      if (message.status !== 'read') {
        friend.unread++
      }
      message.timestamp = getRandomTime(i)
    })
    friend.online = '1'
    friend.bio = `Hi, my name is ${friend.name}! Isn't Chatr great!`
  })
  return friends
}

console.log(updatedFriendsList(friends))
export const Friends = updatedFriendsList(friends)
