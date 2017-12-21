import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleCard from '../components/TitleCard';
import containers from '../style/containers';
import text from '../style/text';

export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={containers.general}>
        <View style={containers.title}>
          <Text style={text.title}>allMyFood</Text>
        </View>
        <View style={containers.cardRow}>
          <TitleCard name="Cooking" nav={this.props.navigation} />
          <TitleCard name="Baking" nav={this.props.navigation} />
        </View>
        <View style={containers.cardRow}>
          <TitleCard name="My Recipes" nav={this.props.navigation} />
          <TitleCard name="My Groceries" nav={this.props.navigation} />
        </View>
      </View>
    );
  }
}
