import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

export default class Groceries extends Component {

  render() {
    const nav = this.props.navigator;
    return (
      <View style={styles.container}>
        <Button backgroundColor='#238' title="Add New Item"></Button>
        <FlatList> Hello! </FlatList>
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
  }
});