
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  父组件传递给子组件
 *  父组件把值或者navigator传给子组件,然后在子组件里面实现push和显示
 */

import React, { Component } from 'react';
import ChildOne from './ChildOne'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HomeOne extends Component {
    render() {
        return (
          <ChildOne navigatorPush = {this.props.navigator} passValue = '我是一个父组件传给子组件的值'/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

