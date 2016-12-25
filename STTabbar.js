/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeOne from './One/HomeOne';
import HomeTwo from './Two/HomeTwo';

export default class STTabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'HomeOne'
        };
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="父->子"
                    selected={this.state.selectedTab === 'HomeOne'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'HomeOne' })}>
                    <HomeOne {...this.props}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="子->父"
                    selected={this.state.selectedTab === 'HomeTwo'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'HomeTwo' })}>
                    <HomeTwo {...this.props}/>
                </TabNavigator.Item>

            </TabNavigator>


        );
    }
}
const styles=StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#999',
    },
    selectedTextStyle:{
        color:'black',
    }
});
