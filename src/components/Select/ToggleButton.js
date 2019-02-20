import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

import * as setTranslateActionCreators from '../../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const StyledToggleButton = styled.TouchableOpacity`
    flex: 2;

    justify-content: center;
    align-items: center;
`;

class ToggleButton extends Component {
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

const mapStateToProps = state => {
    return{
        datas: state
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(setTranslateActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);