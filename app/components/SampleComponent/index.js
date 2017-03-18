import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import stylesheet from './stylesheet.js';

class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={stylesheet.view}>
        <Icon name="menu" size={30} color="#fff"/>
        <Text style={stylesheet.text}>{this.props.title}</Text>
      </View>
    );
  }
}

export default SampleComponent;
