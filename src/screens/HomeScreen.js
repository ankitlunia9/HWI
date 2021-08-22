import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Button
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import {styles} from '../styles/styles';

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

export default class HomeScreen extends Component {
    constructor() {
      super();

      this.state = {
        sharedProps : sharedProps
      }
    }
  
    render() {
      return (
        <View style={styles.outer}>
          <Text style={styles.titleText}> 
            BIT LORDS
          </Text>
          <View style={styles.innerBox}>
          <Button
            style={styles.buttons}
            title="Start"
            onPress={() => {}}
          />
          </View>
        </View>
      );

    } 
}

module.exports = HomeScreen;