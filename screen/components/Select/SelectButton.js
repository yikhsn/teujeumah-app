import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const StyledSelectButton = styled.TouchableOpacity`
    font-size: 20;
    color: red;
`;

export default SelectButton = (props) => {
    return(
        <StyledSelectButton>
            <Text style={{ color: 'red' }}>{props.language}</Text>    
        </StyledSelectButton>           
    )
}