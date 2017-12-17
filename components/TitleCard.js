import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TitleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  helloWorld() {
    console.log('hi!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
        <Button title="Click me" onPress={this.helloWorld.bind(this)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    width: 150,
    backgroundColor: '#9ddbd3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});