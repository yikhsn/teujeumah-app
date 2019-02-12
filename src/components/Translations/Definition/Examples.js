import React from 'react';
import styled from 'styled-components/native';

const ExamplesContainer = styled.View`
    margin-bottom: 10;
`;

const ExamplesTitle = styled.Text`
    color: #08b586;
    font-size: 16;
    font-weight: 500;
    margin-bottom: 5;
`;

const ExamplesContent = styled.View`
    margin-bottom: 5;
`;

const ExampleWord = styled.Text`
    color: #444444;
    font-size: 17;
`;

const ExampleTranslation = styled.Text`
    color: #666666;
    font-size: 16;
`;

export default Examples = (props) => {
    const {datas} = props;

    return(
        <ExamplesContainer>
            <ExamplesTitle>Contoh Kalimat</ExamplesTitle>
                {datas.map( (data, index) => {
                    return(
                        <ExamplesContent key={index} >
                            <ExampleWord>
                                {data.word}
                            </ExampleWord>
                            <ExampleTranslation>
                                "{data.translation}"
                            </ExampleTranslation>
                        </ExamplesContent>        
                    )
                })}
        </ExamplesContainer>
    )
}