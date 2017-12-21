import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default containers = StyleSheet.create({
    general: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 0
    },
    button: {
      height: 50,
      width: 150,
      backgroundColor: '#8377f3',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "#ff0",
      alignItems: 'center',
      justifyContent: 'center'
    },
    // ------------------- Title Screen Properties ----------------- //
    cardRow: {
      flexDirection: 'row',
      flex: 0.30,
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0
    },
    
    title: {
      flex: 0.1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 45,
      paddingBottom: 45
    },
    
    titleCard: {
      flex:0.4,
      backgroundColor: '#9ddbd3',
      alignItems: 'center',
      justifyContent: 'center',
      height: 140,
      marginLeft:5,
      marginRight:5,
      borderRadius: 10
    },
    //-------------------- Grocery Screen properties ----------------- //
    groceryContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 0
    },
    listview: {
      flex: 0.80,
      width: '70%',
      backgroundColor: '#888',
      alignItems: 'stretch',
      justifyContent: 'space-around',
    },
    groceryItem: {
      flex: 1,
      backgroundColor: '#9ddbd3',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom:5,
    },
  });
  