import React from 'react';
// import { View, Text, Dimensions }  from 'react-native';
import styled from 'styled-components/native';

const StyledHeader = styled.View`
    background-color: #08b586;
    border-bottom-color: red;
    justify-content: center;
    /* align-items: center; */
    height: 50;
`;

const StyledNavBrand = styled.Text`
    font-size: 23;
    color: #ffffff;
    margin-left: 15;    
`;

export default Header = (props) => {
    return(
        <StyledHeader>
            <StyledNavBrand>Teujeumah</StyledNavBrand>
        </StyledHeader>
    )
}