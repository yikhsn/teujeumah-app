import React from 'react';
import styled from 'styled-components';

const StyledTranslationContainer = styled.View`
    margin-top: 10px;
    padding-left: 10;
    padding-right: 10;
`;

const StyledTranslation = styled.View`
    height: 200;

    background-color: #08b586;
`;

const TextTranslation = styled.Text`
    font-size: 22;
    color: #ffffff;
    padding-left: 15;
    padding-right: 15;
    padding-top: 15;
    padding-bottom: 15;
`;

export default Translation = (props) => {
        
    const translation = props.data.translation.length > 0
                            ? props.data.translation.join(' ')
                            : props.data.words;

    return(
        <StyledTranslationContainer>
            <StyledTranslation>
                <TextTranslation>
                    { translation }
                </TextTranslation>
            </StyledTranslation>
        </StyledTranslationContainer>
    )
}