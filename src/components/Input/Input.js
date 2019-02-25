import React, { Component } from 'react'
import styled from 'styled-components/native';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/actionCreator';
import { Keyboard } from 'react-native';

const StyledInputContainer = styled.View`
    background-color: red;
    border-bottom-color: #eeeeee;
    border-bottom-width: 2;
    margin-bottom: 10;

    /* this will be used later to add more button in input */
    /* height: 200; */
`;

const StyledTextInput = styled.TextInput`
    background-color: #ffffff;
    height: 180;
    text-align-vertical: top;
    font-size: 22;
    color: #222222;
    padding-left: 10;
    padding-right: 10;
`;

class Input extends Component {
    
    getTranslation = (data) => {
        if ( Array.isArray(data) )
            this.props.setTranslation(data[0].translations[0]);
        else
            this.props.setTranslation(data);
    }

    getMultipleTranslation = (data) => {
        if ( Array.isArray(data) )
            this.props.setMultipleTranslation(data[0].translations[0]);
        else
            this.props.setMultipleTranslation(data);
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
                .then(data => this.getMultipleTranslation(data) )
                .catch(err => console.log('cant get the data'));
        }
    }

    resetData = () => {
        this.props.setWords('');

        this.props.setTranslation([]);

        this.props.setAllData([]);
    }

    onSingleInputHandler = text => {
        // get all data by user input
        this.getData(text).then((data) => {
            this.props.setTranslation([]);

            this.props.setAllData([]);

            // if there is a respon from the request, set the respon to state
            if (Array.isArray(data)) this.props.setAllData(data);

            // set translation by data system get
            this.getTranslation(data);
        });
    }

    onMultipleInputHandler = text => {
        // this.setState({ type: [], translation: [] }); 
        this.props.setTranslation([]);

        this.props.setAllData([]);

        this.getDataMultiple(text);
    }

    inputChangedHandler = (input) => {

        const text = input.trim();
        
        // checking if there is user input, not a space or blank input
        if( text ){

            // add words that user input to redux, not the text was trimed
            this.props.setWords(input);
            
            // if user input more than word based on space between text
            if (text.includes(' ')) this.onMultipleInputHandler(text);
            
            // if user only input one word
            else this.onSingleInputHandler(text);
        }

        else this.resetData();
    }

    render(){
        return(
            <StyledInputContainer>
                <StyledTextInput 
                    onChangeText={(words) => this.inputChangedHandler(words) }
                    value={ this.props.datas.words }
                    multiline={true}
                    autoCorrect={false}
                    autoFocus={false}
                    returnKeytype='done'
                    // onSubmitEditing={ Keyboard.dismiss() }
                />
            </StyledInputContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Input);