import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleCard from './components/TitleCard';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>allMyFood</Text>
        </View>
        <View style={styles.cardContainers}>
          <TitleCard name="Cooking" />
          <TitleCard name="Baking" />
          <TitleCard name="My Recipes" />
          <TitleCard name="My Groceries" />
        </View>
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
  cardContainers: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: 0
  },
  // ------------------- App Title properties ----------------- //
  titleContainer: {
    flex: 0.10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 45
  },
  titleText: {
    flex: 1,
    backgroundColor: '#ff2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 45
  }
});
