/**
 * Grocery List app
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppComponent from './app';

export default class GroceryList extends Component {
  render() {
    return (
      <AppComponent />
    );
  }
}

AppRegistry.registerComponent('GroceryList', () => GroceryList);
