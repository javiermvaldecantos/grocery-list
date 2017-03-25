import React from 'react';
import {View, Text, Button, StatusBar, Platform} from 'react-native';
import { LeftHeaderControls, RightHeaderControls } from './HomeScreenHeaderControls.js';
import styles from './HomeScreen.style.js'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'My Lists',
    header: ({ navigate }) => ({
      style: styles.header,
      titleStyle: styles.title,
      left: <LeftHeaderControls onMenuButtonPress={() => navigate('DrawerOpen')} />,
      right: <RightHeaderControls onAddButtonPress={this.onAddListPress} />,
      backTitle: null
    })
  };

  constructor(props) {
    super(props);

    // function binding
    this.onAddListPress = this.onAddListPress.bind(this);
    this.onOpenDrawerPress = this.onOpenDrawerPress.bind(this);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {Platform.OS === 'android' &&
          <StatusBar backgroundColor={PRIMARY_COLOR.DARK} />
        }
        <Text>List 1</Text>
        <Text>List 2</Text>
        <Text>List 3</Text>
        <Button onPress={() => navigate('ListDetail')}
                title="Go to ListDetail view"/>
      </View>
    )
  }

  onAddListPress() {
    // create list
    alert('create list');
  }

  onOpenDrawerPress() {
    this.props.navigation.navigate('DrawerOpen');
  }
}

export default HomeScreen;
