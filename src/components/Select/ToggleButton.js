import React, { Component } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import styled from 'styled-components/native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const StyledToggleButton = styled.TouchableOpacity`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

class ToggleButton extends Component {
    
    render() {
        const { translateFrom, translateTo } = this.props.datas;
   
        return(
            <View style={{ flex: 1 }}>
                <StyledToggleButton
                    onPress={ () => this.props.onToggleHandler(translateFrom, translateTo) }
                >
                <Animated.Image 
                    source={ require('../../img/double-arrow-grey.png') }
                    style={{
                        width: 20,
                        height: 15,
                        transform: [{
                            rotate: this.props.rotateValue
                        }]
                    } }
                />
                </StyledToggleButton>
            </View>
        )   
    }
};

const mapStateToProps = state => {
    return{
        datas: state
    }
}

export default connect(mapStateToProps)(ToggleButton);