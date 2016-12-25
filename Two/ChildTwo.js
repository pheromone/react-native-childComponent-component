/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  子组件传递给父组件
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class ChildTwo extends Component {
    static defaultProps = {
        two: '我是子组件传给主组件的值'
    };
    render() {
        return (
                <Text style={styles.welcome} onPress={()=>this.passMenthod()}>
                    我是子组件TWO
                </Text>
        );
    }
    passMenthod = () =>{
        this.props.pushDetails()
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

