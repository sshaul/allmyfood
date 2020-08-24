import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import Groceries from '../screens/Groceries';
import Cooking from '../screens/Cooking';

export const Root = StackNavigator({
    // Home : {
    //     screen: HomeScreen,
    //     navigationOptions : {
    //         header: null
    //     }
    // },
    Groceries : {
        screen: Groceries,
        navigationOptions : {
            title: 'My Groceries'
        }
    },
    // Cooking : {
    //     screen: Cooking,
    //     navigationOptions : {
    //         title: 'Cooking'
    //     }
    // }
});