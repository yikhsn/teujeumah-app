import React from 'react';
import styled from 'styled-components/native';
import { Text, View, Image } from 'react-native';

const StyledSelectButton = styled.TouchableOpacity`
    height: null;
    width: null;

    flex: 2;
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

    console.log(props);

    return(
        <StyledSelectButton
            onPress={ () => props.navigation.navigate('SelectLanguage', {
                type: props.typeSelect
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
    )
}