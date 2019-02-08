import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const StyledToggleButton = styled.TouchableOpacity`

`;

const onPress = () => {
    console.log('Toggle Button Pressed');
};

export default ToggleButton = (props) => {
    return(
        <View>
            <StyledToggleButton onPress={onPress}>
                <Text>Toggle</Text>
            </StyledToggleButton>
        </View>
    )
};