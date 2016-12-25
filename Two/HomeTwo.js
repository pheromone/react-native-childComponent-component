
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  子组件传递给父组件
 *  子组件把事件或值传递给父组件,然后在父组件push和显示
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ChildTwo from './ChildTwo'
import TwoDetails from './TwoDetails'
export default class HomeTwo extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value:''
        };
      }
    render() {
        return (
            <View style={styles.container}>
            <ChildTwo pushDetails = {()=>this.pushDetails()} />
                <Text>
                    {ChildTwo.defaultProps.two}
                </Text>
            </View>
        );
    }
    pushDetails = ()=>{
        this.props.navigator.push({
            component:TwoDetails
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

