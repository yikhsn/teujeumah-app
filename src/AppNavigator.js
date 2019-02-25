import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import SelectLanguage from './screens/SelectLanguage';

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: Main,
        },
        SelectLanguage: {
            screen: SelectLanguage,
            navigationOptions: {
                headerTitleStyle: {
                    fontWeight: '400'
                },
            }
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
                fontSize: 20,
                fontWeight: '500'
            },
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;