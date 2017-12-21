import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import containers from '../style/containers';

export default class TitleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateCard() {
    const navigate = this.props.nav.navigate;
    if (this.props.name == 'My Groceries') {
      navigate('Groceries', {});
    }
  }

  render() {
    return (
      <View style={containers.titleCard}>
        <Text onPress={this.navigateCard.bind(this)}>{this.props.name} </Text>
      </View>
    );
  }
}