import React, { Component } from 'react'
import styled from 'styled-components/native';


const StyledInputContainer = styled.View`
    background-color: red;
    border-bottom-color: #eeeeee;
    border-bottom-width: 2;

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

export default class Input extends Component {
    
    // shouldComponentUpdate(){
    //     return false;
    // }
    
    render(){
        return(
            <StyledInputContainer>
                <StyledTextInput 
                    onChangeText={(words) => this.props.inputChanged(words) }
                    value={ this.props.words }
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