/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, NavigationActions } from 'react-navigation'
import { Container, Header, Content, Icon, Button } from 'native-base';
import { Provider } from "react-redux";
import store from './src/store/index'

import Home from './src/components/Home'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/* <View style={styles.container}>
        <Text style={styles.welcome}>Khodhi apayaaaaererereaaa!</Text>
        <Text>Woy!</Text>
        <Home />
      </View> */}
              <Home />
      </Provider>
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
