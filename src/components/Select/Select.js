import React from 'react';
import styled from 'styled-components/native';
import capitalize_words from '../../helpers/capitalize_words';
import ToggleButton from './ToggleButton';
import SelectButton from './SelectButton';

const SelectContainer = styled.View`
    height: 50;
    background-color: #ffffff;
    flex-direction: row;
    border-color: #eeeeee;
    border-bottom-width: 2;
    justify-content: center;
    align-items: center;
`;

export default Select = (props) => {
    const { translateFrom, translateTo } = props.datas;

    return(
        <SelectContainer>
            <SelectButton 
                language={ capitalize_words(translateFrom) }
                navigation={ props.navigation }
                typeSelect='setTranslateFrom'
                title='Terjemahkan Dari'
            />
            <ToggleButton />
            <SelectButton 
                language={ capitalize_words(translateTo) }
                navigation={ props.navigation }
                typeSelect='setTranslateTo'
                title='Terjemahkan Ke'
            />
        </SelectContainer>
    )
}