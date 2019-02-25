import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as setTranslateActionCreators from '../../store/actionCreator';

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

class Select extends Component {
    
    state = {
        rotateValue: new Animated.Value(0),
    }

    rotateToggle = () => {

        Animated.timing(
            this.state.rotateValue,
            {
                toValue: 1,
                duration: 150,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.setState({ rotateValue: new Animated.Value(0) }))
    }
    
    onToggleHandler = (from, to) => {
        this.rotateToggle();
        this.props.setTranslateTo(from);
        this.props.setTranslateFrom(to);
    }

    render(){
        const { translateFrom, translateTo } = this.props.datas;

        const rotate = this.state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        
        return(
            <SelectContainer>
                <SelectButton 
                    language={ capitalize_words(translateFrom) }
                    navigation={ this.props.navigation }
                    typeSelect='translateFrom'
                    title='Terjemahkan Dari'
                />
                <ToggleButton 
                    onToggleHandler={this.onToggleHandler}
                    rotateValue={rotate} 
                    />
                <SelectButton 
                    language={ capitalize_words(translateTo) }
                    navigation={ this.props.navigation }
                    typeSelect='translateTo'
                    title='Terjemahkan Ke'
                />
            </SelectContainer>
        )
    }
}
const mapStateToProps = state => {
    return{
        datas: state
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(setTranslateActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Select);