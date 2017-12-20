import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import Groceries from '../screens/Groceries';

export const Root = StackNavigator({
    Home : {
        screen: HomeScreen,
        navigationOptions : {
            title: 'Welcome!'
        }
    },
    Groceries : {
        screen: Groceries,
        navigationOptions : {
            title: 'My Groceries'
        }
    }
});