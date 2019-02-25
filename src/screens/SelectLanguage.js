import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import styled from 'styled-components/native';

import * as actionCreators from '../store/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import capitalize_words from '../helpers/capitalize_words';

import HeaderSelect from '../components/SelectLanguage/HeaderSelect';
import FooterSelect from '../components/SelectLanguage/FooterSelect';

const SelectLanguageContainer = styled.View`
    background-color: #ffffff;
    flex: 1;
`;

const ListLanguage = styled.TouchableOpacity`
    padding-bottom: 5;
    padding-top: 5;
`;

const ListText = styled.Text`
    color: #333333;
    font-size: 16;
    padding-left: 30;

    flex-direction: row;
    align-items: center;
`;

class SelectLanguage extends Component {
        
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ffffff',
            }
        }
    })

    onLanguageChanged = language => {

        // get type changed ('setTranslateTo' or 'setTranslateFrom')
        const typeChanged = this.props.navigation.getParam('type', null);


        if (language !== this.props[typeChanged]) this.props.toggleLanguage();
        
        // navigate to main screen
        this.props.navigation.navigate('Main');
    };

    render() {
        return(
            <ScrollView>
                <SelectLanguageContainer>
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.props.language}
                        renderItem={ ({ item }) => {
                            return(
                                <ListLanguage
                                    onPress={ () => this.onLanguageChanged(item.language)}
                                >
                                    <ListText>
                                        {capitalize_words(item.language)}
                                    </ListText>
                                </ListLanguage> 
                            )
                        }} 
                        keyExtractor={ (item, index) => item + index }
                        ListHeaderComponent={ () => <HeaderSelect /> }
                        ListFooterComponent={ () => <FooterSelect />}
                    />
                </SelectLanguageContainer>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.language,
        translateFrom: state.translateFrom,
        translateTo: state.translateTo
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);