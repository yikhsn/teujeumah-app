import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './components/Header/Header';
import Select from './components/Select/Select';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Select />
      </View>
    );
  }
}