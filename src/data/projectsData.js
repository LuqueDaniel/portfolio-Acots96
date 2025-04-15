import LibraryOfBabelVideo from '../assets/TheLibraryofBabelReleaseTrailer.mp4';
import Maze3DVideo from '../assets/Raylib_Maze3D.mp4';
import ParatrooperVideo from '../assets/Raylib_Paratrooper.mp4';
import CityZombiesImage from '../assets/CityZombies3.png';
import RPrototyperVideo from '../assets/RPrototyper_Demo01_SHORT.mp4';
import SciFiGameVideo from '../assets/UE_Scifi002_SHORT.mp4';


export const projects = [
  {
    name: 'The Library of Babel (Unity)',
    website: 'https://tanukigamestudio.com/our-games/the-library-of-babel',
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
        Web: 'https://tanukigamestudio.com/our-games/the-library-of-babel',
      }
    },
    media: [
      {
        type: 'video',
        url: LibraryOfBabelVideo
      }
    ]
  },
  {
    name: 'Maze3D',
    year: 2025,
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
        url: Maze3DVideo
      }
    ]
  },
  {
    name: 'Paratrooper',
    year: 2025,
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
        url: ParatrooperVideo
      }
    ]
  },
  {
    name: 'CityZombies (Unity)',
    year: 2021,
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
        type: 'image',
        url: CityZombiesImage
      }
    ]
  }
];

export const underDevelopmentProjects = [
  {
    name: 'RPrototyper (Raylib/C++)',
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
        url: RPrototyperVideo
      }
    ]
  },
  {
    name: 'Sci-fi game (Unreal)',
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
        url: SciFiGameVideo
      }
    ]
  }
];