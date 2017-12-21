import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import GroceryItem from '../components/GroceryItem';
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

  openModal = () => {
    let currGroceries = this.state.groceries;
    this.setState({groceries: currGroceries, isModalVisible: true});
  };

  closeModal = () => {
    let currGroceries = this.state.groceries;
    this.setState({groceries: currGroceries, isModalVisible: false});
  };

  render() {
    const nav = this.props.navigator;
    return (
      <View style={containers.groceryContainer}>
        <TouchableOpacity style={containers.button} onPress={this.openModal.bind(this)}>
          <Text> Add New Item! </Text>
        </TouchableOpacity>
        <View style={containers.listview}>
          <FlatList
            data={this.state.groceries}
            renderItem={this._renderItem}
          />
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={containers.modalContainer}>
            <Text> Oh hello! </Text>
            <TouchableOpacity style={containers.button} onPress={this.closeModal.bind(this)}>
              <Text> Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
