
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  父组件传递给子组件
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    navigator,
} from 'react-native';
import OneDetails from './OneDetails'
export default class ChildOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}  onPress={()=>this.pushOneDetails()}>
                    我是子组件ONE
                </Text>
                <Text>
                    {this.props.passValue}
                </Text>
            </View>
        );
    }
    pushOneDetails = ()=>{

        this.props.navigatorPush.push({
        component:OneDetails
    })
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

