import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../common/TouchableIcon';
import styles from './HomeScreenHeaderControls.style.js';

const LeftHeaderControls = ({onMenuButtonPress}) => {
  return (
    <TouchableIcon onPress={onMenuButtonPress}
                   icon_ios={<IonIcon name="ios-menu" style={styles.icon_ios} />}
                   icon_android={<MaterialIcon name="menu" style={styles.icon_android} />} />
  );
}

const RightHeaderControls = ({onAddButtonPress}) => {
  return (
    <TouchableIcon onPress={onAddButtonPress}
                   icon_ios={<IonIcon name="ios-add-circle-outline" style={styles.icon_ios} />}
                   icon_android={<MaterialIcon name="add" style={styles.icon_android} />} />
  );
}

export { LeftHeaderControls, RightHeaderControls };
