import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <View style={styles.container}>
        <Text onPress={this.navigateCard.bind(this)}>{this.props.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0.4,
    backgroundColor: '#9ddbd3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    marginLeft:5,
    marginRight:5
  },
  });