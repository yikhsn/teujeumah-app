import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Select from '../components/Select/Select';
import Input from '../components/Input/Input';
import Translation from '../components/Translations/Translation/Translation';
import Definition from '../components/Translations/Definition/Definition';
import Output from '../components/Output/Output';

export default class Main extends Component {

    static navigationOptions = {
        title: 'Teujeumah',
    } 
    
    render(){
        return(
            <ScrollView>
                <Select
                    navigation={ this.props.navigation }
                    datas={ this.props.screenProps.datas }
                    setTranslateTo = {this.props.screenProps.setTranslateTo}
                    setTranslateFrom = {this.props.screenProps.setTranslateFrom}
                    />
          
                <Input
                    inputChanged={ this.props.screenProps.inputChanged }
                    words={ this.props.screenProps.datas.words }
                    />
          
                <Output data={ this.props.screenProps.datas } />
          
                { 
                    this.props.screenProps.datas.type.length > 0 
                        ? <Translation datas={ this.props.screenProps.datas } /> 
                        : null 
                }

                { 
                    this.props.screenProps.datas.type.length > 0 
                        ? this.props.screenProps.datas.type.map( (cur, index) => {
                            return <Definition key={index} datas={ cur } /> 
                        })
                        : null
                }
            </ScrollView>
        )
    }
}