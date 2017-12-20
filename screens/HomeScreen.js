import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleCard from '../components/TitleCard';

export default class HomeScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>allMyFood</Text>
        </View>
        <View style={styles.cardRow}>
          <TitleCard name="Cooking" nav={this.props.navigation} />
          <TitleCard name="Baking" nav={this.props.navigation} />
        </View>
        <View style={styles.cardRow}>
          <TitleCard name="My Recipes" nav={this.props.navigation} />
          <TitleCard name="My Groceries" nav={this.props.navigation} />
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
  cardRow: {
    flexDirection: 'row',
    flex: 0.30,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  },
  // ------------------- App Title properties ----------------- //
  titleContainer: {
    flex: 0.1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 45,
    paddingBottom: 45
  },
  titleText: {
    flex: 1,
    backgroundColor: '#ff2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 45
  }
});
