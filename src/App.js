import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import { setCustomText } from 'react-native-global-props';

import mainReducer from './store/reducer';
import logger from './store/logger';
import AppNavigator from './AppNavigator';

const customTextProps = {
    style: {
        fontFamily: 'Lato Black'
    }
}

setCustomText(customTextProps);

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(logger)));

export default class App extends Component{    
    render(){
        return(
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}