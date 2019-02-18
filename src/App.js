import React, { Component } from 'react';
import axios from 'axios';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './store/reducer';
import * as actionTypes from './store/actions';

import AppNavigator from './AppNavigator';

export default class App extends Component{
    state = {
        words: '',
        translation: [],
        type: [],
        language: [
            { id: 1, language: 'aceh' },
            { id: 2, language: 'indonesia' }
        ],
        translateFrom: 'aceh',
        translateTo: 'indonesia'
    }

    initialState = {
        words: '',
        translation: [],
        type: [],
        language: [
            { id: 1, language: 'Indonesia' },
            { id: 2, language: 'Aceh' }
        ],
        translateFrom: 'aceh',
        translateTo: 'indonesia'
    }

    setTranslateTo = language => this.setState({ translateTo: language });

    setTranslateFrom = language => this.setState({ translateFrom: language });

    setAllData = (data) => this.setState({ type: data });

    setWords = (words) => this.setState({ words });

    setTranslation = (data) => {
        const translation = this.state.translation;

        if ( Array.isArray(data) ) {
            translation.push(data[0].translations[0]);
            this.setState({ translation });
        }
        else {
            translation.push(data);            
            this.setState( {translation} );
        }
    }

    getData = (query) => {
        return axios.get('http://10.0.2.2:3001/api/words/search/' + query)
            .then( data => {
                return data.data;
            }).catch(err => {
                return query;
            });
    }

    // function will be called if user input more than one word
    getDataMultiple = (data) => {
        
        // split word user input into singular word and add it to an array
        const queries = data.split(' ').map( query => query.trim() );

        // loop each word in the array to get the the translation 1 by 1
        for (let query of queries){

            // get the translation of each word user input
            this.getData(query)
                .then(data => this.setTranslation(data) )
                .catch(err => console.log('error when try to get data'));
        }
    }

    // main function, who will see all user input to do things base on that input
    inputChangedHandler = (input) => {

        const text = input.trim();
        
        // checking if there is user input, not a space or blank input
        if( text ){

            // set the words that user input to state, fully like user input
            // not the text was trimed
            this.setWords(input);
            
            // check if user input more than word based on space between
            // two or more word, if yes, translate input one by one word
            if (text.includes(' ')){
                this.setState({ type: [], translation: [] }); 

                this.getDataMultiple(text);
            }
            
            // if user only input one word
            else{
                // get all data by user input
                this.getData(text).then((data) => {

                    this.setState({ type: [], translation: [] }); 

                    // if there is a respon from the request, set the respon to state
                    if (Array.isArray(data)) this.setAllData(data);

                    // set translation by data system get
                    this.setTranslation(data);
                });
            }
        }
        else this.setState(this.initialState);
    }
    
    render(){
        return(
            // <Provider store={store}>
                <AppNavigator
                    screenProps={{
                        datas: this.state,
                        inputChanged: this.inputChangedHandler,
                        setTranslateTo: this.setTranslateTo,
                        setTranslateFrom: this.setTranslateFrom
                    }}
                />
            /* </Provider> */
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         words: state.words,
//         translations: state.translations,
//         type: state.type
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onSetTranslation: (translations) => dispatch(
//             {
//                 type: actionTypes.SET_TRANSLATION, 
//                 translations: translations
//             }
//         ),
//         onSetData: (data) => dispatch(
//             {
//                 type: actionTypes.SET_DATA,
//                 data: data
//             }
//         ),

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);