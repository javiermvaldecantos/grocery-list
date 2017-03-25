import React from 'react';

import {AppRegistry} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

//----- Global variables -----//
import global_color_palette from './global/color_palette.js';
import global_layout from './global/layout.js';
import global_typography from './global/typography.js';

//----- App screens -----//
import HomeScreen from './components/HomeScreen';
import ListDetailScreen from './components/ListDetailScreen';
import SettingsScreen from './components/SettingsScreen';

//----- StackNavigator between home screen and a list detail view -----//
const ListNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  ListDetail: {screen: ListDetailScreen },
  Settings: { screen: SettingsScreen }
});

//----- App main navigator: Can navigate to home screen and settings -----//
const AppNavigator = DrawerNavigator({
  Home: { screen: ListNavigator,
          navigationOptions: {
            drawer: {
              label: 'My Lists'
            },
          },
        },
  Settings: { screen: SettingsScreen,
              navigationOptions: {
                drawer: {
                  label: 'Settings'
                },
              },
            }
});

//----- App component -----//
class App extends React.Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('GroceryList', () => App);
