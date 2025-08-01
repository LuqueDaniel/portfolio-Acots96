import LibraryOfBabelVideo from '../assets/TheLibraryofBabelReleaseTrailer.mp4';
import LibraryOfBabelCaption from '../assets/TheLibraryOfBabel_CAPTION.png';
import Maze3DVideo1 from '../assets/Raylib_Maze3D.mp4';
import Maze3DCaption1 from '../assets/Raylib_Maze3D_CAPTION.png';
import Maze3DVideo2 from '../assets/Raylib_Maze3D_SHORT2.mp4';
import Maze3DCaption2 from '../assets/Raylib_Maze3D_CAPTION2.png';
import Maze3DVideo3 from '../assets/Raylib_Maze3D_SHORT3.mp4';
import Maze3DCaption3 from '../assets/Raylib_Maze3D_CAPTION3.png';
import ParatrooperVideo from '../assets/Raylib_Paratrooper.mp4';
import ParatrooperCaption from '../assets/Paratrooper_CAPTION.png';
import CityZombiesImage from '../assets/CityZombies3.png';
import CityZombiesVideo from '../assets/CityZombies001.mp4';
import RPrototyperVideo from '../assets/RPrototyper_Demo01_SHORT.mp4';
import RPrototyperCaption from '../assets/RPrototyper_CAPTION.png';
import SciFiGameVideo1 from '../assets/UE_Scifi001_SHORT.mp4';
import SciFiGameCaption1 from '../assets/UE_Scifi001_CAPTION.png';
import SciFiGameVideo2 from '../assets/UE_Scifi001_SHORT2.mp4';
import SciFiGameCaption2 from '../assets/UE_Scifi001_CAPTION2.png';
import SciFiGameVideo3 from '../assets/UE_Scifi002_SHORT.mp4';
import SciFiGameCaption3 from '../assets/UE_Scifi002_CAPTION.png';
import SciFiGameVideo4 from '../assets/UE_Scifi003_SHORT.mp4';
import SciFiGameCaption4 from '../assets/UE_Scifi003_CAPTION.png';
import SciFiGameVideo5 from '../assets/UE_Scifi003_SHORT2.mp4';
import SciFiGameCaption5 from '../assets/UE_Scifi003_CAPTION2.png';
import SciFiRogueGameVideo1 from '../assets/UE_ScifiRL_Game_00.mp4';
import SciFiRogueGameCaption1 from '../assets/UE_ScifiRL_Game_00_Img.png';
import SciFiRogueGameVideo2 from '../assets/UE_ScifiRL_Game_01.mp4';
import SciFiRogueGameCaption2 from '../assets/UE_ScifiRL_Game_01_Img.png';
import SciFiRogueGameVideo3 from '../assets/UE_ScifiRL_Lab_00.mp4';
import SciFiRogueGameCaption3 from '../assets/UE_ScifiRL_Lab_00_Img.png';
import KluestVideo from '../assets/KluestTrailer.mp4';
import KluestCaption from '../assets/KluestCaption.png';
import TanksVideo1 from '../assets/Unity_TanksMultiplayer001_SHORT.mp4';
import TanksCaption1 from '../assets/Unity_TanksMultiplayer_CAPTION.png';
import TanksVideo2 from '../assets/Unity_TanksMultiplayer002_SHORT.mp4';
import TanksCaption2 from '../assets/Unity_TanksMultiplayer_CAPTION2.png';
import TanksVideo3 from '../assets/Unity_TanksMultiplayer003_SHORT.mp4';
import TanksCaption3 from '../assets/Unity_TanksMultiplayer_CAPTION3.png';


export const PROJECT_CATEGORIES = [
  'Main',
  'Unreal/C++',
  'Unity'
];

