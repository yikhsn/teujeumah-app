import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import ToggleButton from './ToggleButton';
import SelectButton from './SelectButton';

const SelectContainer = styled.View`
    height: 50;
    background-color: #ffffff;

    flex-direction: row;

    
    border-color: #eeeeee;
    border-bottom-width: 2;
`;

export default Select = (props) => {
    return(
        <SelectContainer>
            <SelectButton 
                language='Aceh' />
            <ToggleButton />
            <SelectButton 
                language='Indonesia' />
        </SelectContainer>
    )
}