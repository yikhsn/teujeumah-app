import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const SelectButtonContainer = styled.View`
    flex: 3;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`;

const StyledSelectButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`;

const StyledTextButton = styled.Text`
    font-size: 16;
    font-weight: 500;
    color: #08b586;
    margin-right: 2;

    font-family: 'Lato Black';
`;

export default class SelectButton extends Component {
    render() {
        return(
            <SelectButtonContainer>
                <StyledSelectButton
                    onPress={ () => this.props.navigation.navigate('SelectLanguage', {
                        type: this.props.typeSelect,
                        title: this.props.title
                    })}
                >
                    <StyledTextButton>
                        { this.props.language }
                    </StyledTextButton>
                    <Image 
                        source={require('../../img/down-arrow-green.png')}
                        style={{
                            width: 11,
                            height: 11,
                        }}
                    />
                </StyledSelectButton>
            </SelectButtonContainer>

        )
    }
}