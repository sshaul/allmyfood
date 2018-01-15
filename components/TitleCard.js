import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
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
    if (this.props.name == 'Cooking') {
      navigate('Cooking', {});
    }
  }

  render() {
    return (
      <TouchableOpacity style={containers.titleCard} onPress={this.navigateCard.bind(this)}>
        <Text>{this.props.name} </Text>
      </TouchableOpacity>
    );
  }
}