import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Subscribe } from "unstated";

import ResultTopFont from '../components/ResultTopFont'
import ResultOtherFont from '../components/ResultOtherFont'

import CounterContainer from '../container/fontContainer'

import * as Font from 'expo-font';

let fontList = (font0, font1, font2, font3, font4) => {
  let font =
  {
    0: {path: require('../resources/Mukta-ExtraBold.ttf'), name: 'Mukta', style: 'ExtraBold'},
    1: {path: require('../resources/RobotoSlab-Medium.ttf'), name: 'RobotoSlab', style: 'Medium'},
    2: {path: require('../resources/Lora-Italic.ttf'), name: 'Lora', style: 'Italic'},
    3: {path: require('../resources/WorkSans-Regular.ttf'), name: 'WorkSans', style: ''},
    4: {path: require('../resources/Lato-Italic.ttf'), name: 'Lato', style: 'Italic'},
    5: {path: require('../resources/SourceSansPro-BlackItalic.ttf'), name: 'SourceSansPro', style: 'BlackItalic'},
    6: {path: require('../resources/Roboto-Medium.ttf'), name: 'Roboto', style: 'Medium'},
    7: {path: require('../resources/NotoSans-Regular.ttf'), name: 'NotoSans', style: ''},
    8: {path: require('../resources/Rubik-MediumItalic.ttf'), name: 'Rubik', style: 'MediumItalic'},
    9: {path: require('../resources/Merriweather-Bold.ttf'), name: 'Merriweather', style: 'Bold'},
    10: {path: require('../resources/Raleway-BoldItalic.ttf'), name: 'Raleway', style: 'BoldItalic'},
    11: {path: require('../resources/RobotoMono-Medium.ttf'), name: 'RobotoMono', style: 'Medium'},
    12: {path: require('../resources/RobotoMono-SemiBold.ttf'), name: 'RobotoMono', style: 'SemiBold'},
    13: {path: require('../resources/Lato-LightItalic.ttf'), name: 'Lato', style: 'LightItalic'},
    14: {path: require('../resources/Roboto-Light.ttf'), name: 'Roboto', style: 'Light'},
    15: {path: require('../resources/Raleway-MediumItalic.ttf'), name: 'Raleway', style: 'MediumItalic'},
    16: {path: require('../resources/Merriweather-Regular.ttf'), name: 'Merriweather', style: ''},
    17: {path: require('../resources/NotoSansJP-Regular.otf'), name: 'NotoSansJP', style: ''},
    18: {path: require('../resources/OpenSansCondensed-Bold.ttf'), name: 'OpenSansCondensed', style: 'Bold'},
    19: {path: require('../resources/Montserrat-LightItalic.ttf'), name: 'Montserrat', style: 'LightItalic'},
    20: {path: require('../resources/NotoSansJP-Medium.otf'), name: 'NotoSansJP', style: 'Medium'},
    21: {path: require('../resources/OpenSans-SemiBold.ttf'), name: 'OpenSans', style: 'SemiBold'},
    22: {path: require('../resources/Raleway-ThinItalic.ttf'), name: 'Raleway', style: 'ThinItalic'},
    23: {path: require('../resources/RobotoMono-SemiBoldItalic.ttf'), name: 'RobotoMono', style: 'SemiBoldItalic'},
    24: {path: require('../resources/BalsamiqSans-Bold.ttf'), name: 'BalsamiqSans', style: 'Bold'},
    25: {path: require('../resources/Raleway-ExtraLight.ttf'), name: 'Raleway', style: 'ExtraLight'},
    26: {path: require('../resources/Lato-Thin.ttf'), name: 'Lato', style: 'Thin'},
    27: {path: require('../resources/Montserrat-Medium.ttf'), name: 'Montserrat', style: 'Medium'},
    28: {path: require('../resources/NotoSansJP-Light.otf'), name: 'NotoSansJP', style: 'Light'},
    29: {path: require('../resources/Rubik-Bold.ttf'), name: 'Rubik', style: 'Bold'},
    30: {path: require('../resources/Merriweather-Light.ttf'), name: 'Merriweather', style: 'Light'},
    31: {path: require('../resources/PTSerif-Italic.ttf'), name: 'PTSerif', style: 'Italic'},
    32: {path: require('../resources/Ubuntu-Medium.ttf'), name: 'Ubuntu', style: 'Medium'},
    33: {path: require('../resources/RobotoSlab-SemiBold.ttf'), name: 'RobotoSlab', style: 'SemiBold'},
    34: {path: require('../resources/SourceSansPro-SemiBoldItalic.ttf'), name: 'SourceSansPro', style: 'SemiBoldItalic'},
    35: {path: require('../resources/WorkSans-Light.ttf'), name: 'WorkSans', style: 'Light'},
    36: {path: require('../resources/Poppins-ExtraLight.ttf'), name: 'Poppins', style: 'ExtraLight'},
    37: {path: require('../resources/Lato-Bold.ttf'), name: 'Lato', style: 'Bold'},
    38: {path: require('../resources/Lato-Black.ttf'), name: 'Lato', style: 'Black'},
    39: {path: require('../resources/WorkSans-ExtraBold.ttf'), name: 'WorkSans', style: 'ExtraBold'},
    40: {path: require('../resources/Oswald-Bold.ttf'), name: 'Oswald', style: 'Bold'},
    41: {path: require('../resources/PTSans-Italic.ttf'), name: 'PTSans', style: 'Italic'},
    42: {path: require('../resources/RobotoCondensed-Bold.ttf'), name: 'RobotoCondensed', style: 'Bold'},
    43: {path: require('../resources/PTSerif-BoldItalic.ttf'), name: 'PTSerif', style: 'BoldItalic'},
    44: {path: require('../resources/NotoSerif-BoldItalic.ttf'), name: 'NotoSerif', style: 'BoldItalic'},
    45: {path: require('../resources/PlayfairDisplay-Bold.ttf'), name: 'PlayfairDisplay', style: 'Bold'},
    46: {path: require('../resources/Poppins-ThinItalic.ttf'), name: 'Poppins', style: 'ThinItalic'},
    47: {path: require('../resources/NotoSerif-Regular.ttf'), name: 'NotoSerif', style: ''},
    48: {path: require('../resources/RobotoSlab-ExtraBold.ttf'), name: 'RobotoSlab', style: 'ExtraBold'},
    49: {path: require('../resources/Lora-Bold.ttf'), name: 'Lora', style: 'Bold'},
    50: {path: require('../resources/NotoSansKR-Light.otf'), name: 'NotoSansKR', style: 'Light'},
    51: {path: require('../resources/Raleway-Medium.ttf'), name: 'Raleway', style: 'Medium'},
    52: {path: require('../resources/Lora-SemiBold.ttf'), name: 'Lora', style: 'SemiBold'},
    53: {path: require('../resources/WorkSans-SemiBoldItalic.ttf'), name: 'WorkSans', style: 'SemiBoldItalic'},
    54: {path: require('../resources/RobotoCondensed-Light.ttf'), name: 'RobotoCondensed', style: 'Light'},
    55: {path: require('../resources/SourceSansPro-Regular.ttf'), name: 'SourceSansPro', style: ''},
    56: {path: require('../resources/Poppins-ExtraLightItalic.ttf'), name: 'Poppins', style: 'ExtraLightItalic'},
    57: {path: require('../resources/Poppins-BoldItalic.ttf'), name: 'Poppins', style: 'BoldItalic'},
    58: {path: require('../resources/WorkSans-MediumItalic.ttf'), name: 'WorkSans', style: 'MediumItalic'},
    59: {path: require('../resources/Poppins-Light.ttf'), name: 'Poppins', style: 'Light'},
    60: {path: require('../resources/Raleway-SemiBold.ttf'), name: 'Raleway', style: 'SemiBold'},
    61: {path: require('../resources/PlayfairDisplay-SemiBold.ttf'), name: 'PlayfairDisplay', style: 'SemiBold'},
    62: {path: require('../resources/Poppins-Medium.ttf'), name: 'Poppins', style: 'Medium'},
    63: {path: require('../resources/Roboto-Regular.ttf'), name: 'Roboto', style: ''},
    64: {path: require('../resources/RobotoSlab-Thin.ttf'), name: 'RobotoSlab', style: 'Thin'},
    65: {path: require('../resources/WorkSans-BoldItalic.ttf'), name: 'WorkSans', style: 'BoldItalic'},
    66: {path: require('../resources/RobotoMono-Regular.ttf'), name: 'RobotoMono', style: ''},
    67: {path: require('../resources/Nunito-ExtraBoldItalic.ttf'), name: 'Nunito', style: 'ExtraBoldItalic'},
    68: {path: require('../resources/Oswald-SemiBold.ttf'), name: 'Oswald', style: 'SemiBold'},
    69: {path: require('../resources/Raleway-ExtraBold.ttf'), name: 'Raleway', style: 'ExtraBold'},
    70: {path: require('../resources/Roboto-MediumItalic.ttf'), name: 'Roboto', style: 'MediumItalic'},
    71: {path: require('../resources/RobotoSlab-Black.ttf'), name: 'RobotoSlab', style: 'Black'},
    72: {path: require('../resources/Oswald-Medium.ttf'), name: 'Oswald', style: 'Medium'},
    73: {path: require('../resources/Montserrat-BoldItalic.ttf'), name: 'Montserrat', style: 'BoldItalic'},
    74: {path: require('../resources/SourceSansPro-Bold.ttf'), name: 'SourceSansPro', style: 'Bold'},
    75: {path: require('../resources/Raleway-ExtraBoldItalic.ttf'), name: 'Raleway', style: 'ExtraBoldItalic'},
    76: {path: require('../resources/Rubik-SemiBoldItalic.ttf'), name: 'Rubik', style: 'SemiBoldItalic'},
    77: {path: require('../resources/PTSans-BoldItalic.ttf'), name: 'PTSans', style: 'BoldItalic'},
    78: {path: require('../resources/PlayfairDisplay-Medium.ttf'), name: 'PlayfairDisplay', style: 'Medium'},
    79: {path: require('../resources/Montserrat-Light.ttf'), name: 'Montserrat', style: 'Light'},
    80: {path: require('../resources/Montserrat-ThinItalic.ttf'), name: 'Montserrat', style: 'ThinItalic'},
    81: {path: require('../resources/Nunito-ExtraBold.ttf'), name: 'Nunito', style: 'ExtraBold'},
    82: {path: require('../resources/RobotoCondensed-Italic.ttf'), name: 'RobotoCondensed', style: 'Italic'},
    83: {path: require('../resources/WorkSans-ExtraLight.ttf'), name: 'WorkSans', style: 'ExtraLight'},
    84: {path: require('../resources/RobotoMono-LightItalic.ttf'), name: 'RobotoMono', style: 'LightItalic'},
    85: {path: require('../resources/NotoSansJP-Thin.otf'), name: 'NotoSansJP', style: 'Thin'},
    86: {path: require('../resources/Nunito-ExtraLightItalic.ttf'), name: 'Nunito', style: 'ExtraLightItalic'},
    87: {path: require('../resources/Ubuntu-LightItalic.ttf'), name: 'Ubuntu', style: 'LightItalic'},
    88: {path: require('../resources/Mukta-SemiBold.ttf'), name: 'Mukta', style: 'SemiBold'},
    89: {path: require('../resources/WorkSans-ThinItalic.ttf'), name: 'WorkSans', style: 'ThinItalic'},
    90: {path: require('../resources/Montserrat-ExtraLight.ttf'), name: 'Montserrat', style: 'ExtraLight'},
    91: {path: require('../resources/Montserrat-Thin.ttf'), name: 'Montserrat', style: 'Thin'},
    92: {path: require('../resources/Lato-Regular.ttf'), name: 'Lato', style: ''},
    93: {path: require('../resources/RobotoCondensed-BoldItalic.ttf'), name: 'RobotoCondensed', style: 'BoldItalic'},
    94: {path: require('../resources/BebasNeue-Regular.ttf'), name: 'BebasNeue', style: ''},
    95: {path: require('../resources/NotoSans-Bold.ttf'), name: 'NotoSans', style: 'Bold'},
    96: {path: require('../resources/SourceSansPro-LightItalic.ttf'), name: 'SourceSansPro', style: 'LightItalic'},
    97: {path: require('../resources/OpenSans-Light.ttf'), name: 'OpenSans', style: 'Light'},
    98: {path: require('../resources/Raleway-Regular.ttf'), name: 'Raleway', style: ''},
    99: {path: require('../resources/Montserrat-Bold.ttf'), name: 'Montserrat', style: 'Bold'},
    100: {path: require('../resources/Raleway-ExtraLightItalic.ttf'), name: 'Raleway', style: 'ExtraLightItalic'},
    101: {path: require('../resources/Poppins-SemiBoldItalic.ttf'), name: 'Poppins', style: 'SemiBoldItalic'},
    102: {path: require('../resources/Merriweather-BoldItalic.ttf'), name: 'Merriweather', style: 'BoldItalic'},
    103: {path: require('../resources/Montserrat-MediumItalic.ttf'), name: 'Montserrat', style: 'MediumItalic'},
    104: {path: require('../resources/SourceSansPro-Light.ttf'), name: 'SourceSansPro', style: 'Light'},
    105: {path: require('../resources/Mukta-Bold.ttf'), name: 'Mukta', style: 'Bold'},
    106: {path: require('../resources/WorkSans-ExtraLightItalic.ttf'), name: 'WorkSans', style: 'ExtraLightItalic'},
    107: {path: require('../resources/RobotoMono-BoldItalic.ttf'), name: 'RobotoMono', style: 'BoldItalic'},
    108: {path: require('../resources/Rubik-Light.ttf'), name: 'Rubik', style: 'Light'},
    109: {path: require('../resources/OpenSans-Italic.ttf'), name: 'OpenSans', style: 'Italic'},
    110: {path: require('../resources/Ubuntu-Regular.ttf'), name: 'Ubuntu', style: ''},
    111: {path: require('../resources/Raleway-SemiBoldItalic.ttf'), name: 'Raleway', style: 'SemiBoldItalic'},
    112: {path: require('../resources/Lato-BlackItalic.ttf'), name: 'Lato', style: 'BlackItalic'},
    113: {path: require('../resources/NotoSansJP-Bold.otf'), name: 'NotoSansJP', style: 'Bold'},
    114: {path: require('../resources/Nunito-Light.ttf'), name: 'Nunito', style: 'Light'},
    115: {path: require('../resources/PTSerif-Bold.ttf'), name: 'PTSerif', style: 'Bold'},
    116: {path: require('../resources/Nunito-Regular.ttf'), name: 'Nunito', style: ''},
    117: {path: require('../resources/Ubuntu-Bold.ttf'), name: 'Ubuntu', style: 'Bold'},
    118: {path: require('../resources/Lora-SemiBoldItalic.ttf'), name: 'Lora', style: 'SemiBoldItalic'},
    119: {path: require('../resources/Montserrat-BlackItalic.ttf'), name: 'Montserrat', style: 'BlackItalic'},
    120: {path: require('../resources/WorkSans-Medium.ttf'), name: 'WorkSans', style: 'Medium'},
    121: {path: require('../resources/RobotoMono-ExtraLight.ttf'), name: 'RobotoMono', style: 'ExtraLight'},
    122: {path: require('../resources/RussoOne-Regular.ttf'), name: 'RussoOne', style: ''},
    123: {path: require('../resources/Raleway-Light.ttf'), name: 'Raleway', style: 'Light'},
    124: {path: require('../resources/PlayfairDisplay-BoldItalic.ttf'), name: 'PlayfairDisplay', style: 'BoldItalic'},
    125: {path: require('../resources/Rubik-Medium.ttf'), name: 'Rubik', style: 'Medium'},
    126: {path: require('../resources/Mukta-ExtraLight.ttf'), name: 'Mukta', style: 'ExtraLight'},
    127: {path: require('../resources/RobotoSlab-Bold.ttf'), name: 'RobotoSlab', style: 'Bold'},
    128: {path: require('../resources/RobotoMono-ThinItalic.ttf'), name: 'RobotoMono', style: 'ThinItalic'},
    129: {path: require('../resources/Nunito-SemiBold.ttf'), name: 'Nunito', style: 'SemiBold'},
    130: {path: require('../resources/Poppins-ExtraBoldItalic.ttf'), name: 'Poppins', style: 'ExtraBoldItalic'},
    131: {path: require('../resources/Nunito-Bold.ttf'), name: 'Nunito', style: 'Bold'},
    132: {path: require('../resources/Rubik-ExtraBoldItalic.ttf'), name: 'Rubik', style: 'ExtraBoldItalic'},
    133: {path: require('../resources/Nunito-BoldItalic.ttf'), name: 'Nunito', style: 'BoldItalic'},
    134: {path: require('../resources/Nunito-Black.ttf'), name: 'Nunito', style: 'Black'},
    135: {path: require('../resources/Oswald-Regular.ttf'), name: 'Oswald', style: ''},
    136: {path: require('../resources/Mukta-Light.ttf'), name: 'Mukta', style: 'Light'},
    137: {path: require('../resources/WorkSans-SemiBold.ttf'), name: 'WorkSans', style: 'SemiBold'},
    138: {path: require('../resources/Rubik-Black.ttf'), name: 'Rubik', style: 'Black'},
    139: {path: require('../resources/RobotoCondensed-LightItalic.ttf'), name: 'RobotoCondensed', style: 'LightItalic'},
    140: {path: require('../resources/Poppins-ExtraBold.ttf'), name: 'Poppins', style: 'ExtraBold'},
    141: {path: require('../resources/SourceSansPro-Black.ttf'), name: 'SourceSansPro', style: 'Black'},
    142: {path: require('../resources/Nunito-ExtraLight.ttf'), name: 'Nunito', style: 'ExtraLight'},
    143: {path: require('../resources/PlayfairDisplay-ExtraBoldItalic.ttf'), name: 'PlayfairDisplay', style: 'ExtraBoldItalic'},
    144: {path: require('../resources/OpenSans-ExtraBold.ttf'), name: 'OpenSans', style: 'ExtraBold'},
    145: {path: require('../resources/Nunito-SemiBoldItalic.ttf'), name: 'Nunito', style: 'SemiBoldItalic'},
    146: {path: require('../resources/NotoSerif-Italic.ttf'), name: 'NotoSerif', style: 'Italic'},
    147: {path: require('../resources/PlayfairDisplay-Italic.ttf'), name: 'PlayfairDisplay', style: 'Italic'},
    148: {path: require('../resources/PlayfairDisplay-Regular.ttf'), name: 'PlayfairDisplay', style: ''},
    149: {path: require('../resources/Montserrat-SemiBold.ttf'), name: 'Montserrat', style: 'SemiBold'},
    150: {path: require('../resources/Nunito-BlackItalic.ttf'), name: 'Nunito', style: 'BlackItalic'},
    151: {path: require('../resources/Merriweather-BlackItalic.ttf'), name: 'Merriweather', style: 'BlackItalic'},
    152: {path: require('../resources/NotoSansKR-Bold.otf'), name: 'NotoSansKR', style: 'Bold'},
    153: {path: require('../resources/OpenSans-LightItalic.ttf'), name: 'OpenSans', style: 'LightItalic'},
    154: {path: require('../resources/Raleway-Black.ttf'), name: 'Raleway', style: 'Black'},
    155: {path: require('../resources/Montserrat-ExtraLightItalic.ttf'), name: 'Montserrat', style: 'ExtraLightItalic'},
    156: {path: require('../resources/Ubuntu-MediumItalic.ttf'), name: 'Ubuntu', style: 'MediumItalic'},
    157: {path: require('../resources/RobotoMono-ExtraLightItalic.ttf'), name: 'RobotoMono', style: 'ExtraLightItalic'},
    158: {path: require('../resources/RobotoSlab-Light.ttf'), name: 'RobotoSlab', style: 'Light'},
    159: {path: require('../resources/Poppins-BlackItalic.ttf'), name: 'Poppins', style: 'BlackItalic'},
    160: {path: require('../resources/Rubik-Italic.ttf'), name: 'Rubik', style: 'Italic'},
    161: {path: require('../resources/NotoSansKR-Thin.otf'), name: 'NotoSansKR', style: 'Thin'},
    162: {path: require('../resources/Lora-MediumItalic.ttf'), name: 'Lora', style: 'MediumItalic'},
    163: {path: require('../resources/WorkSans-Italic.ttf'), name: 'WorkSans', style: 'Italic'},
    164: {path: require('../resources/Rubik-LightItalic.ttf'), name: 'Rubik', style: 'LightItalic'},
    165: {path: require('../resources/Montserrat-ExtraBold.ttf'), name: 'Montserrat', style: 'ExtraBold'},
    166: {path: require('../resources/Roboto-ThinItalic.ttf'), name: 'Roboto', style: 'ThinItalic'},
    167: {path: require('../resources/BalsamiqSans-Italic.ttf'), name: 'BalsamiqSans', style: 'Italic'},
    168: {path: require('../resources/Raleway-BlackItalic.ttf'), name: 'Raleway', style: 'BlackItalic'},
    169: {path: require('../resources/RobotoCondensed-Regular.ttf'), name: 'RobotoCondensed', style: ''},
    170: {path: require('../resources/OpenSansCondensed-LightItalic.ttf'), name: 'OpenSansCondensed', style: 'LightItalic'},
    171: {path: require('../resources/NotoSerif-Bold.ttf'), name: 'NotoSerif', style: 'Bold'},
    172: {path: require('../resources/RobotoMono-Light.ttf'), name: 'RobotoMono', style: 'Light'},
    173: {path: require('../resources/PTSans-Regular.ttf'), name: 'PTSans', style: ''},
    174: {path: require('../resources/OpenSans-Bold.ttf'), name: 'OpenSans', style: 'Bold'},
    175: {path: require('../resources/Roboto-BoldItalic.ttf'), name: 'Roboto', style: 'BoldItalic'},
    176: {path: require('../resources/Rubik-SemiBold.ttf'), name: 'Rubik', style: 'SemiBold'},
    177: {path: require('../resources/Poppins-Regular.ttf'), name: 'Poppins', style: ''},
    178: {path: require('../resources/Montserrat-Black.ttf'), name: 'Montserrat', style: 'Black'},
    179: {path: require('../resources/WorkSans-BlackItalic.ttf'), name: 'WorkSans', style: 'BlackItalic'},
    180: {path: require('../resources/OpenSans-SemiBoldItalic.ttf'), name: 'OpenSans', style: 'SemiBoldItalic'},
    181: {path: require('../resources/Roboto-LightItalic.ttf'), name: 'Roboto', style: 'LightItalic'},
    182: {path: require('../resources/Alata-Regular.ttf'), name: 'Alata', style: ''},
    183: {path: require('../resources/NotoSans-BoldItalic.ttf'), name: 'NotoSans', style: 'BoldItalic'},
    184: {path: require('../resources/WorkSans-Thin.ttf'), name: 'WorkSans', style: 'Thin'},
    185: {path: require('../resources/Rubik-BlackItalic.ttf'), name: 'Rubik', style: 'BlackItalic'},
    186: {path: require('../resources/SourceSansPro-ExtraLight.ttf'), name: 'SourceSansPro', style: 'ExtraLight'},
    187: {path: require('../resources/Poppins-LightItalic.ttf'), name: 'Poppins', style: 'LightItalic'},
    188: {path: require('../resources/Lato-BoldItalic.ttf'), name: 'Lato', style: 'BoldItalic'},
    189: {path: require('../resources/Montserrat-Regular.ttf'), name: 'Montserrat', style: ''},
    190: {path: require('../resources/WorkSans-Black.ttf'), name: 'WorkSans', style: 'Black'},
    191: {path: require('../resources/RobotoMono-MediumItalic.ttf'), name: 'RobotoMono', style: 'MediumItalic'},
    192: {path: require('../resources/Lato-Light.ttf'), name: 'Lato', style: 'Light'},
    193: {path: require('../resources/BalsamiqSans-BoldItalic.ttf'), name: 'BalsamiqSans', style: 'BoldItalic'},
    194: {path: require('../resources/Raleway-LightItalic.ttf'), name: 'Raleway', style: 'LightItalic'},
    195: {path: require('../resources/Nunito-Italic.ttf'), name: 'Nunito', style: 'Italic'},
    196: {path: require('../resources/Montserrat-Italic.ttf'), name: 'Montserrat', style: 'Italic'},
    197: {path: require('../resources/RobotoMono-Bold.ttf'), name: 'RobotoMono', style: 'Bold'},
    198: {path: require('../resources/PTSans-Bold.ttf'), name: 'PTSans', style: 'Bold'},
    199: {path: require('../resources/OpenSans-ExtraBoldItalic.ttf'), name: 'OpenSans', style: 'ExtraBoldItalic'},
    200: {path: require('../resources/Raleway-Thin.ttf'), name: 'Raleway', style: 'Thin'},
    201: {path: require('../resources/SourceSansPro-BoldItalic.ttf'), name: 'SourceSansPro', style: 'BoldItalic'},
    202: {path: require('../resources/Lato-ThinItalic.ttf'), name: 'Lato', style: 'ThinItalic'},
    203: {path: require('../resources/Roboto-Italic.ttf'), name: 'Roboto', style: 'Italic'},
    204: {path: require('../resources/Rubik-ExtraBold.ttf'), name: 'Rubik', style: 'ExtraBold'},
    205: {path: require('../resources/SourceSansPro-SemiBold.ttf'), name: 'SourceSansPro', style: 'SemiBold'},
    206: {path: require('../resources/Poppins-Bold.ttf'), name: 'Poppins', style: 'Bold'},
    207: {path: require('../resources/Lora-Medium.ttf'), name: 'Lora', style: 'Medium'},
    208: {path: require('../resources/Lora-BoldItalic.ttf'), name: 'Lora', style: 'BoldItalic'},
    209: {path: require('../resources/Mukta-Medium.ttf'), name: 'Mukta', style: 'Medium'},
    210: {path: require('../resources/Merriweather-Italic.ttf'), name: 'Merriweather', style: 'Italic'},
    211: {path: require('../resources/KronaOne-Regular.ttf'), name: 'KronaOne', style: ''},
    212: {path: require('../resources/Roboto-BlackItalic.ttf'), name: 'Roboto', style: 'BlackItalic'},
    213: {path: require('../resources/NotoSansKR-Black.otf'), name: 'NotoSansKR', style: 'Black'},
    214: {path: require('../resources/PlayfairDisplay-Black.ttf'), name: 'PlayfairDisplay', style: 'Black'},
    215: {path: require('../resources/OpenSans-Regular.ttf'), name: 'OpenSans', style: ''},
    216: {path: require('../resources/RobotoMono-Italic.ttf'), name: 'RobotoMono', style: 'Italic'},
    217: {path: require('../resources/PlayfairDisplay-SemiBoldItalic.ttf'), name: 'PlayfairDisplay', style: 'SemiBoldItalic'},
    218: {path: require('../resources/RobotoSlab-ExtraLight.ttf'), name: 'RobotoSlab', style: 'ExtraLight'},
    219: {path: require('../resources/Rubik-Regular.ttf'), name: 'Rubik', style: ''},
    220: {path: require('../resources/Poppins-Black.ttf'), name: 'Poppins', style: 'Black'},
    221: {path: require('../resources/OpenSans-BoldItalic.ttf'), name: 'OpenSans', style: 'BoldItalic'},
    222: {path: require('../resources/Roboto-Bold.ttf'), name: 'Roboto', style: 'Bold'},
    223: {path: require('../resources/WorkSans-LightItalic.ttf'), name: 'WorkSans', style: 'LightItalic'},
    224: {path: require('../resources/OpenSansCondensed-Light.ttf'), name: 'OpenSansCondensed', style: 'Light'},
    225: {path: require('../resources/Ubuntu-BoldItalic.ttf'), name: 'Ubuntu', style: 'BoldItalic'},
    226: {path: require('../resources/Roboto-Thin.ttf'), name: 'Roboto', style: 'Thin'},
    227: {path: require('../resources/NotoSansKR-Medium.otf'), name: 'NotoSansKR', style: 'Medium'},
    228: {path: require('../resources/LexendPeta-Regular.ttf'), name: 'LexendPeta', style: ''},
    229: {path: require('../resources/PlayfairDisplay-MediumItalic.ttf'), name: 'PlayfairDisplay', style: 'MediumItalic'},
    230: {path: require('../resources/Lora-Regular.ttf'), name: 'Lora', style: ''},
    231: {path: require('../resources/Raleway-Italic.ttf'), name: 'Raleway', style: 'Italic'},
    232: {path: require('../resources/Roboto-Black.ttf'), name: 'Roboto', style: 'Black'},
    233: {path: require('../resources/Oswald-ExtraLight.ttf'), name: 'Oswald', style: 'ExtraLight'},
    234: {path: require('../resources/Mukta-Regular.ttf'), name: 'Mukta', style: ''},
    235: {path: require('../resources/Poppins-Thin.ttf'), name: 'Poppins', style: 'Thin'},
    236: {path: require('../resources/BalsamiqSans-Regular.ttf'), name: 'BalsamiqSans', style: ''},
    237: {path: require('../resources/Poppins-SemiBold.ttf'), name: 'Poppins', style: 'SemiBold'},
    238: {path: require('../resources/Raleway-Bold.ttf'), name: 'Raleway', style: 'Bold'},
    239: {path: require('../resources/Poppins-Italic.ttf'), name: 'Poppins', style: 'Italic'},
    240: {path: require('../resources/SourceSansPro-ExtraLightItalic.ttf'), name: 'SourceSansPro', style: 'ExtraLightItalic'},
    241: {path: require('../resources/PlayfairDisplay-BlackItalic.ttf'), name: 'PlayfairDisplay', style: 'BlackItalic'},
    242: {path: require('../resources/RobotoMono-Thin.ttf'), name: 'RobotoMono', style: 'Thin'},
    243: {path: require('../resources/PlayfairDisplay-ExtraBold.ttf'), name: 'PlayfairDisplay', style: 'ExtraBold'},
    244: {path: require('../resources/Merriweather-Black.ttf'), name: 'Merriweather', style: 'Black'},
    245: {path: require('../resources/Ubuntu-Italic.ttf'), name: 'Ubuntu', style: 'Italic'},
    246: {path: require('../resources/NotoSansJP-Black.otf'), name: 'NotoSansJP', style: 'Black'},
    247: {path: require('../resources/SourceSansPro-Italic.ttf'), name: 'SourceSansPro', style: 'Italic'},
    248: {path: require('../resources/Montserrat-SemiBoldItalic.ttf'), name: 'Montserrat', style: 'SemiBoldItalic'},
    249: {path: require('../resources/PTSerif-Regular.ttf'), name: 'PTSerif', style: ''},
    250: {path: require('../resources/Merriweather-LightItalic.ttf'), name: 'Merriweather', style: 'LightItalic'},
    251: {path: require('../resources/Nunito-LightItalic.ttf'), name: 'Nunito', style: 'LightItalic'},
    252: {path: require('../resources/RobotoSlab-Regular.ttf'), name: 'RobotoSlab', style: ''},
    253: {path: require('../resources/Oswald-Light.ttf'), name: 'Oswald', style: 'Light'},
    254: {path: require('../resources/Montserrat-ExtraBoldItalic.ttf'), name: 'Montserrat', style: 'ExtraBoldItalic'},
    255: {path: require('../resources/Ubuntu-Light.ttf'), name: 'Ubuntu', style: 'Light'},
    256: {path: require('../resources/WorkSans-ExtraBoldItalic.ttf'), name: 'WorkSans', style: 'ExtraBoldItalic'},
    257: {path: require('../resources/Rubik-BoldItalic.ttf'), name: 'Rubik', style: 'BoldItalic'},
    258: {path: require('../resources/Poppins-MediumItalic.ttf'), name: 'Poppins', style: 'MediumItalic'},
    259: {path: require('../resources/NotoSansKR-Regular.otf'), name: 'NotoSansKR', style: ''},
    260: {path: require('../resources/NotoSans-Italic.ttf'), name: 'NotoSans', style: 'Italic'},
    261: {path: require('../resources/WorkSans-Bold.ttf'), name: 'WorkSans', style: 'Bold'},
  }

  return [
    font[font0],
    font[font1],
    font[font2],
    font[font3],
    font[font4],
  ]
  
}

