import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Groceries extends Component {

  render() {
      const nav = this.props.navigator;
    return (
      <View style={styles.container}>
        <Text> Hello! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0
  },
});