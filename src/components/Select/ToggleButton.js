import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const StyledToggleButton = styled.TouchableOpacity`
    flex: 2;

    justify-content: center;
    align-items: center;
`;

export default class ToggleButton extends Component {
    onToggleHandler = (from, to) => {
        this.props.setTranslateTo(from);
        this.props.setTranslateFrom(to);
    }

    render() {
        const { translateFrom, translateTo } = this.props.datas;
        
        return(
            <View>
                <StyledToggleButton
                    onPress={ () => this.onToggleHandler(translateFrom, translateTo) }
                    >
                <Image 
                    source={ require('../../img/double-arrow-grey.png') }
                    style={ {
                        width: 20,
                        height: 15
                    } }
                    />
                </StyledToggleButton>
            </View>
        )   
    }
};