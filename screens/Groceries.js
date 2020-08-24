import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, DatePickerIOS } from 'react-native';
import { Button } from 'react-native-elements';
import GroceryItem from '../components/GroceryItem';
import GroceryModal from '../components/GroceryModal';
import containers from '../style/containers';
import text from '../style/text';
import Modal from 'react-native-modal';

export default class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {groceries: [{key: 'guava'}, 
      {key: 'milk'}],
      isModalVisible: false};
  }

  _renderItem = ({item}) => (
    <GroceryItem
      title={item.key}
    />
  );

  _openModal = () => {
    let currGroceries = this.state.groceries;
    this.setState({isModalVisible: true});
  };

  _closeModal = () => {
    let currGroceries = this.state.groceries;
    this.setState({isModalVisible: false});
  };

  _addGroceryItem = (item) => {
    this.setState({groceries: this.state.groceries.concat(item)});
    this._closeModal();
  }

  render() {
    const nav = this.props.navigator;
    return (
      <View style={containers.groceryContainer}>
        <TouchableOpacity style={containers.button} onPress={this._openModal}>
          <Text> Add New Item! </Text>
        </TouchableOpacity>
        <View style={containers.listview}>
          <FlatList
            data={this.state.groceries}
            renderItem={this._renderItem}
          />
        </View>
        <GroceryModal 
        // visibility={this.state.isModalVisible} 
        visibility={true}
          groceries={this.state.groceries}
          _close={this._closeModal.bind(this)}
          _addGroceries={this._addGroceryItem.bind(this)}/>
      </View>
    );
  }
}
