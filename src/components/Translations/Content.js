import React from 'react';
import styled from 'styled-components/native';

import capitalize_words from './../../helpers/capitalize_words';

const OutputContentContainer = styled.View`
    margin-bottom: 10;
`;

const OutputContentTitle = styled.Text`
    color: #08b586;
    font-size: 16;
    font-weight: 500;
    margin-bottom: 5;
`;

const OutputContent = styled.Text`
    color: #444444;
    font-size: 17;
    margin-bottom: 5;
`;

export default ContentTranslation = (props) => {
    const { datas, titleName } = props;

    const renderDatas = datas.map( (data, index) => {
        return <OutputContent key={index}>{ data }</OutputContent>
    });
    
    return(
        <OutputContentContainer>
            <OutputContentTitle>
                { capitalize_words(titleName) }
            </OutputContentTitle>
            
            { renderDatas }

        </OutputContentContainer>
    )
}