class HomeScreenContent extends React.Component {
  state = {
    fontsLoaded: false,
    fonts: null
  };
  // let [fontsLoaded] = useFonts({
  //   'font0': fontsPath[100].path,
  // });


  // if (!fontsLoaded) {
  //   return <View />;
  // }

  // let globalState = this.props.globalState;

  // return (
  //   <Subscribe to={[CounterContainer]}>
  //     {globalState => (
  //       <View style={styles.container}>
  //         <Text>{globalState.state.data}</Text>
  //         {/* <Text>Open up App.js to start working on your app!</Text>
  //           <Text>Hello World!</Text>
  //           <Button title="Go to InvoiceEdit" onPress={() => this.props.navigation.navigate("InvoiceEdit")} />
  //           <Button title="Go to Summary" onPress={() => this.props.navigation.navigate("Summary")} />

  //           <Text>{globalState.state.data.invoices[0].date}</Text> */}
  //       </View>
  //     )}
  //   </Subscribe>
  // )

  async _loadFontsAsync() {
    let globalState = this.props.globalState
    console.log('globalState.state.data',globalState.state.data);

    let fontLists = fontList(...globalState.state.data)

    // console.log(fontLists);


    await Font.loadAsync({
      font0: fontLists[0].path,
      font1: fontLists[1].path,
      font2: fontLists[2].path,
      font3: fontLists[3].path,
      font4: fontLists[4].path
    }
      );

    this.setState({fonts:fontLists});
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    let globalState = this.props.globalState;
    // console.log(globalState);

    console.log(this.state)

    if (this.state.fontsLoaded) {
      return (
        <Subscribe to={[CounterContainer]}>
          {globalState => (
            <View>
              <View style={styles.result}>
                <Text style={styles.resultTopFont}>一致したフォント</Text>
                <ResultTopFont fontName={this.state.fonts[0].name} fontFamily='font0' fontStyle={this.state.fonts[0].style} />
              </View>
              <View style={styles.otherBox, styles.other}>
                <Text style={styles.other, styles.resultFont}>その他の候補フォント</Text>
              </View>
              <View style={styles.resultFonts}>
                <View>
                  {/* フォント1 */}
                  <ResultOtherFont fontName={this.state.fonts[1].name} fontStyle={this.state.fonts[1].style} fontFamily='font1'/>
                  <ResultOtherFont fontName={this.state.fonts[2].name} fontStyle={this.state.fonts[2].style} fontFamily='font2'/>
                  <ResultOtherFont fontName={this.state.fonts[3].name} fontStyle={this.state.fonts[3].style} fontFamily='font3'/>
                  <ResultOtherFont fontName={this.state.fonts[4].name} fontStyle={this.state.fonts[4].style} fontFamily='font4'/>
                </View>
              </View>
            </View>
          )}
        </Subscribe>
      );
    }
    else {
      return <View></View>
    }
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <Subscribe to={[CounterContainer]}>
      {globalState => <HomeScreenContent globalState={globalState} navigation={navigation} />}
    </Subscribe>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  // ".header": {
  //   "marginBottom": "60px"
  // },
  'result': {
    "marginBottom": 20,
  },
  'resultFont': {
    "fontWeight": "bold",
    "color": "#D9D9D9",
    "textAlign": "center",
  },
  'resultTopFont': {
    "fontWeight": "bold",
    "color": "#D9D9D9",
    "textAlign": "center",
    paddingTop: 45,
    paddingBottom: 20
  },
  "other": {
    // "marginTop": 32,
    "marginRight": "auto",
    "marginBottom": 32,
    "marginLeft": "auto",
    "paddingTop": 32,
    "width": 267,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
    borderRadius: 6,

  },
  // ".check": {
  //   "width": "14px",
  //   "marginRight": "18px"
  // },
  // ".mostFont": {
  //   "width": "28px"
  // },
  "resultFonts": {
    "marginLeft": 48
  },
  // ".font2": {
  //   "width": "14.93px"
  // }
});