export const projects = [
  {
    name: 'The Library of Babel (Unity)',
    categories: ['Main', 'Unity'],
    priority: 1,
    website: 'https://store.steampowered.com/app/1822030/The_Library_of_Babel/',
    data: {
      Title: 'The Library of Babel (Unity)',
      ShortDescription: 'A 2D stealth platformer graphic adventure published in 2023 by TanukiGameStudio and NeonDoctrine for PC and consoles.',
      Description: 'The Library of Babel is a game by TanukiGameStudio (@tanuki_gs), a little studio founded by a group of friends. We started the game in 2020 and we released in 2023 for several platforms such as Steam, EpicGames, PS4, Xbox, Switch and iPhone, thanks to PlayStationTalents-GamesCamp who helped us during the development and NeonDoctrine, an amazing publisher who helped us to complete the game and publish it in more than 10 languages, including Chinese and Japanese. As we were a really small team, my tasks were mainly to implement the AI of the characters (FSM and Behaviour trees) and various systems such as the main character\'s actions, coins system, part of the UI, etc.',
      TechnicalAspects: [
        'AI implementation using FSM and Behaviour trees.',
        'General systems development for gameplay mechanics.',
        'Multi-platform release including Steam, EpicGames, PS4, Xbox, Switch, and iPhone.'
      ],
      URLs: {
        Web: 'https://store.steampowered.com/app/1822030/The_Library_of_Babel/',
      }
    },
    media: [
      {
        type: 'video',
        url: LibraryOfBabelVideo,
        caption: LibraryOfBabelCaption
      }
    ]
  },
  {
    name: 'Maze3D',
    year: 2025,
    categories: ['Main', 'Unreal/C++'],
    priority: 4,
    website: 'https://acots96.itch.io/maze3d',
    data: {
      Title: 'Maze3D (Raylib/C++)',
      ShortDescription: 'A little game about collecting items and solving mazes made with the graphic library Raylib, shaders for effects and C++.',
      Description: 'This is a simple 3D project made with Raylib and C++ during my master degree where you need to collect all the objects randomly placed in the maze to open the exit.',
      TechnicalAspects: [
        'Mazes loaded dynamically as images checking the color of the pixel.',
        '3D math operations (vectors, quaternions, matrices) for object movement and rotation.',
        'Implemented simple shaders for visual effects.'
      ],
      URLs: {
        Itch: 'https://acots96.itch.io/maze3d',
        Gitlab: 'https://gitlab.com/Acots96/raylib_maze',
      }
    },
    media: [
      {
        type: 'video',
        url: Maze3DVideo1,
        caption: Maze3DCaption1
      },
      {
        type: 'video',
        url: Maze3DVideo2,
        caption: Maze3DCaption2
      },
      {
        type: 'video',
        url: Maze3DVideo3,
        caption: Maze3DCaption3
      }
    ]
  },
  {
    name: 'Paratrooper',
    year: 2025,
    categories: ['Unreal/C++'],
    priority: 6,
    website: 'https://acots96.itch.io/paratrooper',
    data: {
      Title: 'Paratrooper (Raylib/C++)',
      ShortDescription: 'A tiny replica of the Paratrooper game made with Raylib and C++. I developed my own tiny engine architecture to manage all the objects.',
      Description: 'This is a simple replica of the Paratrooper arcade game made with Raylib and C++ during my master degree.',
      TechnicalAspects: [
        'Implemented a tiny architecture imitating how engines work.',
        'Class Actor for all objects and a class Engine to manage their lifetime and interactions.'
      ],
      URLs: {
        Itch: 'https://acots96.itch.io/paratrooper',
        Gitlab: 'https://gitlab.com/Acots96/raylib_paratrooper',
      }
    },
    media: [
      {
        type: 'video',
        url: ParatrooperVideo,
        caption: ParatrooperCaption
      }
    ]
  },
  {
    name: 'CityZombies (Unity)',
    year: 2021,
    categories: ['Unity'],
    priority: 4,
    website: 'https://acots96.itch.io/cityzombies',
    data: {
      Title: 'CityZombies (Unity)',
      ShortDescription: 'A short zombies 3rd person action game I made during my master degree.',
      Description: 'This is a tiny zombies game made with Unity and C# during my master degree where you have to kill as many zombies as you can and try to find hidden objects in the map.',
      TechnicalAspects: [
        'Modular system for weapons with different behaviors based on weapon type.',
        'Vehicles system with nodes for autonomous movement.'
      ],
      URLs: {
        Itch: 'https://acots96.itch.io/cityzombies',
        Gitlab: 'https://gitlab.com/Acots96/practicafinal3d',
      }
    },
    media: [
      {
        type: 'video',
        url: CityZombiesVideo,
        caption: CityZombiesImage
      }
    ]
  },
  {
    name: 'RPrototyper (Raylib/C++)',
    categories: ['Unreal/C++'],
    priority: 5,
    website: 'https://github.com/Acots96/RPrototyper',
    data: {
      Title: 'RPrototyper (Raylib/C++)',
      ShortDescription: 'A simple scene editor to create your own hierarchy of 3D objects with its components and export it as a JSON ready to load in your game.',
      Description: 'This is a 3D scene editor made with Raylib and modern C++ aimed to load 3D objects, place them in a hierarchy of objects (parent, childs, grandchilds, etc.) and export all together as a JSON ready to be loaded in your Raylib game or wherever you want. The idea came out when I was trying to make a 3D game with Raylib.',
      TechnicalAspects: [
        'MVC to implement separately the UI and the objects in the map.',
        '3D math (vectors, quaternions, matrices, etc.) to allow the translation, rotation and scaling of the objects placed in the map, and a tree structure to allow objects to be placed as childs of other objects.',
      ],
      URLs: {
        Github: 'https://github.com/Acots96/RPrototyper',
      }
    },
    media: [
      {
        type: 'video',
        url: RPrototyperVideo,
        caption: RPrototyperCaption
      }
    ]
  },
  {
    name: 'Sci-fi game (Unreal)',
    categories: ['Main', 'Unreal/C++'],
    priority: 3,
    website: 'https://gitlab.com/Acots96/projectutapau',
    data: {
      Title: 'Sci-fi game (Unreal)',
      ShortDescription: 'A 3rd person action-adventure RPG game in early stages.',
      Description: 'I have developed my own modular systems of abilities and movements using UObjects and DataAssets so I can implement all the characters\' different actions and movements such as Link\'s parabella or snowboard. This is a project I am developing to implement some of the main mechanics of my favourite genre: action-adventure RPG games, which include a modular system for abilities and movements, and inventory system with different items, among others.',
      TechnicalAspects: [
        'DataAssets instead of ActorComponents for the abilities, instead it uses one single ActorComponent "AbilitiesManager" to manage all the abilities and movements.',
        'I\'ve used ControlRig and just a couple of animations to implement Link\'s parabella movement and snowboard movement.',
      ],
      URLs: {
        Gitlab: 'https://gitlab.com/Acots96/projectutapau',
      }
    },
    media: [
      {
        type: 'video',
        url: SciFiGameVideo2,
        caption: SciFiGameCaption2
      },
      {
        type: 'video',
        url: SciFiGameVideo1,
        caption: SciFiGameCaption1
      },
      {
        type: 'video',
        url: SciFiGameVideo3,
        caption: SciFiGameCaption3
      },
      {
        type: 'video',
        url: SciFiGameVideo4,
        caption: SciFiGameCaption4
      },
      {
        type: 'video',
        url: SciFiGameVideo5,
        caption: SciFiGameCaption5
      }
    ]
  },
  {
    name: 'Sci-fi roguelite game (Unreal)',
    categories: ['Main', 'Unreal/C++'],
    priority: 2,
    website: 'https://github.com/Acots96/Unreal_ScifiRL',
    data: {
      Title: 'Sci-fi roguelite game (Unreal)',
      ShortDescription: 'A tiny 3rd person top-down action roguelite game where you start in a laboratory where you can talk to the LabLead, improve your skills, and go to the arena to fight until you’re killed. Mainly developed with blueprints as it is an early prototype.',
      Description: 'This is a project I am developing to make a full little game with all the basic features such as skills and items system, combat, UI, waves of enemies, save system, etc.',
      TechnicalAspects: [
        'Flocking algorithm to prevent the drones from overlapping.',
        'Basic Bezier curves implementation for the missiles movement.'
      ],
      URLs: {
        Github: 'https://github.com/Acots96/Unreal_ScifiRL',
      }
    },
    media: [
      {
        type: 'video',
        url: SciFiRogueGameVideo1,
        caption: SciFiRogueGameCaption1
      },
      {
        type: 'video',
        url: SciFiRogueGameVideo2,
        caption: SciFiRogueGameCaption2
      },
      {
        type: 'video',
        url: SciFiRogueGameVideo3,
        caption: SciFiRogueGameCaption3
      }
    ]
  },
  {
    name: 'Kluest (Unity)',
    year: 2021,
    categories: ['Unity'],
    priority: 2,
    website: 'https://kluest.com',
    data: {
      Title: 'Kluest (Unity)',
      ShortDescription: 'Geolocated social VR/AR app made for mobile (Android & iOS) to create your own adventures in the real world.',
      Description: 'I mainly implemented features in the client such as UI menus, integration with geolocation APIs (GoogleMaps, OpenStreetMap), design and implementation of the world-sized hexagonal grid (drawn and updated in real-time). Also features in the backend such as part of the architecture, database (first SQL and then MongoDB), endpoints required by the client.',
      TechnicalAspects: [
        'Client-Server app with Unity and ASP.NET Core MVC along with MongoDB',
        'Geolocation using APIs such as GoogleMaps and OpenStreetMap.',
      ],
      URLs: {
        Web: 'https://kluest.com'
      }
    },
    media: [
      {
        type: 'video',
        url: KluestVideo,
        caption: KluestCaption
      }
    ]
  },
  {
    name: 'Tanks multiplayer game (Unity)',
    year: 2021,
    categories: ['Unity'],
    priority: 3,
    website: 'https://github.com/Acots96/UOC-Multijugador',
    data: {
      Title: 'Tanks multiplayer game (Unity)',
      ShortDescription: 'A tiny multiplayer game made with Mirror I made during my master degree.',
      Description: 'This is a tiny real-time multiplayer game made with Unity and C# during my master degree where you simply control tanks and you can play with your friends as a team or all vs all.',
      TechnicalAspects: [
        'Use of the Mirror library/plugin for Unity, which allows for real-time multiplayer handling some of the most important and tricky aspects like connection, synchronization, RPC calls, etc (Check it out here: <a href="https://assetstore.unity.com/packages/tools/network/mirror-129321" target="_blank" rel="noopener noreferrer">https://assetstore.unity.com/packages/tools/network/mirror-129321</a>)',
        'I implemented 3 game types: Local, LAN and WAN (last one requires an open port and I used it to test it, not available anymore).',
      ],
      URLs: {
        Github: 'https://github.com/Acots96/UOC-Multijugador'
      }
    },
    media: [
      {
        type: 'video',
        url: TanksVideo1,
        caption: TanksCaption1
      },
      {
        type: 'video',
        url: TanksVideo2,
        caption: TanksCaption2
      },
      {
        type: 'video',
        url: TanksVideo3,
        caption: TanksCaption3
      }
    ]
  }
];