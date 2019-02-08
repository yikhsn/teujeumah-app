import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';

import Header from './components/Header/Header';
import HeaderSelect from './components/SelectLanguage/HeaderSelect';
import FooterSelect from './components/SelectLanguage/FooterSelect';

const SelectLanguageContainer = styled.View`
    background-color: #ffffff;
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
    render() {
        return(
            <View>
                <Header />
                <SelectLanguageContainer>
                    <FlatList
                        data={[
                            { id: 1, language: 'Indonesia' },
                            { id: 2, language: 'Aceh' }
                        ]}
                        renderItem={ ({ item }) => {
                            return(
                                <ListLanguage>
                                    <ListText>{item.language}</ListText>
                                </ListLanguage> 
                            )
                        }} 
                        keyExtractor={ (item, index) => item + index }
                        ListHeaderComponent={ () => <HeaderSelect /> }
                        ListFooterComponent={ () => <FooterSelect />}
                        />
                </SelectLanguageContainer>
            </View>
        )
    }
}