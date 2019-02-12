import React from 'react';
import styled from 'styled-components/native';


const TitleOutputContainer = styled.View`
    margin-bottom: 10;

    flex-direction: row;
`;

const TitleOutput = styled.Text`
    color: #666666;
    font-size: 16;
`;

const TitleWord = styled.Text`
    color: #08b586;
    font-size: 16;
`;

export default Title = (props) => {

    const { titleName, words } = props;

    return(
        <TitleOutputContainer>
            <TitleOutput>{titleName.toUpperCase() + ' - '}</TitleOutput>
            <TitleWord>{words.toLowerCase()}</TitleWord>
        </TitleOutputContainer>
    )
}