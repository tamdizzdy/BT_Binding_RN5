/**
 * @format
 */

import {AppRegistry} from 'react-native';
import DataBidingScreen from './screen/databiding/DataBidingScreen';
import NewFeedScreen from './screen/newfeed/NewFeedScreen';
import LoginScreen from './screen/login/LoginScreen';
import Emoji from './screen/emojiScreen/EmojiScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Emoji);
