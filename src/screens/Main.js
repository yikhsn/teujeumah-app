import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';

import Header from '../components/Header/Header';
import Select from '../components/Select/Select';
import Input from '../components/Input/Input';
import Translation from '../components/Translations/Translation/Translation';
import Definition from '../components/Translations/Definition/Definition';
import Output from '../components/Output/Output';

export default class App extends Component {
    state = {
        words: '',
        translation: [],
        type: []
    }

    initialState = {
        words: '',
        translation: [],
        type: []
    }

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

    render() {
        return(
            <ScrollView>
                <Header />
                <Select />
                
                <Input
                    inputChanged={ this.inputChangedHandler }
                    words={ this.state.words }
                />

                <Output data={ this.state } />

                { 
                    this.state.type.length > 0 
                        ? <Translation datas={ this.state } /> 
                        : null 
                }

                { 
                    this.state.type.length > 0 
                        ? this.state.type.map( (cur, index) => {
                            return <Definition key={index} datas={ cur } /> 
                        })
                        : null
                }

            </ScrollView>
        )
    }
}