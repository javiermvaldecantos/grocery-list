import React from 'react';
import {Text, Platform} from 'react-native';
import {LeftHeaderControls} from './ListDetailScreenHeaderControls.js';

import styles from './ListDetailScreen.style.js';

class ListDetailScreen extends React.Component {

  static navigationOptions = {
    header: ({ navigate, goBack }) => {
      var headerOptions = {
        style: styles.header,
        title: 'List Detail',
        titleStyle: styles.title,
        backTitle: null
      }
      if(Platform.OS === 'android') headerOptions.left = <LeftHeaderControls onBackButtonPress={() => goBack()}/>

      return headerOptions;
    }
  }

  constructor(props) {
    super(props)
  }

  render() {

    const navigationParams = this.props.navigation.state.params;

    return (
      <Text>{/*navigationParams.list.name*/} List Details</Text>

    )
  }
}

export default ListDetailScreen;
