import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import containers from '../style/containers';
import text from '../style/text';

export default class GroceryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = "black";
    return (
      <View style={containers.groceryItem}>
        <Text style={{ color: textColor }}>
          {this.props.title}
        </Text>
      </View>
    );
  }
};
