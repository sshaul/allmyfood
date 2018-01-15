import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, DatePickerIOS } from 'react-native';
import { Button } from 'react-native-elements';
import containers from '../style/containers';
import text from '../style/text';
import Modal from 'react-native-modal';

export default class Cooking extends Component {
  constructor(props) {
    super(props);
    this.state = {groceries: [{key: 'guava'}, 
      {key: 'milk'}],
      isModalVisible: false};
  }

  render() {
    const nav = this.props.navigator;
    return (
      <View style={containers.cooking}>
        <Text>Cooking stuff!</Text>
      </View>
    );
  }
}
