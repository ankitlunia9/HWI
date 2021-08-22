/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from "@react-navigation/stack";

import { styles } from './src/styles/styles';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}

var HomeScreen = require('./src/screens/HomeScreen');
var ShowScreen = require('./src/screens/ShowScreen');
var ScanScreen = require('./src/screens/ScanScreen');

//const Stack = createNativeStackNavigator();

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps : sharedProps
    }
  }

  render() {
    return (
      <ScanScreen />
    )
  } 
}

module.exports = ViroSample
