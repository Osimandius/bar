import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Bookie1 from './screns/Bookie';
import Search1 from './screns/Search';

export default class Wired extends React.Component {
  render(){
    return (
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Transact:{screen:Bookie1},
  Saerch:{screen:Search1}
})
const AppContainer=createAppContainer(TabNavigator)