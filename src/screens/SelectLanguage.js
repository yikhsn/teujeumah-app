import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import styled from 'styled-components/native';

import capitalize_words from '../helpers/capitalize_words';

import HeaderSelect from '../components/SelectLanguage/HeaderSelect';
import FooterSelect from '../components/SelectLanguage/FooterSelect';

const SelectLanguageContainer = styled.View`
    background-color: #ffffff;
    flex: 2;
`;

const ListLanguage = styled.TouchableOpacity`
    padding-bottom: 5;
    padding-top: 5;
`;

const ListText = styled.Text`
    color: #333333;
    font-size: 15;
    padding-left: 30;

    flex-direction: row;
    align-items: center;
`;

export default class SelectLanguage extends Component {
    
    static navigationOptions = {
        title: 'Terjemahkan dari',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#08b586',
            }
        }
    }

    onLanguageChanged = language => {

        // get type changed pass by route navigation
        // ('setTranslateTo' or 'setTranslateFrom')
        const typeChanged = this.props.navigation.getParam('type', 'nggak di dapat');

        console.log(typeChanged);

        if (typeChanged === 'setTranslateTo') this.props.screenProps.setTranslateTo(language);
    
        else if (typeChanged === 'setTranslateFrom') this.props.screenProps.setTranslateFrom(language);

        this.props.navigation.navigate('Main');
    };

    render() {
        return(
            <ScrollView>
                <SelectLanguageContainer>
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.props.screenProps.datas.language}
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