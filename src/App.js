import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './store/reducer';
import AppNavigator from './AppNavigator';

const store = createStore(mainReducer);

export default class App extends Component{    
    render(){
        return(
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}