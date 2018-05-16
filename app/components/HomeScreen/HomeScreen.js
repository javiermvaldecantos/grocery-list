import React from 'react';
import {View, Text, Button, StatusBar, ScrollView, Platform, Modal} from 'react-native';
import { LeftHeaderControls, RightHeaderControls } from './HomeScreenHeaderControls.js';
import styles from './HomeScreen.style.js';

import DEFAULT_CATEGORIES from '../../model/default_categories.js'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../icons/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'My Lists',
    header: ({ navigate }) => ({
      style: styles.header,
      titleStyle: styles.title,
      left: <LeftHeaderControls onMenuButtonPress={() => navigate('DrawerOpen')} />,
      right: <RightHeaderControls onAddButtonPress={() => this.onAddListPress()} />,
      backTitle: null
    })
  };

  static lists = [];  // Array of grocery lists

  constructor(props) {
    super(props);

    this.state = {
      addListModalVisible: false
    }

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

        <Modal animationType="slide"
               transparent={false}
               visible={this.state.addListModalVisible}
               onRequestClose={() => {alert("Modal has been closed.")}}>
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            {/*<TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>*/}

          </View>
         </View>
        </Modal>

        <ScrollView>
          <Text>List 1</Text>
          <Text>List 2</Text>
          <Text>List 3</Text>
          <Button onPress={() => navigate('ListDetail')}
                  title="Go to ListDetail view"/>
          {DEFAULT_CATEGORIES.map( (category,index) =>
            <View key={index} style={{height:56, padding:4, backgroundColor:'white', flexDirection:'row'}}>
              <Text style={{fontSize:16, flex:1, paddingVertical: 10}}>
                {category.en}
              </Text>
              <View style={{width: GLOBAL_HEIGHT.TOUCH_TARGET,height: GLOBAL_HEIGHT.TOUCH_TARGET,padding: 12}}>
                <Icon name={category.image} style={{fontSize:24, color:ICON_COLOR.ACTIVE.DARK}}/>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }

  onAddListPress() {
    alert('create list');
    // create list
    // this.setState({addListModalVisible: true});
  }

  onOpenDrawerPress() {
    this.props.navigation.navigate('DrawerOpen');
  }
}

export default HomeScreen;
