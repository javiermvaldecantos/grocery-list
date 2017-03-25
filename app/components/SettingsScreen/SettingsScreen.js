import React from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import { LeftHeaderControls } from './SettingsScreenHeaderControls.js';

import styles from './SettingsScreen.style.js';

class SettingsScreen extends React.Component {

  static navigationOptions = {
    header: ({ navigate, goBack }) => {
      var headerOptions = {
        style: styles.header,
        title: 'Settings',
        titleStyle: styles.title,
        backTitle: null
      }
      if(Platform.OS === 'android') headerOptions.left = <LeftHeaderControls onBackButtonPress={() => goBack()}/>

      return headerOptions;
    }
  }

  render() {
    return (
      <View>
        {Platform.OS === 'android' &&
          <StatusBar backgroundColor={PRIMARY_COLOR.DARK} />
        }
        <Text>Settings</Text>
      </View>
    )
  }
}

export default SettingsScreen;
