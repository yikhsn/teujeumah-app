import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import Select from '../components/Select/Select';
import Input from '../components/Input/Input';
import Translation from '../components/Translations/Translation/Translation';
import Definition from '../components/Translations/Definition/Definition';
import Output from '../components/Output/Output';

class Main extends Component {
    static navigationOptions = {
        title: 'Teujeumah',
    }

    render(){
        return(
            <ScrollView>
                <Select
                    navigation={ this.props.navigation }
                    datas={ this.props.datas }
                />

                <Input
                    inputChanged={ this.inputChanged }
                />

                <Output data={ this.props.datas } />
                
                { 
                    this.props.datas.type.length > 0 
                        ? <Translation datas={ this.props.datas } /> 
                        : null 
                }

                { 
                    this.props.datas.type.length > 0 
                        ? this.props.datas.type.map( (cur, index) => {
                            return <Definition key={index} datas={ cur } /> 
                        })
                        : null
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        datas: state
    }
}

export default connect(mapStateToProps)(Main);