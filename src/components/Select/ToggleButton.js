import React from 'react';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';

const StyledToggleButton = styled.TouchableOpacity`
    flex: 2;

    justify-content: center;
    align-items: center;
`;

const onPress = () => {
    console.log('Toggle Button Pressed');
};

export default ToggleButton = (props) => {
    return(
        <View>
            <StyledToggleButton onPress={onPress}>
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
};