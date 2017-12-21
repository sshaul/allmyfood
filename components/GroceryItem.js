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
    return (
      <View style={containers.groceryItem}>
        <Text style={text.groceryItem}>
          {this.props.title}
        </Text>
        <Text style={[text.groceryItem, {fontSize: 12}]}>
          expirationdate
        </Text>
      </View>
    );
  }
};
