import { createStackNavigator, createAppContainer } from 'react-navigation';

import CustomHeader from './components/Header/Header';

import Main from './screens/Main';
import SelectLanguage from './screens/SelectLanguage';

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: Main,
        },
        SelectLanguage: {
            screen: SelectLanguage
        },
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#08b586',
                height: 50
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 20
            },
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;