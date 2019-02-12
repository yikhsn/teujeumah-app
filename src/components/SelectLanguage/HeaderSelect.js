import React from 'react';
import styled from 'styled-components/native';

const NavigationContainer = styled.View`
    flex: 1;
    background-color: #ffffff;
    height: 40;

    padding-left: 10;

    flex-direction: row;
    align-items: center;

    /* border-bottom-width: 1;
    border-bottom-color: #eeeeee; */
`;

const NavigationText = styled.Text`
    color: #08b586;
    font-size: 16;
    font-weight: 500;
`;

export default Navigation = (props) => {
    return(
        <NavigationContainer>
            <NavigationText>
                Pilih Bahasa
            </NavigationText>
        </NavigationContainer>
    )
}