import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import GroceryItem from '../components/GroceryItem';
import containers from '../style/containers';
import text from '../style/text';

export default class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {groceries: [{key: 'guava'}, 
    {key: 'milk'}]};
  }

  _renderItem = ({item}) => (
    <GroceryItem
      title={item.key}
    />
  );

  render() {
    const nav = this.props.navigator;
    return (
      <View style={containers.groceryContainer}>
        <Button backgroundColor='#238' title="Add New Item"></Button>
        <View style={containers.listview}>
          <FlatList
            data={this.state.groceries}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}
