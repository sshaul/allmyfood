import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, DatePickerIOS } from 'react-native';
import { Button } from 'react-native-elements';
import GroceryItem from '../components/GroceryItem';
import containers from '../style/containers';
import text from '../style/text';
import Modal from 'react-native-modal';

export default class GroceryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: ''
    };
  }

  _addItem = () => {
    var newItem = {key: this.state.name};
    this.props._addGroceries(newItem);
  }

  render() {
    console.log(this.state.date);
    return (
        <Modal isVisible={this.props.visibility} onBackdropPress={this.props._close}>
          <View style={containers.modalContainer}>
            <Text>Item Name:</Text>
            <TextInput
              style={{height: '5%', width: '90%', borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({name: text})}
              value={this.state.text}
            />
            <Text>Expiration Date:</Text>
            <View style={containers.date}>
              <DatePickerIOS
                style={{ height: 30, width: '100%'}}
                date={this.state.date} onDateChange={(date)=>this.setState({date: date})}
                mode="datetime"/>
            </View>
            <TouchableOpacity style={containers.button} onPress={this._addItem}>
              <Text> submit </Text>
            </TouchableOpacity>
            <TouchableOpacity style={containers.button} onPress={this.props._close}>
              <Text> Close </Text>
            </TouchableOpacity>
          </View>
        </Modal>
    );
  }
}