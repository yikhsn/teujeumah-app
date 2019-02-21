import React from 'react';
import styled from 'styled-components/native';
import { Image, View } from 'react-native';

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
`;

export default SelectButton = (props) => {
    return(
        <SelectButtonContainer>
            <StyledSelectButton
                onPress={ () => props.navigation.navigate('SelectLanguage', {
                    type: props.typeSelect,
                    title: props.title
                })}
            >
                <StyledTextButton>
                    { props.language }
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