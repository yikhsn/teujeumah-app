import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// screen
import App from './src/screens/Main';
import SelectLanguage from './src/screens/SelectLanguage';

AppRegistry.registerComponent(appName, () => App);