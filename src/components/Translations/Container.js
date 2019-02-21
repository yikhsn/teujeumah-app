import React from 'react';
import styled from 'styled-components/native';

const StyledOutputContainer = styled.View`
    margin-bottom: 10;
    padding-left: 10;
    padding-right: 10;
`;

const StyledOutput = styled.View`
    background-color: #ffffff;
    height: auto;

    border-width: 1;
    border-color: #eeeeee;

    padding-top: 15;
    padding-bottom: 15;
    padding-left: 15;
    padding-right: 15;
`;

export default Translation = (props) => {
    return(
        <StyledOutputContainer>
            <StyledOutput>
                { props.children }
            </StyledOutput>
        </StyledOutputContainer>
    )
}