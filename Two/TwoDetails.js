
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

export default class TwoDetails extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>this.popTwo()}>
                    我是TWO的details
                </Text>
            </View>
        );
    }
    popTwo = ()=>{
        this.props.navigator.pop({})
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

